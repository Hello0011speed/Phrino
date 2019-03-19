const Discord = require('discord.js');
const client = new Discord.Client();

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}


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


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
