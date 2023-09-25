  module.exports = async function (interaction){
        const archetype = interaction.options.getString("archetype");
        const emoji = ["<:Elf:1002772846323433493>","<:Royal:1002772849196539968>","<:Witch:1002772852249997323>","<:Dragon:1002772854691086458>","<:Necromancer:1002772856972775455>","<:Vampire:1002779972735336448>","<:Bishop:1002772862106607646>","<:Nemesis:1002772864505749534>"];
        const craft1 = {
            "E":0,
            "R":1,
            "W":2,
            "D":3,
            "Nc":4,
            "V":5,
            "B":6,
            "Nm":7,
            "エルフ":0,
            "ロイヤル":1,
            "ウィッチ":2,
            "ドラゴン":3,
            "ネクロマンサー":4,
            "ネクロ":4,
            "ヴァンパイア":5,
            "ヴァンプ":5,
            "ビショップ":6,
            "ネメシス":7
        }
        let num = craft1[Object.keys(craft1).find(elem => archetype.match(elem))?.[0]]
        const craftEmoji = emoji[num] || "";

        const poll = await interaction.reply({ content: craftEmoji + archetype, fetchReply: true });
            await poll.react("1️⃣")
            await poll.react("2️⃣")
            await poll.react("3️⃣")
            await poll.react("4️⃣")
            await poll.react("5️⃣")
    }
