module.exports = async function(interaction){
  
  if (!interaction.member.permissions.has("ADMINISTRATOR")) {
    interaction.reply({ content: '"権限がありません。管理者のみが実行できます。"', ephemeral: true });
  return ;
  }
  const messages = await interaction.channel.messages.fetch({ limit: 100 });
  const filtered = messages//.filter(message => message.author.bot);
  interaction.channel.bulkDelete(filtered);
  interaction.reply({ content: 'Done', ephemeral: true })
  
}
