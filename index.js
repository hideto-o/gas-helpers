function getSpreadSheetById(id){
    return SpreadsheetApp.openById(id);
}

function getAllSheetData(sheet) {
  return sheet.getDataRange().getValues();
}

function main(){
  test = getSpreadSheetById('your_spreadsheet_id');
  sheetName = 'your_sheet_name';
  sheet = test.getSheetByName(sheetName);
  allData = getAllSheetData(sheet);
}

