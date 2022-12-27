const Discord = require("discord.js");
module.exports = {
   name: "servers-list",
   run(client, message, args) {


     if(message.author.id !== "396061728644792322")
       return message.reply(`Only Bot Owner Can Use This`)

  client.guilds.cache.forEach((guild) => {
         let icon = guild.iconURL()

            const serverlist = new Discord.MessageEmbed()
      .setTitle(`Servers that ${client.user.tag} is In`)
      .setThumbnail(icon)
      .addField('Server Name', `${guild.name}`)
      .addField('Members', `${guild.memberCount}`)
            message.channel.send({embeds: [serverlist]})
    })
  }
} 