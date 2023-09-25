const axios = require("axios");
const gas = process.env.GAS_URL;

module.exports = async (interaction,client) => {
  
  const name = interaction.options.getString("deck_name");
  const options = {
      
    type : "delete_deck",
    name : name
    
  };
  
  const res = await axios.post(gas,options);
  await interaction.reply(`${res.data.message}`);
  const commands = await require("./get_deckname_options")(res.data.names);
  await client.application.commands.set([]);
  await client.application.commands.set(commands.map(command => command.toJSON()));
  
}
