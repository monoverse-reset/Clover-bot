function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const {type} = data;
  if(type === "remind"){
    const { yyyy,month,dd,hh,minute,url,message } = data;
    const now = new Date();
    const reserve_date = new Date(`${yyyy}/${month}/${dd} ${hh}:${minute}`);
    console.log(`${yyyy}/${month}/${dd} ${hh}:${minute}`)
    PropertiesService.getScriptProperties().setProperty(now.getTime(),JSON.stringify([reserve_date.getTime(),url,message]));
    return response(`リマインドを追加しました。\n${yyyy}/${month}/${dd} ${hh}:${minute}\n\`\`\`${message}\`\`\``);
  }else if(type === "deck"){

    const {name,url} = data;
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("deck");
    sheet.appendRow([name,url]);
    SpreadsheetApp.flush();
    return response({
      message : `デッキ名 : ${name}\n\nURL : ${url}`,
      names : sheet.getRange("A:A").getValues().flat().filter(v => v)
    });

  }else if(type === "delete_deck"){

    const {name} = data;
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("deck");
    sheet.clearContents();
    
    if(name === "_DELETE_ALL_VALUES") return response({message : "done",names:[]})

    const values = sheet.getRange("A:B").getValues().filter(v => v[0] !== name);
    sheet.getRange(1,1,values.length,values[0].length).setValues(values);

    return response(
      {
        message : `${name}を削除しました!`,
        names : values.map(v => v[0]).flat().filter(v => v)
      }
    )

  }

}
