const Discord = require('discord.js');
const client = new Discord.Client();


//Toutes les actions à faire quand le bot se connecte
client.on("ready", function () {
    console.log("Mon BOT est Connecté");
})

// Répondre à un message
client.on("message", function (message) {
})

client.on("messageReactionAdd", (reaction, user) => {
  let role;
  let member;
  if(reaction.message.channel.name === 'reglement' && reaction.emoji.id === '866302966805823508') {
    role = reaction.message.guild.roles.cache.find(r => r.name === "citoyen");
    member = reaction.message.guild.members.cache.get(user.id);
    member.roles.add(role)
  } else if (reaction.message.channel.name === 'candidature' && reaction.emoji.id === '867066959971352596') {
    role = reaction.message.guild.roles.cache.find(r => r.name === "candidat");
    member = reaction.message.guild.members.cache.get(reaction.message.author.id);
    member.roles.add(role);
  }
})

client.login(process.env.TOKEN);
