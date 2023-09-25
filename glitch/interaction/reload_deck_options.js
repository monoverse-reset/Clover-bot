const axios = require("axios");
const gas = process.env.GAS_URL;

module.exports = async (interaction,client) => {
    const res = await axios.get(gas + "?how=get_deck_key");
    const choices = res.data.map(v => {return {name : v,value :v}});
    const commands = await require("./get_deckname_options")();
    await client.application.commands.set([]);
    await client.application.commands.set(commands.map(command => command.toJSON()));
  interaction.reply({ content: 'Done', ephemeral: true });
}
