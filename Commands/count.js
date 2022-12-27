const { MessageEmbed } = require('discord.js')
const db = require("quick.db");

module.exports.run = (client, message, args) => {
  db.add('count.count', 1); 
    const timesUsed = db.get('count.count');
    const countEmbed = new MessageEmbed()
      .setColor("#9900ff")
      .setTitle("Count!")
      .setDescription(`The count command has been used ${timesUsed} times!`)
      .setTimestamp()
      .setFooter({text: 'You used the count command!', iconURL: 'https://imgur.com/KK8v1AF.png'});
    message.channel.send({ embeds: [countEmbed] });
}

exports.name = "count"
