const Discord = require('discord.js');
const client = new Discord.Client();

const embede = new Discord.RichEmbed()
    .setAuthor("Phrino Staff Team", "https://cdn.discordapp.com/icons/528818044668215299/6d1ccd655df1c562ef4f43835597fe10.png?")
    .setTitle("Phrino · Error")
    .setDescription("This command is only availeable for Staff Members. :sob:")
    .setColor("#FF0000");


client.on('ready', () => {
    console.log('I am ready!');
    const embed = new Discord.RichEmbed()
        .setTitle("Phrino Reload...")
        .setColor("#21E514")
        .setAuthor("Phrino", "https://cdn.discordapp.com/icons/528818044668215299/6d1ccd655df1c562ef4f43835597fe10.png?")
        .setDescription("The bot was properly reloaded :white_check_mark:");
    client.channels.get("557348230245908482").send({embed});
});
const admins = ["292337076395966492", "359119668709163019", "469163726336163841", "138289516136890368", "443159617028227083", "388041619032768523", "339386337796816897", "463247705527812097"];

  
client.on('message', (message) => {
    if(message.content.startsWith(".dm ")) { 
    if (!admins.includes(message.author.id)) return message.channel.send("Error, you are not Staff Member...");
    message.delete().catch(O_o=>{});
        let messageToSend = message.content.split(" ").slice(2).join(" ");
        let userToSend = message.mentions.users.first();
        const embed = new Discord.RichEmbed()
            .setAuthor("Phrino Staff Team", "https://cdn.discordapp.com/icons/528818044668215299/6d1ccd655df1c562ef4f43835597fe10.png?")
            .setTitle("You have received a message. :oncoming_police_car: ")
            .setDescription("Message: " + messageToSend + "\n Message Author: " + message.author)
            .setColor("#E51414");
        const embeds = new Discord.RichEmbed()
            .setAuthor("Phrino Staff Team", "https://cdn.discordapp.com/icons/528818044668215299/6d1ccd655df1c562ef4f43835597fe10.png?")
            .setTitle("Phrino · Message")
            .setDescription("Message sent! \n Message Author: " + message.author)
            .setColor("#E51414");             
            userToSend.send({embed})
        client.channels.get("558064435449823242").send({embeds});
    }
});

client.on('message', (message) =>{
    if(message.content.startsWith(".stats")) {
        const embed = new Discord.RichEmbed()
            .setTitle("Phrino · Stats")
            .setAuthor("Phrino", "https://cdn.discordapp.com/icons/528818044668215299/6d1ccd655df1c562ef4f43835597fe10.png?")
            .setColor("#E51414")
            .setDescription("Members: " + client.users.size + "\n Servers: " + client.guilds.size + "\n Current Owner: ⅅᗅK❆Ͳᗅ👀#9830 \n Current Co-Owner: Bryan#3674");

  message.channel.send({embed});
    }
});

client.on('message', (message) =>{
    if(message.content.startsWith(".cmds")) {
        const embed = new Discord.RichEmbed()
            .setTitle("Phrino · Stats")
            .setAuthor("Phrino", "https://cdn.discordapp.com/icons/528818044668215299/6d1ccd655df1c562ef4f43835597fe10.png?")
            .setColor("#E51414")
            .setDescription("Phrino is a bot that helps you with the moderation of your server, we are in BETA phase, so sometimes the bot will not be online which means that we are modifying or configuring it. \n \n **COMMANDS:** \n .stats | It shows you information about our bot. \n .dm | This command is only allowed for staff, at the moment.");

  message.channel.send({embed});
    }
});

client.on('message', (message) => {
    if(message.content.startsWith(".invite")) {
        const embed = new Discord.RichEmbed()
            .setTitle("Phrino · Invite")
            .setAuthor("Phrino", "https://cdn.discordapp.com/icons/528818044668215299/6d1ccd655df1c562ef4f43835597fe10.png?")
            .setColor("#E51414")
        const embedd = new Discord.RichEmbed()
            .setTitle("Phrino · Invite2")
            .setAuthor("Phrino", "https://cdn.discordapp.com/icons/528818044668215299/6d1ccd655df1c562ef4f43835597fe10.png?")
            .setColor("#E51414")
            .setDescription("Invite link: https://discordapp.com/oauth2/authorize?client_id=529521711348056065&scope=bot&permissions=8 \n \n Discord server link: https://discord.gg/XqUa92C");
  message.channel.send({embed, embedd});

    }
});


// Phrino is a bot that helps you with the moderation of your server, we are in BETA phase, so sometimes the bot will not be online which means that we are modifying or configuring it. \n \n **COMMANDS:** \n .stats | It shows you information about our bot. \n .dm | This command is only allowed for staff, at the moment.

//const admins = ['id1', 'id2'];
//if (!admins.includes(/*author's id*/)) return;

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
