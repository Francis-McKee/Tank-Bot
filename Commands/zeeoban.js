const { MessageEmbed } = require('discord.js')

module.exports.run = (client, message, args) => {
  const zeeobanEmbed = new MessageEmbed()
      .setColor("#9900ff")
      .setTitle("Play Zeeoban for only $1!")
      .setDescription("Game: https://tank-games.itch.io/zeeoban \nRecord Sheet: https://bit.ly/3v7sdKJ")
      .setTimestamp()
      .setFooter({text: 'You used the Zeeoban command!', iconURL: 'https://imgur.com/KK8v1AF.png'});
  message.channel.send({ embeds: [zeeobanEmbed] });
}

exports.name = "zeeoban"