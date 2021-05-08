const Discord = require("discord.js"),
  db = require("quick.db");

module.exports.run = async (client, message, args) => {
	if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("`Yönetici` yetkisine sahip olman lazım")
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let prefix = "."
  
    let kanal = message.mentions.channels.first();
    if (!kanal) {
      const embed = new Discord.MessageEmbed()
        .setColor(0x36393F)
        .setFooter(client.user.username, client.user.avatarURL())
        .setDescription(`Lütfen bir log kanalı etiketleyiniz!`);
      message.channel.send(embed);
      return;
    }
    db.set(`kanalk_${message.guild.id}`, kanal.id);
    const embed = new Discord.MessageEmbed()
      .setColor(0x36393F)
      .setFooter(client.user.username, client.user.avatarURL())
      .setDescription(`Kanal koruma log kanalı; ${kanal} olarak ayarlandı!`);
    message.channel.send(embed);
    return;
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["channel-protection"],
  permLevel: 3
};

exports.help = {
  name: "kanal-koruma",
  description: "kanal-koruma",
  usage: "kanal-koruma"
};