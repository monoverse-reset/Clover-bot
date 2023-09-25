function doGet(e) {
  const how = e.parameter.how;
  let msg;
  if(how ==="everyone"){
    const list = PropertiesService.getScriptProperties().getProperties();
    const arr = Object.values(list).filter(v => v.startsWith("{")).map(elem => {
      elem = JSON.parse(elem);
    return [elem.name,elem.sv_id]
    })
    msg = createTable(arr);
  }else if(how==="one"){
    const discord_id = e.parameter.discord_id;
    const id = JSON.parse(env[discord_id])?.sv_id;
    msg = id?id:"【Error】\n登録されていません。";
  }else if(how==="append"){
    const discord_id = e.parameter.discord_id;
    const sv = e.parameter.sv_id;
    const name = e.parameter.name;
    const after = {
      "name":name||JSON.parse(env[discord_id]).name,
      "sv_id":sv
    };
    env[discord_id] = JSON.stringify(after);
    msg = "done";
  }else if(how === "delete"){
    const discord_id = e.parameter.discord_id;
    env[discord_id] = void 0;
    msg = "done";
  }else if(how === "get_deck_key"){

    msg = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("deck").getRange("A:A").getValues().flat().filter(v => v);

  }else if(how === "get_deck_by_name"){

    const name = e.parameter.name;

    msg = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("deck").getRange("A:B").getValues().find(v => v[0] === name)?.[1];

  }else if (how === "is_exist_value"){

    const value = e.parameter.value;

    msg = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("deck").getRange("A:B").getValues().find(v => v[1] === value)?.[0];

  }else if(how === "get_all_decks"){

    const values = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("deck").getRange("A:B").getValues().filter(v=>v[0]).map(v => `<${v[0]}>\n${v[1]}`)
    msg = values.join("\n\n");
    msg = "```md\n" + msg + "\n```";

  }
  return response(msg);
}


function response (content) {
  const res = ContentService.createTextOutput()
  // レスポンスの Content-Type ヘッダーに "application/json" を設定する
  res.setMimeType(ContentService.MimeType.JSON)
  // オブジェクトを文字列にしてからレスポンスに詰め込む
  res.setContent(JSON.stringify(content))
  return res
}
