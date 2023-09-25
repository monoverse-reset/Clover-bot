const axios = require("axios");
const gas = process.env.GAS_URL;
module.exports = async interaction => {
    
  const value = interaction.options.getString("deck_url");

  const options = {
      
    how : "is_exist_value",
    value : value
    
  }
  
  const res = await axios.get(urlOf(gas,options));
  await interaction.reply(`${res.data || "NOT FOUND"}`);
  
}

function urlOf(url, params) {
        return `${url}?${Object.entries(params).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join('&')}`;
    }
