const {MessageEmbed,MessageAttachment} = require("discord.js");
const axios = require("axios");
const gas = process.env.GAS_URL;
module.exports = async interaction => {
    
  const name = interaction.options.getString("deck_name");

  const options = {
      
    how : "get_deck_by_name",
    name : name
    
  }
  
  const res = await axios.get(urlOf(gas,options));
  if(!res.data) {
    await interaction.reply(`NOT FOUND`);
    return
  };
  const buffer = await getDeckImage(res.data);
  const embed = new MessageEmbed().setTitle(name).setURL(res.data).setImage("attachment://deckList.jpg");
  const attachment = new MessageAttachment(buffer, "deckList.jpg");
  try{
      await interaction.reply({files : [attachment],embeds:[embed]});

  }catch{
    await interaction.channel.send({files : [attachment],embeds:[embed]});
  }
    
}

function urlOf(url, params) {
        return `${url}?${Object.entries(params).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join('&')}`;
    }

async function getDeckImage(url){
  const api = "https://shadowverse-portal.com/image/1?lang=ja";
  const res = await axios.get(api,
      {
          "responseType" : "arraybuffer",

          headers : {
              "data" : {},
              "Referer" : url
          }
      });
  return res.data;

}
