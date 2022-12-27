const { MessageEmbed } = require('discord.js')

module.exports.run = (client, message, args) => {
  const helpEmbed = new MessageEmbed()
	    .setColor("#9900ff")
      .setTitle("Tank Bot Help")
	    .setDescription("A list of all Tank Bot commands!")
      .addFields({ name: 'Info:', value: 'about - learn about Tank Bot \nhelp - list of all commands \nping - a way to test Tank Bot\'s connection to Discord \npig - better way to test Tank Bot\'s connection to Discord'})
	    .addFields({ name: 'Moderation:', value: 'ban - ban a member from this server \nkick - kick a member from this server \not - a way to tell someone they are off topic'})
      .addFields({ name: 'Fun:', value: '8ball - answers all questions with an 8ball response \nmeme - random Reddit meme \nrate - get a rating from Tank Bot out of 10 \nroast - get roasted by Tank Bot'})
      .addFields({ name: 'Miscellaneous:', value: 'oh - a count of the times FrankzeeTank says oh \nquote - get a random FrankzeeTank quote \ntweet - tell Biden what to tweet \nzeeoban - get info on the game Zeeoban'})
	    .setTimestamp()
      .setFooter({text: 'You used the help command!', iconURL: 'https://imgur.com/KK8v1AF.png'});
    message.channel.send({ embeds: [helpEmbed] });
}

exports.name = "help"