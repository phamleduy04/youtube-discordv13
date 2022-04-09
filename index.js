const { Client, Intents, Collection } = require('discord.js');
require('dotenv').config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.commands = new Collection();
client.aliases = new Collection();
client.categories = new Collection();
client.interactions = new Collection();

['command', 'event', 'slashCommand'].forEach(handler => require(`./handlers/${handler}`)(client));

client.login(process.env.TOKEN);