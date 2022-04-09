const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'Lấy avatar của bạn hoặc người khác',
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'user',
            description: 'Người bạn muốn lấy avatar',
            type: 'USER',
            required: false,
        }
    ],
    run: async (client, interaction) => {
        const user = interaction.options.getUser('user') || interaction.user;
        const avatarURL = user.displayAvatarURL({ format: 'png', size: 4096, dynamic: true });
        const embed = new MessageEmbed()
            .setImage(avatarURL)
            .setTitle(`Avatar của ${user.tag}`);
        interaction.reply({ embeds: [embed] });
    },
};