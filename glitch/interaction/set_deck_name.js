const axios = require("axios");
const gas = process.env.GAS_URL;

module.exports = async (interaction,client) => {
    
  const deck_name = interaction.options.getString("deck_name");
  const deck_url = interaction.options.getString("deck_url");
  
  console.log(deck_name,deck_url);
  
  const options = {
      
    type : "deck",
    name : deck_name,
    url : deck_url
    
  }
  
  const res = await axios.post(gas,options);
  await interaction.reply(`${res.data.message}`);
  
  const commands = await require("./get_deckname_options")(res.data.names);
    await client.application.commands.set([]);
    await client.application.commands.set(commands.map(command => command.toJSON()));
  
}
