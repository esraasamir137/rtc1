function doGet(e) {

    Logger.log(e);
    
    return HtmlService.createHtmlOutputFromFile("Trainer");
  }
  function userClicked(name,email,tel1,tel2,tel3,tel4,tel5,tel6) {
        var url="https://docs.google.com/spreadsheets/d/1UST1IF3UWC4Gig-dLtDrjEd_jmDTBMPfMUrY-y4-OtE/edit#gid=0";
  
         var ss=SpreadsheetApp.openByUrl(url);
         var ws=ss.getSheetByName("Data");
    
    ws.appendRow([name,email,tel1,tel2,tel3,tel4,tel5,tel6]);
    Logger.log(ws)
  //   Logger.log(name+" is here "+"&his password is = "+password);
  }
  