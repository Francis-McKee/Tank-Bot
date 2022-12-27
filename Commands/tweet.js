const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "tweet",
  description: "Make Biden tweet anything!",
  usage: "tweet <text>",
  category: "fun",
  timeout: "5000",
  run: async(client, message, args) => {
    if (!args[0]) return message.reply("Please provide text!");

  let embed = new MessageEmbed()
  .setTitle("Alert! Biden tweeted something!")
  .setImage(`https://api.popcat.xyz/biden?text=${args.join("+")}`) //<= the plus inside args join is so that it detects spaces
  .setColor("#9900ff");

  message.channel.send({
    embeds: [embed]
  });
  }
}