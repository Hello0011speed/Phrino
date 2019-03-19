const Discord = require('discord.js');
const client = new Discord.Client();

const config = require("./config.json");

client.on('ready', () => {
    console.log('I am ready!');
    client.channels.get("557348230245908482").send("The bot was properly loaded ✅");
});

    
client.on('message', (message) => {
    if(message.content.startsWith("!!dm ")) {
        let error = new Discord.RichEmbed()
            .setDescription('This command is only allowed to Bot Owner.. :C')
            .setColor('#3fd378')
            .setTimestamp();
            
    if(message.author.id !== config.ownerID) return message.channel.sendMessage(error);
    message.delete().catch(O_o=>{});
        let messageToSend = message.content.split(" ").slice(2).join(" ");
        let userToSend = message.mentions.users.first();
        

        userToSend.send(messageToSend);
    }
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
