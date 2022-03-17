module.exports = {
    name: 'say', 
    category: 'fun',
    run: (client, message, args) => {
        if (message.deletable) message.delete();
        message.channel.send(args.join(' '));
    }
}