const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch');

module.exports.run = (client, message, args) => {
  function getMeme() {
    return fetch('https://meme-api.herokuapp.com/gimme') 
    .then(res => {
    return res.json()
    })
  }

  getMeme().then(meme => {
    const MemeEmbed = new MessageEmbed()
      .setColor("#9900ff")
      .setTitle(`${meme.title}`)
      .setURL(`${meme.url}`)
      .setImage(`${meme.preview[1]}`)
      .setFooter({text: 'You used the meme command!', iconURL: 'https://imgur.com/KK8v1AF.png'});
    message.channel.send({ embeds: [MemeEmbed] });
  })
}

exports.name = "meme"