const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
  const personRickrolled = message.mentions.users.first();
  if(personRickrolled){
    message.channel.send(`${personRickrolled} just got rickrolled!`);
    message.channel.send("https://c.tenor.com/DFwPhj-PBzYAAAAd/rick-astley-rickrolling.gif%22")
    setTimeout(() => {message.delete()}, 1)
  }
  if(!personRickrolled) return message.reply("Which member would you rickroll noob?")
}

exports.name = "rickroll"
