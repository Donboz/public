 exports.run = (client, message) => {
        let db = require("quick.db")
        let Discord = require("discord.js")
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("`Yönetici` yetkisine sahip olman lazım")
        let seçim = args[0]
        if(!seçim) return message.channel.send("ayarla yada sil yaz")
   if(seçim !== "ayarla" && seçim !== "sil") return message.channel.send("ayarla yada sil yaz")
   if(seçim == "ayarla"){
  let kanal = message.mentions.channels.first() || message.guild.channels.cache.get(args[1])
  if(!kanal) return message.channel.send("Kanal etiketle yada id gir").then(m=> m.delete({timeout:3000}))
   db.set(`izinli_${message.guild.id}_${kanal.id}`,true)
   }
   if(seçim == "sil"){
  let kanal = message.mentions.channels.first() || message.guild.channels.cache.get(args[1])
  if(!kanal) return message.channel.send("Kanal etiketle yada id gir").then(m=> m.delete({timeout:3000}))
     if(!db.has(`izinli_${message.guild.id}_${kanal.id}`)){ 
       return message.channel.send("bu kanal ayarlı değilki")
                                                          }else{
   db.delete(`izinli_${message.guild.id}_${kanal.id}`,true)
                                                          }
   }
    }

 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["izinli-kanal"],
  permLevel: 0
};

exports.help = {
  name: 'izinli-kanal',
  description: 'WESTRA',
  usage: 'WESTRA'
}