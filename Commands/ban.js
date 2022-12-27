const Discord = require("discord.js")
exports.run = (client, message, args) => {
try {
let member = message.mentions.members.first();
if(!member) return message.reply("Please mention a valid member of this server");
if(!member.kickable) return message.reply("I cannot ban this member!");
if (member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
    message.reply("You don't have the perms to do that");
}
if(member.id == message.author.id) return message.reply("You cannot ban yourself");
let reason = "By" + message.author.username + "for" + args
member.ban({reason: reason});
} catch(err) {
console.log(err)
}
}

exports.name = "ban"