const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.NO_FLOOD_TOKEN || "YOUR TOKEN HERE"

var lastMessages = {}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  let { guild, author } = msg;
  if (guild.available) {
    if (lastMessages[guild.id]) {
      if (lastMessages[guild.id][author.id]) {
        var last = lastMessages[guild.id][author.id]

        if (new Date().getTime() - last < 5000) {
          // Less than 5 seconds
          msg.delete()
            .then(msg => console.log(`${new Date().toLocaleString()} - Deleted message from "${author.username}" on "${guild.name}"`))
            .catch(console.error);
        }
      }
    } else {
      lastMessages[guild.id] = {}
    }

    lastMessages[guild.id][author.id] = new Date().getTime()
  }
});

client.login(token);

const httpServ = require("./front.js");
