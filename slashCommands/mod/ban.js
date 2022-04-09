module.exports = {
    name: 'ban',
    description: 'Ban người nào đó ra khỏi server',
    options: [
        {
            name: 'user',
            description: 'Người bạn muốn ban',
            type: 'USER',
            required: true,
        },
        {
            name: 'reason',
            description: 'Lý do ban',
            type: 'STRING',
            require: false,
        },
        {
            name: 'days',
            description: 'Ngày xoá tin nhắn',
            type: 'INTEGER',
            minValue: 0,
            maxValue: 7,
        }
    ],
    run: async (client, interaction) => {
        if (!interaction.member.permissions.has('BAN_MEMBERS')) return interaction.reply('Bạn không có quyền ban!');
        const user = interaction.options.getUser('user');
        if (user.id === interaction.user.id) return interaction.reply('Bạn không thể ban chính mình');
        const reason = interaction.options.getString('reason');
        const days = interaction.options.getInteger('days');
        try {
            interaction.guild.members.ban(user.id, { reason, days });
            interaction.reply('Thao tác thành công!');
        } catch (err) {
            interaction.reply('Có lỗi khi ban!');
            console.error(err);
        }
    },
};