const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
    let random = Math.floor(Math.random() * 8) + 1
      if(random === 1) {
        message.channel.send("It is decidedly so")
      } else if(random === 2) {
        message.channel.send("All signs point to yes")
      } else if(random === 3) {
        message.channel.send("Outlook good")
      } else if(random === 4) {
        message.channel.send("Very doubtful")
      } else if(random === 5) {
        message.channel.send("My sources say no")
      } else if(random === 6) {
        message.channel.send("Don\'t count on it")
      } else if(random === 7) {
        message.channel.send("When rats fly")
      } else if(random === 8) {
        message.channel.send("You may rely on it")
      }
  }

exports.name = "8ball"