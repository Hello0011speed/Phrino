const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    console.log('I am ready!');
    client.channels.get("557348230245908482").send("The bot was properly loaded ✅");
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
