const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

module.exports = async message => {
  let client = message.client;
  let prefix = ayarlar.prefix
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
let frenzycodealtyapitokeni = 'FrenzyA78PCODE8FC'
if(frenzycodealtyapitokeni === ayarlar.frenzycodealtyapıtokeni) {
if(cmd.conf.frenzy_code === frenzycodealtyapitokeni) {
}
} else {
console.log('FRENZY CODE ALTYAPI TOKENİ YANLIŞ!')
process.exit(1)
}    
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }

};