const Discord = require('discord.js');
const client = new Discord.Client();
const { CommandHandler } = require('djs-commands');
const CH = new CommandHandler({
    folder: __dirname + "/Commands/",
    prefix: ['!']
});


client.on('ready', () => {
    console.log('I am ready!');
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
