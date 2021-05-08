exports.run = (client, message) => {
        let db = require("quick.db")
        let Discord = require("discord.js")
    let reklam = db.fetch(`reklam.${message.guild.id}.durum`)
  const member3 = new Discord.MessageEmbed()
     .setColor(0x36393F)
.setDescription(`**HATA**  - Bu sunucuda yetkili değilsin.`)
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(member3)
    const member = new Discord.MessageEmbed()
     .setColor(0x36393F)
.setDescription(`**HATA**- Bir kanal etiketle.`)
      if(reklam) {
        let kanal = message.mentions.channels.first()
        if(!kanal) return message.channel.send(member)
      db.set(`reklam.${message.guild.id}.kanal`,kanal.id)
      message.channel.send(` **Başarılı ile reklam log kanalı ayarlandı.** `).then(l => {
      l.delete({timeout: 5000})
    })
    }else{
     message.channel.send(`**Reklam engel açık değil.**`).then(l => {
      l.delete({timeout: 5000})
    })
    }
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["reklam-log"],
  permLevel: 0
};

exports.help = {
  name: 'reklamlog',
  description: 'WESTRA',
  usage: 'WESTRA'
}