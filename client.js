const Discord = require('discord.js');
const client = new Discord.Client();




client.on('ready', () => {
    console.log('I am ready!');
    const embed = new Discord.RichEmbed()
        .setTitle("Phrino Reload...")
        .setColor("#21E514")
        .setAuthor("Phrino", "https://cdn.discordapp.com/icons/528818044668215299/6d1ccd655df1c562ef4f43835597fe10.png?")
        .setDescription("The bot was properly reloaded :white_check_mark:");
    client.channels.get("557348230245908482").send({embed});
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
        const embed = new Discord.RichEmbed()
            .setTitle("Phrino | Stats")
            .setAuthor("Phrino", "https://cdn.discordapp.com/icons/528818044668215299/6d1ccd655df1c562ef4f43835597fe10.png?")
            .setColor("#E51414")
            .setDescription("Members: " + client.users.size + "\n Servers: " + client.guilds.size + "\n Current Owner: ⅅᗅK❆Ͳᗅ👀#9830 \n Current Co-Owner: Bryan#3674");

  message.channel.send({embed});
    }
});
const admins = ['292337076395966492', '359119668709163019', '443159617028227083', '358699020589465600', '469163726336163841', '138289516136890368'];

client.on('message', (message) => {
    if(message.content.startsWith('.verify')) {
        if (!admins.includes(message.author.id)) return message.channel.send("You are not Phrino Staff member...");
        const error = new Discord.RichEmbed()
            .setTitle("Phrino · Verify")
            .setDescription("Verified as Phrino Staff member... :white_check_mark: \n If him/her needs admin to config something or do a check, please give him/her sufficient permission to complete that task. \n If someone abuses admin please join the official server: https://discord.gg/98VwXKU")
            .setAuthor("Phrino", "https://cdn.discordapp.com/icons/528818044668215299/6d1ccd655df1c562ef4f43835597fe10.png?")
            .setTimestamp()
            .setColor("#E51414");
  message.channel.send({error});
    }
});
//const admins = ['id1', 'id2'];
//if (!admins.includes(/*author's id*/)) return;

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
