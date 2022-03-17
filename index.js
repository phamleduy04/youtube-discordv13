const { Client, Intents, MessageEmbed } = require('discord.js');
require('dotenv').config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
    console.log('Bot is ready!');
    client.user.setPresence({ activities: [{ name: 'Duy CyberSec'}], status: 'online'} );
});

client.on('messageCreate', message => {
    
    if (message.author.bot) return;
    const prefix = '$';
    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    if (command === 'ping') {
        message.reply(`🏓 Pong! \`${client.ws.ping}ms\``);
    } else if (command === 'say') {
        if (message.deletable) message.delete();
        message.channel.send(args.join(' '));
    } else if (command === 'avatar') {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        const avatarURL = member.displayAvatarURL({ format: 'png', size: 4096, dynamic: true });
        const embed = new MessageEmbed()
            .setImage(avatarURL)
            .setTitle(`Avatar của ${member.displayName}`);
        message.channel.send({ embeds: [embed] });
    }
});

client.login(process.env.TOKEN);