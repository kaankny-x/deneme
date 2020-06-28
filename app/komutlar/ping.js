const Discord = require('discord.js')
exports.run = async (client, message, args) => {
message.reply(client.ping)
};    
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0,
}
exports.help = {
    name: 'ping'
}