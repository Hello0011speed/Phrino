const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    console.log('I am ready!');
    const embed = new RichEmbed()
      .setTitle('Loaded... ✅')
      .setDescription('The bot was properly loaded!')
    client.channels.get("557348230245908482").send(embed)
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
