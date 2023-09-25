const axios = require("axios");
const gas = process.env.GAS_URL;
module.exports = async interaction => {
    
  const name = interaction.options.getString("deck_name");

  const options = {
      
    how : "get_all_decks",
    name : name
    
  }
  
  const res = await axios.get(urlOf(gas,options));
  if(!res.data) {
    await interaction.reply(`NOT FOUND`);
    return
  };
  interaction.reply(res.data);
}
function urlOf(url, params) {
        return `${url}?${Object.entries(params).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join('&')}`;
}
