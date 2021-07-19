const Discord = require('discord.js');
const client = new Discord.Client();


//Toutes les actions à faire quand le bot se connecte
client.on("ready", function () {
    console.log("Mon BOT est Connecté");
})

// Répondre à un message
client.on("message", function (message) {
  let role = message.guild.roles.cache.find(r => r.name === "candidat");
  if(message.channel.name === 'candidature'){
    message.member.roles.add(role);
  }
})

client.on("messageReactionAdd", (reaction, user) => {
  let role = reaction.message.guild.roles.cache.find(r => r.name === "citoyen");
  let member = reaction.message.guild.members.cache.get(user.id);
  if(reaction.message.channel.name === 'reglement' && reaction.emoji.id === '866302966805823508') {
    member.roles.add(role)
  }
})

console.log(client.channels.cache);

client.login(process.env.TOKEN);
