const { Client, Intents } = require('discord.js');
require('dotenv').config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
    console.log('Bot is ready!');
    client.user.setPresence({ activities: [{ name: 'Duy CyberSec'}], status: 'online'} );
});

client.on('messageCreate', message => {
    if (message.content.toLowerCase() == 'ping') {
        message.reply('pong');
    }
    console.log(message.content);
});

client.login(process.env.TOKEN);