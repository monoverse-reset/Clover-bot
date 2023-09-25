const gas = process.env.GAS_URL;
const axios = require("axios");    

module.exports = async function (interaction){
        const user_id = `${interaction.options.getUser("user").discriminator}`;
        const modify = interaction.options.getString("id")||"";
        const name = interaction.options.getString("name")||"";

        let how = interaction.options.getString("option");
      if(!how && name && modify){
        how = "modify";
      }else if(!how){
        how = "one";
      }
        const params = {
            how : how,
            discord_id : user_id,
            sv_id : modify,
            name : name
        }
        const res = await axios.get(urlOf(gas,params)); //今度postに変更する
    //  console.log(res)
      interaction.reply(`${res.data}`);
    }
  
function urlOf(url, params) {
        return `${url}?${Object.entries(params).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join('&')}`;
    }
