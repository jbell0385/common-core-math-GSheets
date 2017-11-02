function onOpen() {
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
      .createMenu('CCSS')
      .addItem('Show sidebar', 'showSidebar')
      .addToUi();
}

function showSidebar() {
  var html = HtmlService.createTemplateFromFile('user-interface')
      .evaluate()
      .setTitle('Common Core State Standards')
      .setWidth(300);
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
      .showSidebar(html);
}


function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function addStandardName(stdName,std){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var range = sheet.getActiveCell();
  range.setValue(stdName);
  range.setNote(std);
}

function addStandard(std){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var range = sheet.getActiveCell();
  range.setValue(std);
}

//Google Apps Script Autocomplete Utility and Document Setup
/* SpreadsheetApp Sheet Range getActive getActiveRange getActiveSheet getActiveSpreadsheet getUi openById openByUrl setActiveRange setActiveSheet setActiveSpreadsheet addEditor addEditors addMenu addViewer addViewers appendRow autoResizeColumn copy deleteActiveSheet deleteColumn deleteColumns deleteRow deleteRows deleteSheet duplicateActiveSheet getActiveCell getActiveRange getActiveSheet getAs getBlob getColumnWidth getDataRange getEditors getFormUrl getFrozenColumns getFrozenRows getId getLastColumn getLastRow getName getNamedRanges getNumSheets getOwner getProtections getRange getRangeByName getRowHeight getSheetByName getSheetId getSheetName getSheetValues getSheets getSpreadsheetLocale getSpreadsheetTimeZone getUrl hideColumn hideRow insertColumnAfter insertColumnBefore insertColumnsAfter insertColumnsBefore insertImage insertRowAfter insertRowBefore insertRowsAfter insertRowsBefore insertSheet moveActiveSheet removeEditor removeMenu removeNamedRange removeViewer rename renameActiveSheet setActiveRange setActiveSelection setActiveSheet setColumnWidth setFrozenColumns setRozenRows setNamedRange setRowHeight setSpreadsheetLocale setSpreadsheetTimeZone show sort toast unhideColumn unhideRow updateMenu activate appendRow autoResizeColumn clear clearContents clearFormats clearNotes copyTo deleteColumn deleteColumns deleteRow deleteRows getActiveCell getActiveRange getCharts getColumnWidth getDataRange getFormUrl getFrozenColumns getFrozenRows getIndex getLastColumn getLastRow getMaxColumns getMaxRows getName getNamedRanges getParent getProtections getRange getRowHeight getSheetId getSheetName getSheetValues getTabColor hideColumn hideColumns hideRow hideRows hideSheet insertChart insertColumnAfter insertColumnBefore insertColumns insertColumnsAfter insertColumnsBefore insertImage insertRowAfter insertRowBefore insertRows isSheetHidden newChart protect removeChart setActiveRange setActiveSelection setName setFrozenRows setTabColor showColumns showRows showSheet sort unhideColumn unhideRow updateChart activate breakApart canEdit clear clearContent clearDataValidations clearFormat clearNote copyFormatToRange copyValues getA1Notation getBackground getBackgrounds getCell getColumn getDataSourceUrl getDataTable getDataValidation getDataValidations getDisplayValue getDisplayValues getFontColor getFontColors getFontFamilies getFontFamily getFontLine getFontLines getFontSize getFontSizes getFontStyle getFontStyles getFontWeight getFontWeights getFormula getFormulaR1C1 getFormulas getFormulasR1C1 getGridId getHeight getHorizontalAlignment getHorizontalAlignments getLastColumn getLastRow getMergedRanges getNote getNotes getNumColumns getNumRows getNumberFormat getNumberFormats getRow getRowIndex getSheet getValue getValues getVerticalAlignment getVerticalAlignments getWidth getWrap getWraps isBlank isEndColumnBounded isEndRowBounded isPartOfMerge isStartColumnBounded isStartRowBounded merge mergeAcross mergeVertically moveTo offset randomize setBackground setBackgroundRGB setBackgrounds setBorder setDataValidation setDataValidations setFontColor setFontColors setFontFamilies setFontFamily setFontLine setFontLines setFontSize setFontSizes setFontStyle setFontStyles setFontWeight setFontWeights setFormula setFormulaR1C1 setFormulas setFormulasR1C1 setHorizontalAlignment setHorizontalAlignments setNote setNotes setNumberFormat setNumberFormats setVerticalAlignments setVerticalAlignments setWrap setWraps */
