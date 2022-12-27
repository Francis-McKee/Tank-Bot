const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
  let random = Math.floor(Math.random() * 10)
    if(random === 0) {
      message.channel.send(`Wow, you literally could not be any worse: ${random}`)
    } else if(random === 1) {
      message.channel.send(`You disgust me: ${random}`)
    } else if(random === 2) {
      message.channel.send(`Severely disappointed: ${random}`)
    } else if(random === 3) {
      message.channel.send(`Not interested: ${random}`)
    } else if(random === 4) {
      message.channel.send(`Almost tolerable: ${random}`)
    } else if(random === 5) {
      message.channel.send(`Meh: ${random}`)
    } else if(random === 6) {
      message.channel.send(`I like you, but not that much: ${random}`)
    } else if(random === 7) {
      message.channel.send(`I\'ll call you: ${random}`)
    } else if(random === 8) {
      message.channel.send(`You are one cool cat: ${random}`)
    } else if(random === 9) {
      message.channel.send(`You make me blush: ${random}`)
    } else if(random === 10) {
      message.channel.send(`Wow, you\'re perfect: ${random}`)
    }
}

exports.name = "rate"