const axios = require("axios");    

module.exports =     async function (interaction){
      const deck_code = interaction.options.getString("deck_code").replaceAll(" ","");
      const res = await axios.get(`https://shadowverse-portal.com/api/v1/deck/import?format=json&deck_code=${deck_code}`);
      const json = res.data;
            try{
                if(json.data.errors[0].type === "INVALID_DECK_CODE"){
                    interaction.reply(json.data.errors[0].message)
                }
            }catch{
              
                const hash = json.data.hash;
                const deck_url = `https://shadowverse-portal.com/deck/${hash}?lang=ja`;
                interaction.reply(deck_url);
            }
        }
