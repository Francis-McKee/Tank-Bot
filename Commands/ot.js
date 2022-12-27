const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
  message.channel.send("You are off-topic. Please go to #general to continue your conversation. Much appreciated :)")
}

exports.name = "ot"