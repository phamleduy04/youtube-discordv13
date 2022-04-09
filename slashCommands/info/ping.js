module.exports = {
    name: 'ping',
    description: 'Xem độ trễ của bot',
    type: 'CHAT_INPUT',
    run: async (client, interaction) => {
        interaction.reply(`🏓 Pong! \`${client.ws.ping}ms\``);
    },
};