const Discord = require('discord.js');
const client = new Discord.Client();

const config = require("./config.json");
const adminID = ["", "359119668709163019", "", "443159617028227083"];
const embedc = new Discord.RichEmbed()
    .setDescription("The bot was properly loaded ✅")
    .setColor('#10bc13');


client.on('ready', () => {
    console.log('I am ready!');
    client.channels.get("557348230245908482").send(embedc);
});
const admins = ['292337076395966492', '359119668709163019', '358699020589465600'];
const embed = new Discord.RichEmbed()
    .setDescription("This command is only allowed for Phrino admins!")
    .setColor('#d81111');
    
client.on('message', (message) => {
    if(message.content.startsWith("!!dm ")) {           
    if (!admins.includes(message.author.id)) return message.channel.send(embed);
    message.delete().catch(O_o=>{});
        let messageToSend = message.content.split(" ").slice(2).join(" ");
        let userToSend = message.mentions.users.first();
        

        userToSend.send(messageToSend);
    }
});


//const admins = ['id1', 'id2'];
//if (!admins.includes(/*author's id*/)) return;

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
