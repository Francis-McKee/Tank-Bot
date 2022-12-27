const { MessageEmbed } = require('discord.js')

module.exports.run = (client, message, args) => {
  const pigEmbed = new MessageEmbed()
      .setColor("#9900ff")
      .setTitle("Pog!")
      .setDescription(`${Math.floor(client.ws.ping)}ms`)
      .setTimestamp()
      .setFooter({text: 'You used the pig command!', iconURL: 'https://imgur.com/KK8v1AF.png'});
    message.channel.send({ embeds: [pigEmbed] });
}

exports.name = "pig"