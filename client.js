const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    console.log('I am ready!');
    client.channels.get("557348230245908482").send("The bot was properly loaded ✅");
});


    
client.on('message', (message) => {
    if(message.content.startsWith("!!dm ")) {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("Insufficient Permissions.");
    message.delete().catch(O_o=>{});
        let messageToSend = message.content.split(" ").slice(2).join(" ");
        let userToSend = message.mentions.users.first();
        

        userToSend.send(messageToSend);
    }
});
client.on('message', (message) => {
    if(message.content.startsWith("!!info")) {
        let userToknow = message.mentions.users.first();
        let id = message.userToknow.id
        let created = message.userToknow.createdAt
        let embed = new Discord.RichEmbed()
            .setTitle("Information")
            .addField(`User ID:`, `id`, false)
            .addField(`User created at:`, `created`, false)
        
        

        channel.send(embed);
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
