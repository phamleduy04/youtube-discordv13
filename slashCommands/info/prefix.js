const db = require('../../database');
module.exports = {
    name: 'prefix',
    description: 'Xem/Lấy prefix',
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'prefix',
            description: 'Prefix bạn muốn đổi',
            type: 'STRING',
            required: false,
        }
    ],
    run: async (client, interaction, serverData) => {
        const prefixSet = interaction.options.getString('prefix');
        if (!prefixSet) return interaction.reply(`Prefix hiện tại của server là: ${serverData.prefix}`);
        await db.set(interaction.guildId, { prefix: prefixSet.toLowerCase() });
        interaction.reply('Bạn đã đổi prefix thành công!');
    },
};