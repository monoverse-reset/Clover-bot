module.exports = async function(interaction){
  
  const messageUrl = interaction.options.getString("message");
  const MESSAGE_URL_REGEX = /https?:\/\/discord\.com\/channels\/(\d+)\/(\d+)\/(\d+)/g;
  const matches = MESSAGE_URL_REGEX.exec(messageUrl);
  if (matches) {
    
    const [_, guildId, channelId, messageId] = matches;
    const fetchedMessage = await interaction.channel.messages.fetch(messageId);
    const emojis = fetchedMessage.reactions.cache;
    if(!emojis.size) return;
    
    let replyMessage = `${messageUrl}\n\n`;
    await interaction.reply("集計中...");

    emojis.forEach(async e => {
      let users = "";
      const allUsers = await e.users.fetch();
      allUsers.forEach(u => {
        if(!u.bot)  users += u.toString() + " ";
      });
      replyMessage += `${e._emoji.name} : ${users}\n`;
      await interaction.editReply(replyMessage);
    });
    
  
}
}
