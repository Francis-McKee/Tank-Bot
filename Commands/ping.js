const { MessageEmbed } = require('discord.js')

module.exports.run = (client, message, args) => {
  const pingEmbed = new MessageEmbed()
      .setColor("#9900ff")
      .setTitle("Pong!")
      .setDescription(`${Math.floor(client.ws.ping)}ms`)
      .setTimestamp()
      .setFooter({text: 'You used the ping command!', iconURL: 'https://imgur.com/KK8v1AF.png'});
  message.channel.send({ embeds: [pingEmbed] });
}

exports.name = "ping"