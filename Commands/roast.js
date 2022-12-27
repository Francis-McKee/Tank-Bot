const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
  let random = Math.floor(Math.random() * 6) + 1
    if(random === 1) {
      message.channel.send("rat")
    } else if(random === 2) {
      message.channel.send("Don\'t be ashamed of what you've become. That's your parent\'s job.")
    } else if(random === 3) {
      message.channel.send("I've never met such uncultured swine.")
    } else if(random === 4) {
      message.channel.send("Everything you buy is meant to be shared, but none of it ever is.")
    } else if(random === 5) {
      message.channel.send("I\'ve seen people like you before, but I had to pay admission.")
    } else if(random === 6) {
      message.channel.send("You remind me of Nick-Eh-30. Average in every way. Meh")
    }
}

exports.name = "roast"