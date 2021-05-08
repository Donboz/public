const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  const nn = new Discord.MessageEmbed().setThumbnail();
if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("`Yönetici` yetkisine sahip olman lazım")
  const sistem = await data.fetch(`spam.${message.guild.id}`);
if(sistem) return message.channel.send(nn.setDescription(`Spam koruma zaten aktif.`)).then(a => a.delete({timeout: 10000}));

data.set(`spam.${message.guild.id}`,true);
return message.channel.send(nn.setTitle(`İşlem başarılı!`).setColor(0x36393F).setDescription(`Spam koruma başarıyla açıldı.`)).then(a => a.delete({timeout: 10000}));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['spam-engel', 'spamengel', 'spam-koruma', 'spamkoruma'],
  permLevel: 0
}

exports.help = {
  name: 'spam'
};