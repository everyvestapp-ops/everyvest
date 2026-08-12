// Everyvest waitlist — Google Apps Script backend
// Adapted from the course guide, with an extra "Interest" column (audience segmentation).
// SETUP: replace SPREADSHEET_ID below, run setupWaitlistSheet() once, then Deploy → Web app.

const SPREADSHEET_ID = '1N8u1ZBgQouIZyl_8kQE_Xq1q6vJAPCRGlXr_kAutVQg';
const SHEET_NAME = 'waitlist';

const HEADERS = [
  'Timestamp',
  'Username',
  'Email',
  'Interest'
];

/**
 * Run manually ONCE before deploying.
 * Creates the headers and formats the timestamp column.
 */
function setupWaitlistSheet() {
  const sheet = getWaitlistSheet_();
  ensureHeaders_(sheet);
  sheet.setFrozenRows(1);
  sheet.getRange('A:A').setNumberFormat('yyyy-mm-dd hh:mm:ss');
  SpreadsheetApp.flush();
}

/**
 * POST entry point from the site.
 */
function doPost(e) {
  const lock = LockService.getScriptLock();

  try {
    lock.waitLock(10000);

    if (!e || !e.postData || !e.postData.contents) {
      throw new Error('Missing POST body');
    }

    const data = JSON.parse(e.postData.contents);

    const username = String(data.name || '').trim();
    const email = String(data.email || '').trim().toLowerCase();
    const interest = String(data.interest || '').trim().toLowerCase();

    validateInput_(username, email, interest);

    const sheet = getWaitlistSheet_();
    ensureHeaders_(sheet);

    if (emailAlreadyRegistered_(sheet, email)) {
      return createJsonResponse_({
        success: true,
        alreadyRegistered: true
      });
    }

    sheet.appendRow([
      new Date(),
      protectSheetCell_(username),
      protectSheetCell_(email),
      protectSheetCell_(interest)
    ]);

    SpreadsheetApp.flush();

    return createJsonResponse_({
      success: true
    });

  } catch (error) {
    console.error(error.stack || error);

    return createJsonResponse_({
      success: false,
      error: 'Registration could not be saved'
    });

  } finally {
    if (lock.hasLock()) {
      lock.releaseLock();
    }
  }
}

/**
 * GET — health check (open the Web App URL in a browser).
 */
function doGet() {
  return createJsonResponse_({
    success: true,
    service: 'Everyvest Waitlist API'
  });
}

function getWaitlistSheet_() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    throw new Error(
      'Sheet "' + SHEET_NAME + '" was not found'
    );
  }

  return sheet;
}

function ensureHeaders_(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet
      .getRange(1, 1, 1, HEADERS.length)
      .setValues([HEADERS])
      .setFontWeight('bold');
  }
}

function emailAlreadyRegistered_(sheet, email) {
  const lastRow = sheet.getLastRow();

  if (lastRow < 2) {
    return false;
  }

  const emailColumn = HEADERS.indexOf('Email') + 1;

  const match = sheet
    .getRange(2, emailColumn, lastRow - 1, 1)
    .createTextFinder(email)
    .matchEntireCell(true)
    .matchCase(false)
    .findNext();

  return match !== null;
}

function validateInput_(username, email, interest) {
  if (username.length < 2 || username.length > 100) {
    throw new Error('Invalid username');
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (!emailPattern.test(email) || email.length > 254) {
    throw new Error('Invalid email');
  }

  // Interest is optional; if present it must be one of the form values.
  const allowed = ['', 'gold', 're', 'compare', 'monitor'];
  if (allowed.indexOf(interest) === -1) {
    throw new Error('Invalid interest');
  }
}

/**
 * Prevents formula injection into the sheet.
 */
function protectSheetCell_(value) {
  const text = String(value);

  if (/^[=+\-@]/.test(text)) {
    return "'" + text;
  }

  return text;
}

function createJsonResponse_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
