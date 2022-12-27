const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
  let random = Math.floor(Math.random() * 8) + 1
    if(random === 1) {
      message.channel.send("I CAN GET IT ALL!")
    } else if(random === 2) {
      message.channel.send("I\'m on the ceiling")
    } else if(random === 3) {
      message.channel.send("dab on the haters")
    } else if(random === 4) {
      message.channel.send("I know a GC2")
    } else if(random === 5) {
      message.channel.send("You just made me xd myself to death")
    } else if(random === 6) {
      message.channel.send("heheheha")
    } else if(random === 7) {
      message.channel.send("How it feels to chew 5 gum...")
    } else if(random === 8) {
      message.channel.send("oh, are we in a game?")
    }
}

exports.name = "quote"