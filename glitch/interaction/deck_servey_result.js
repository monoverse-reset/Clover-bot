module.exports = async function(interaction){
    
  const messages = await interaction.channel.messages.fetch({ limit: 100 });
  
  await interaction.reply({ content: '集計中...', ephemeral: true });

  messages.forEach(async message => {
    const emojis = message.reactions.cache;
    if(!emojis.size) return true;
    let result = "";
    result += `\n【${message.content}】`;

    const reply = await interaction.channel.send(result);

    emojis.forEach(async e => {
      let  users = "";
      const allusers = await e.users.fetch();
      allusers.forEach(async u => {
        if(!u.bot){
         users += u.toString() + " ";
        }
      });
    result += `\n${e._emoji.name} : ${users}`;
    reply.edit(result);
    //result = result.replace("集計中...","");
    //await interaction.editReply(result);
    })

  });

}
