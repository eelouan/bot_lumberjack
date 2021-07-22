const Discord = require('discord.js');
const client = new Discord.Client();


//Toutes les actions à faire quand le bot se connecte
client.on("ready", function () {
    console.log("Mon BOT est Connecté");
})

// Répondre à un message
client.on("message", function (message) {
  let run = '>>> Bonjour, \nVoici toutes les information concernant les run, vous aurez la durée, le prix de revient...\nUn run est équivalent à **350 de planches** et une planche **se vend 80$**, votre run vous reviendra donc **à 28 000$ avec un camion rempli**\nUn run dûre environ 40 à 45 minutes\nVous avez un nombre de run minimal à faire par semaine mais ces dernière vous serons communiqué si vous êtes recruté !\nWooden company Vous souhaite un très bon jeu sur redside et esppérons vous voir très vite entre les arbres ! \n\n*C\'est l\'idée qui fait le bucheron, ce n\'est pas la force*';
  // if(message.channel.name === 'spam') {
    if(message.content === '!run') {
      message.member.send(run);
    }
  // }
})

client.on("messageReactionAdd", (reaction, user) => {
  let role;
  let member;
  if(reaction.emoji.id === '866302966805823508') {
    role = reaction.message.guild.roles.cache.find(r => r.name === "citoyen");
    member = reaction.message.guild.members.cache.get(user.id);
    member.roles.add(role)
  } else if (reaction.emoji.id === '867066959971352596') {
    role = reaction.message.guild.roles.cache.find(r => r.name === "candidat");
    member = reaction.message.guild.members.cache.get(reaction.message.author.id);
    member.roles.add(role);
  }
})

client.login(process.env.TOKEN);
