function doGet(e) {

    Logger.log(e);
    
    return HtmlService.createHtmlOutputFromFile("Trainer");
  }
  function userClicked(userinfo) {
    
        var url="https://docs.google.com/spreadsheets/d/1UST1IF3UWC4Gig-dLtDrjEd_jmDTBMPfMUrY-y4-OtE/edit#gid=0";
  
         var ss=SpreadsheetApp.openByUrl(url);
         var ws=ss.getSheetByName("Data");
    
    ws.appendRow([new Date(),userinfo.name,userinfo.email, userinfo.tel1, userinfo.tel2,userinfo.tel3,userinfo.tel4, userinfo.tel5, userinfo.tel6]);

  //   Logger.log(name,email,tel1,tel2,tel3,tel4,tel5,tel6+ " clicked the Button");
  }
  