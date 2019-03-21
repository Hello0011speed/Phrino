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
    if(message.content.startsWith(".test")) {
        const embed = new Discord.RichEmbed()
            .setTitle("This is your title, it can hold 256 characters")
            .setAuthor("Author Name", "https://i.imgur.com/lm8s41J.png")
            .setColor(0x00AE86)
            .setDescription("This is the main body of text, it can hold 2048 characters.")
            .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
            .setImage("http://i.imgur.com/yVpymuV.png")
            .setThumbnail("http://i.imgur.com/p2qNFag.png")
            .setTimestamp()
            .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
            .addField("This is a field title, it can hold 256 characters",
                "This is a field value, it can hold 1024 characters.")
            .addField("Inline Field", "They can also be inline.", true)
            .addBlankField(true)
            .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);
 
  message.channel.send({embed});
    }
})

//const admins = ['id1', 'id2'];
//if (!admins.includes(/*author's id*/)) return;

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
