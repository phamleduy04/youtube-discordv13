module.exports = {
    name: 'say',
    description: 'Nhờ bot nói giúp gì đó',
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'query',
            description: 'Nội dung muốn bot nói',
            type: 'STRING',
            required: true,
        }
    ],
    run: async (client, interaction) => {
        const query = interaction.options.getString('query');
        interaction.reply({ content: 'Thao tác thành công!', ephemeral: true });
        interaction.channel.send(query);
    },
};