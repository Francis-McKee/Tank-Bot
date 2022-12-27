const { MessageEmbed } = require('discord.js')
const db = require("quick.db");

module.exports.run = (client, message, args) => {
  db.add('count.oh', 1); 
    const timesUsed = db.get('count.oh');
    const ohEmbed = new MessageEmbed()
      .setColor("#9900ff")
      .setTitle("FrankzeeTank Oh Count!")
      .setDescription(`FrankzeeTank has said oh ${timesUsed} times!`)
      .setTimestamp()
      .setFooter({text: 'You used the oh command!', iconURL: 'https://imgur.com/KK8v1AF.png'});
    message.channel.send({ embeds: [ohEmbed] });
}

exports.name = "oh"