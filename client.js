const Discord = require('discord.js');
const client = new Discord.Client();

<<<<<<< HEAD
<<<<<<< HEAD
// Here we load the config file that contains our token and our prefix values.
client.config = require("./config.js");
// client.config.token contains the bot's token
// client.config.prefix contains the message prefix

// Require our logger
client.logger = require("./modules/Logger");

// Let's start by getting some useful functions that we'll use throughout
// the bot, like logs and elevation features.
require("./modules/functions.js")(client);

// Aliases and commands are put in collections where they can be read from,
// catalogued, listed, etc.
client.commands = new Enmap();
client.aliases = new Enmap();

// Now we integrate the use of Evie's awesome Enhanced Map module, which
// essentially saves a collection to disk. This is great for per-server configs,
// and makes things extremely easy for this purpose.
client.settings = new Enmap({name: "settings"});

// We're doing real fancy node 8 async/await stuff here, and to do that
// we need to wrap stuff in an anonymous function. It's annoying but it works.

const init = async () => {

  // Here we load **commands** into memory, as a collection, so they're accessible
  // here and everywhere else.
  const cmdFiles = await readdir("./commands/");
  client.logger.log(`Loading a total of ${cmdFiles.length} commands.`);
  cmdFiles.forEach(f => {
    if (!f.endsWith(".js")) return;
    const response = client.loadCommand(f);
    if (response) console.log(response);
  });

  // Then we load events, which will include our message and ready event.
  const evtFiles = await readdir("./events/");
  client.logger.log(`Loading a total of ${evtFiles.length} events.`);
  evtFiles.forEach(file => {
    const eventName = file.split(".")[0];
    client.logger.log(`Loading Event: ${eventName}`);
    const event = require(`./events/${file}`);
    // Bind the client to any event, before the existing arguments
    // provided by the discord.js event. 
    // This line is awesome by the way. Just sayin'.
    client.on(eventName, event.bind(null, client));
  });

  // Generate a cache of client permissions for pretty perm names in commands.
  client.levelCache = {};
  for (let i = 0; i < client.config.permLevels.length; i++) {
    const thisLevel = client.config.permLevels[i];
    client.levelCache[thisLevel.name] = thisLevel.level;
  }

  // Here we login the client.
  client.login(process.env.BOT_TOKEN);

// End top-level async/await function.
};

init();

=======
=======
>>>>>>> parent of ed0e03a... mn
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
            .setDescription("Invite link: https://discordapp.com/oauth2/authorize?client_id=529521711348056065&scope=bot&permissions=8 \n \n Discord server link: https://discord.gg/XqUa92C");
  message.channel.send({embed});

    }
});


<<<<<<< HEAD
=======

>>>>>>> parent of ed0e03a... mn
// Phrino is a bot that helps you with the moderation of your server, we are in BETA phase, so sometimes the bot will not be online which means that we are modifying or configuring it. \n \n **COMMANDS:** \n .stats | It shows you information about our bot. \n .dm | This command is only allowed for staff, at the moment.

//const admins = ['id1', 'id2'];
//if (!admins.includes(/*author's id*/)) return;

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
<<<<<<< HEAD
>>>>>>> parent of ee85d78... Update client.js
=======


//.setDescription(message.author + " was verified as Phrino Staff members! :white_check_mark:");
>>>>>>> parent of ed0e03a... mn
