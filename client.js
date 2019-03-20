const Discord = require('discord.js');
const client = new Discord.Client();
//const fs = require('fs');


//client.commands = new Discord.Collections();
//
//fs.readdir('./commands/', (err, files) => {
//    if(err) console.error(err);
//    
//    const jsfiles = files.filter(f => f.split('.').pop() === ('js');
//       if (jsfiles.lenght <= 0) { return console.log('No command found...')}
//    else { console.log(jsfiles.lenght + (' command found!') }
//                       
//    jsfiles.forEach((f, i) => {
//        const cmds = require('./commands/${f}');
//        console.log('Command ${f} loading...');
//        bot.commands.set(cmds.config.command, cmds)
//    })
//})


const config = require("./config.json");
const adminID = ["", "", "", ""];


client.on('ready', () => {
    console.log('I am ready!');
    client.channels.get("557348230245908482").send('The bot was properly loaded :white_check_mark:');
});
const admins = ['292337076395966492', '359119668709163019', '443159617028227083', '358699020589465600', '469163726336163841', '138289516136890368'];
const embed = new Discord.RichEmbed()
    .setDescription("This command is only allowed for Phrino admins!")
    .setColor('#d81111');
    
client.on('message', (message) => {
    if(message.content.startsWith(".dm ")) {   
    if (!admins.includes(message.author.id)) return message.channel.send("This command is only availeable for Premium Members and Staff. :wave:");
    message.delete().catch(O_o=>{});
        let messageToSend = message.content.split(" ").slice(2).join(" ");
        let userToSend = message.mentions.users.first();
        let embed = new Discord.RichEmbed()
            .setTitle("DM Command :sparkles:")
            .addField(`Message sent to:`, `${userToSend}`, false)
            .addField(`Messaged by:`, `${message.author}`, false);
        
        client.channels.get("558064435449823242").send(embed);
        userToSend.send(messageToSend);
    }
});

//const admins = ['id1', 'id2'];
//if (!admins.includes(/*author's id*/)) return;

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
