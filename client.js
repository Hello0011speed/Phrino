const Discord = require('discord.js');
const client = new Discord.Client();

const config = require("./config.json");
const adminID = ["358699020589465600", "359119668709163019", "292337076395966492"];

client.on('ready', () => {
    console.log('I am ready!');
    client.channels.get("557348230245908482").send("The bot was properly loaded ✅");
});

    
client.on('message', (message) => {
    if(message.content.startsWith("!!dm ")) {           
    if(message.author.id !== adminID) return message.channel.sendMessage("This command is only allowed for Admins of Phrino!");
    message.delete().catch(O_o=>{});
        let messageToSend = message.content.split(" ").slice(2).join(" ");
        let userToSend = message.mentions.users.first();
        

        userToSend.send(messageToSend);
    }
});

client.on('message', (message) => {
    if(message.content.startsWith("!!restart")) {           
    if(message.author.id !== config.ownerID) return message.channel.sendMessage("This command is only allowed for the Owner of Phrino!");
        client.destroy();
        client.login(process.env.BOT_TOKEN);
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
