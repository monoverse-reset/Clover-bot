const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require("axios");
const gas = process.env.GAS_URL;

const commands = require("../deploy-commands.js");

module.exports = (async (values) => {
  
  console.log(values);
  
  // const res = await axios.get(gas + "?how=get_deck_key");
  // const choices = res.data.map(v => {return {name : v,value :v}});
  const choices = values.map(v => {return {name : v,value :v}});
  
  commands.push(
    new SlashCommandBuilder()
    .setName("get_deck_by_name")
    .setDescription("デッキ名からURLを取得します。")
    .addStringOption(o => {
        return o.setName("deck_name")
                .setDescription("デッキ名")
                .setRequired(true)
                .setChoices(...choices)
    })
    
  )
  commands.push(
    new SlashCommandBuilder()
    .setName("delete_deck_by_name")
    .setDescription("登録を解除します。")
    .addStringOption(o => {
        return o.setName("deck_name")
                .setDescription("デッキ名")
                .setRequired(true)
                .setChoices({name : "all_decks",value:"_DELETE_ALL_VALUES"},...choices)
    })
    
  )
  
  return commands;
});
