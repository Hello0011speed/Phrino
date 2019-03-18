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

client.on('message', message => {
    if (message.channel.type === 'dm') return;
    if (message.author.type === 'bot') return;
    if (message.author.id !== '292337076395966492') return;
    let args = message.content.split(' ');
    let command = args[0];
    let cmd = CH.getCommand(command);
    if(!cmd) return;
    
    try{
        cmd.run(client, message, args);
    }catch(e){
        console.log(e)
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
