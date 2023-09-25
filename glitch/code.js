    const {Client,Intents,MessageEmbed,MessageAttachment} = require("discord.js");
    const client = new Client(
        {intents:[Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_MESSAGE_REACTIONS,Intents.FLAGS.GUILD_VOICE_STATES,Intents.FLAGS.GUILD_WEBHOOKS,Intents.FLAGS.GUILD_MEMBERS ],
        partials: ["MESSAGE", "REACTION"]
        });

    const axios = require("axios");
    const FormData = require("form-data");



client.once("ready", async () => {

  // const commands = require("./deploy-commands.js");
  // console.log(commands)
  //   await client.application.commands.set([]);
  //   await client.application.commands.set(commands.map(command => command.toJSON()));
    console.log("Ready!");
});

    client.on("ready",()=>{
        console.log(`${client.user.tag}がサーバーにログインしました！`);
    });

    client.on("interactionCreate",async interaction => {
        if(!interaction.isCommand()) return;
        require("./interaction/"+ interaction.commandName + ".js")(interaction,client);
    })



    client.on("messageCreate",async message => {
          //if(message.author.bot) return;
            if(!message.mentions.users.has(client.user.id)) return;
      
            const file = message.attachments.first();      
     
            if(message.content.match("https://shadowverse-portal.com")){
              
              const url = message.content.match(/https:\/\/shadowverse-portal.com\/deck\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+/g);
              const buffer = await getDeckImage(url[0]);
              message.delete();
              const title = message.content.replace(url,"").replace(client.user.toString(),"").replace(/\n/g,"").replace(/\s/g,"")||"サイトはこちらから";
              const embed = new MessageEmbed().setTitle(title).setURL(url[0]).setImage("attachment://deckList.jpg");
              const attachment = new MessageAttachment(buffer, "deckList.jpg");
              await message.channel.send({files : [attachment],embeds:[embed]});
 
              
            }

          
    })


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
const token = process.env.DISCORD_BOT_TOKEN;

    client.login(token)

