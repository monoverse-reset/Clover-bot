module.exports =  async function (interaction){
      
    const commandName = interaction.options.getString("commandname") || "help";
    const embed = require(`../help/${commandName}.json`);
    interaction.reply(embed);
    
  }
