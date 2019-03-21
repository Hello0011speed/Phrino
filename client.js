const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    console.log('I am ready!');
    client.channels.get("557348230245908482").send('The bot was properly loaded :white_check_mark:');
});
const admins = ['292337076395966492', '359119668709163019', '443159617028227083', '358699020589465600', '469163726336163841', '138289516136890368'];
    
client.on('message', (message) => {
    if(message.content.startsWith(".dm ")) {   
    if (!admins.includes(message.author.id)) return message.channel.send("This command is only availeable for Premium Members and Staff. :wave:");
    message.delete().catch(O_o=>{});
        let messageToSend = message.content.split(" ").slice(2).join(" ");
        let userToSend = message.mentions.users.first();
        
        userToSend.send(messageToSend);
    }
});

client.on('message', (message) =>{
    if(message.content.startsWith(".stats")) {
        const mcount = client.users.size
        const scount = client.guilds.size
        const embed = new Discord.RichEmbed()
            .setTitle("Phrino | Stats")
            .setAuthor("Phrino", "https://cdn.discordapp.com/icons/528818044668215299/6d1ccd655df1c562ef4f43835597fe10.png?")
            .setColor("#E51414")
            .setDescription("Phrino Stats...")
            .addField("Members:", "${mcount} members in total.", true)
            .addField("Servers:" + client.user.size, true);

  message.channel.send({embed});
    }
})

//const admins = ['id1', 'id2'];
//if (!admins.includes(/*author's id*/)) return;

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
