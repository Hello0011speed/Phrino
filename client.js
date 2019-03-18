const Discord = require('discord.js');
const client = new Discord.Client();
const { CommandHandler } = require('djs-commands');


client.on('ready', () => {
    console.log('I am ready!');
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
