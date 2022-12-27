const { MessageEmbed } = require('discord.js')

module.exports.run = (client, message, args) => {
  const aboutEmbed = new MessageEmbed()
	    .setColor("#9900ff")
      .setTitle("About Tank Bot")
	    .setDescription('Tank Bot is a Discord bot made in Discord.js, Node.js, and numerous other API\'s and modules. It was created by FrankzeeTank#1574 in April 2022!')
	    .setTimestamp()
      .setFooter({text: 'You used the about command!', iconURL: 'https://imgur.com/KK8v1AF.png'});
    message.channel.send({ embeds: [aboutEmbed] });
}

exports.name = "about"