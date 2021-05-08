const Discord = require("discord.js"),
  db = require("quick.db");

module.exports.run = async (client, message, args) => {
	 if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("`Yönetici` yetkisine sahip olman lazım")
  let prefix = "."
    let kanal = await db.fetch(`rolk_${message.guild.id}`)
    if (!kanal) {
      const embed = new Discord.MessageEmbed()
        .setColor(0x36393F)
        .setFooter(client.user.username, client.user.avatarURL())
        .setDescription(`Rol koruma sistemi zaten ayarlanmamış!`);
      message.channel.send(embed);
      return;
    }
    db.delete(`rolk_${message.guild.id}`);
    const embed = new Discord.MessageEmbed()
      .setColor(0x36393F)
      .setFooter(client.user.username, client.user.avatarURL())
      .setDescription(`Rol koruma sistemi sıfırlandı!`);
    message.channel.send(embed);
    return;
  }

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["role-protection-reset"],
  permLevel: 3
};

exports.help = {
  name: "rol-koruma-sıfırla",
  description: "rol-koruma-sıfırla",
  usage: "rol-koruma-sıfırla"
};