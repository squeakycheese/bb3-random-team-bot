const Discord = require('discord.js');
const teams = require('./teams.json');
const Client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.GuildMembers,
        Discord.GatewayIntentBits.DirectMessages,
        Discord.GatewayIntentBits.MessageContent,
        Discord.GatewayIntentBits.Guilds
    ], partials: [
        Discord.Partials.Message,
        Discord.Partials.Channel,
        Discord.Partials.GuildMember,
        Discord.Partials.User,
        Discord.Partials.GuildScheduledEvent
    ]
});

Client.on('ready', () => {
    console.log(`Login Successful! Client is: ${Client.user.tag}`);
  });

Client.on('messageCreate', message => {
    const userInputText = message.content.toLowerCase().replace(/\s+/g, '');

    if(message.author.bot) { return };

    if (message.author.id == 189799852241190912 && InputText == '/ping') {
        message.reply(`pong!`);
    }

    if (userInputText == '/pickteam') {
        console.log(`${message.author.tag} (${message.author.id}) has requested Nuffle pick their team.`)
        let randomNumber = Math.floor(Math.random() * teams.length);
        message.reply(`${message.author.tag}, Nuffle has decided your fate.\nYou shall play as: ${teams[randomNumber].name}`);
    }
});

Client.login(process.env.TOKEN);