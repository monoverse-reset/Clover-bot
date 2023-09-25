
const { SlashCommandBuilder } = require('@discordjs/builders');

const commands = [
  new SlashCommandBuilder()
    .setName("deck_code")
    .setDescription("デッキコードをURLに変換")
    .addStringOption(o => {
        return o.setName("deck_code")
                .setDescription("デッキコードを入力。")
                .setRequired(true)
    }),
  new SlashCommandBuilder()
    .setName("user_id")
    .setDescription("ShadowverseのIDを検索。")
    .addUserOption(o=>{
        return o.setName("user")
                .setDescription("誰のIDを検索？")
                .setRequired(true)
    })
    .addStringOption(o=>{
        return o.setName("option")
                .setDescription("オプション")
                .setChoices({
          "name":"delete",
                  "value":"delete"
        },{"name":"everyone","value":"everyone"},{"name":"append","value" : "append"});
    })
    .addStringOption(o=>{
        return o.setName("id")
                .setDescription("正しいIDを入力")
    })
    .addStringOption(o=>{
        return o.setName("name")
                .setDescription("小文字のローマ字で名前を入力")
    }),
      new SlashCommandBuilder()
        .setName("deck_servey")
        .setDescription("使用可能デッキ調査")
        .addStringOption(o => {
            return o.setName("archetype")
                    .setDescription("デッキ名")
                    .setRequired(true)
        }),
  new SlashCommandBuilder()
    .setName("scl")
    .setDescription("scl戦績調査")
    .addStringOption(o => {
        return o.setName("team")
                .setDescription("チーム名")
                .setRequired(true)
    }),
    new SlashCommandBuilder()
        .setName("reminder")
        .setDescription("リマインド機能")
        .addNumberOption(o => {
            return o.setName("hh")
                    .setDescription("時間(24時制)")
                    .setRequired(true)
        })
        .addNumberOption(o => {
            return o.setName("mm")
                    .setDescription("分")
                    .setRequired(true)
        })
        .addChannelOption(o => {
            return o.setName("channel")
                    .setDescription("通知するチャンネル")
                    .setRequired(true)
        })
        .addStringOption(o => {
            return o.setName("message")
                    .setDescription("通知内容")
                    .setRequired(true)
        })
          .addNumberOption(o => {
          return o.setName("yyyy")
                  .setDescription("西暦(省略可)")
        })
        .addNumberOption(o => {
            return o.setName("month")
                    .setDescription("月(省略可)")
                    
        })
        .addNumberOption(o => {
            return o.setName("dd")
                    .setDescription("日(省略可)")
        }),
      new SlashCommandBuilder()
        .setName("help")
        .setDescription("コマンドガイド")
        .addStringOption(o => {
            return o.setName("commandname")
                    .setDescription("どのコマンド?")
                    .setChoices({
                        "name" : "deck_code",
                        "value" : "deck_code"
                    },
                    {
                        "name" : "deck_servey",
                        "value" : "deck_servey",
                    },
                    {
                        "name" : "reminder",
                        "value" : "reminder"
                    },
                    {
                        "name" : "user_id",
                        "value" : "user_id"
                    })
        }),
    new SlashCommandBuilder()
      .setName("deck_servey_result")
      .setDescription("チャンネル内の絵文字と、反応した人を一覧にします。"),
    new SlashCommandBuilder()
      .setName("delete_message")
      .setDescription("チャンネル内の直近100件のメッセージを削除します。管理者のみ使えます。"),
      new SlashCommandBuilder()
      .setName("get_reacting_people")
      .setDescription("指定したメッセージの絵文字と、反応した人を一覧にします。")
      .addStringOption(o => {
          return o.setName("message")
                  .setDescription("メッセージのURL")
                  .setRequired(true)
        
      })
  ,new SlashCommandBuilder()
    .setName("set_deck_name")
    .setDescription("デッキに名前をつけます。")
    .addStringOption(o => {
        return o.setName("deck_name")
                .setDescription("デッキ名")
                .setRequired(true)
    })
    .addStringOption(o => {
        return o.setName("deck_url")
                .setDescription("デッキURL")
                .setRequired(true)
    })  ,
  new SlashCommandBuilder()
    .setName("is_exist_deck_url")
    .setDescription("URLが登録済みかどうか確認します。")
    .addStringOption(o => {
        return o.setName("deck_url")
                .setDescription("デッキURL")
                .setRequired(true)
    }),
  new SlashCommandBuilder()
  .setName("reload_deck_options")
  .setDescription("デッキの選択肢を更新します。"),
  new SlashCommandBuilder()
  .setName("get_all_decks")
  .setDescription("登録されているすべての情報をリストにします。")
];

module.exports = commands;
