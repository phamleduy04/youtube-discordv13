module.exports = {
    name: 'kick',
    category: 'mod',
    run: async (client, message, args) => {
        if (!message.member.permissions.has('KICK_MEMBERS')) return message.reply('Bạn không có quyền kick người khác!');
        const toKick = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!toKick) return message.reply('Vui lòng nhập 1 người để kick');
        if (toKick.id == message.author.id) return message.reply('Bạn không thể kick chính mình!');
        const reason = args.slice(1).join(' ');
        try  {
            toKick.kick(reason);
            message.reply(`Đã kick thành công ${toKick.user.tag}`);
        }
        catch(err) {
            message.reply(`Có lỗi khi kick!`);
            console.error(err);
        }
    },
};