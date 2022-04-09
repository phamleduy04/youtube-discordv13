module.exports = {
    name: 'ban',
    category: 'mod',
    run: async (client, message, args) => {
        if (!message.member.permissions.has('BAN_MEMBERS')) return message.reply('Bạn không có quyền ban người khác!');
        const toBan = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!toBan) return message.reply('Vui lòng nhập 1 người để ban');
        if (toBan.id == message.author.id) return message.reply('Bạn không thể ban chính mình!');
        const reason = args.slice(1).join(' ');
        try  {
            toBan.ban({ reason });
            message.reply(`Đã ban thành công ${toBan.user.tag}`);
        }
        catch(err) {
            message.reply(`Có lỗi khi ban!`);
            console.error(err);
        }
    },
};