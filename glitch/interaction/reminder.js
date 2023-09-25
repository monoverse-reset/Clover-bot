const axios = require("axios");  
const gas = process.env.GAS_URL;

module.exports = async function (interaction){
      
      const now =  new Date(Date.now() + ((new Date().getTimezoneOffset() + (9 * 60)) * 60 * 1000));
      console.log(now)
      const yyyy = interaction.options.getNumber("yyyy") || now.getFullYear();
      const month = interaction.options.getNumber("month") || now.getMonth() + 1;
      const dd = interaction.options.getNumber("dd") || now.getDate();
      const hh = interaction.options.getNumber("hh");
      const minute = interaction.options.getNumber("mm");
      const channel = interaction.options.getChannel("channel");
      const webhooks = await channel.fetchWebhooks();
      const webhook = webhooks?.find((v) => v.token) ?? await channel.createWebhook("Clover-bot",{"avatar":"https://drive.google.com/uc?id=1VfBlNVPftsR1ZK9lFGOvSE3Edb1Txk-T"});
      
      const message = interaction.options.getString("message");
      const options = {
        yyyy,
        month,
        dd,
        hh,
        minute,
        url : webhook.url,
        message,
        type : "remind"
      }
      const res = await axios.post(gas,options);
      interaction.reply(res.data)

    }
