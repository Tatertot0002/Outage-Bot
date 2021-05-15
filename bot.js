const Discord = require('discord.js');
const client = new Discord.Client();
const prettyMilliseconds = require("pretty-ms");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({ activity: { name: `for outages👀`, type: "WATCHING" }, status: 'dnd' });
});

client.on('message', message => {
  if (message.content === '+uptime') {  
    message.channel.send(`Uptime: ${prettyMilliseconds(client.uptime)}`)
  }
});

client.on('presenceUpdate', (oldPresence, newPresence) => {
    let member = newPresence.member;

    if (member.id === 'OUTAGE_BOT') {
        if (oldPresence && oldPresence.status !== newPresence.status) {

            let channel = member.guild.channels.cache.get('OUTAGE_CHANNEL');
         

            let text = ``;

            if (newPresence.status === "online") {
                text = `<@!OUTAGE_BOT_ID> is back online, The issue is resolved.`;
            } 
             if (newPresence.status === "offline") {
                text = `<@!OUTAGE_BOT_ID> is experiancing an outage. Keep up with this bot for more information on this outage.`;
            }
            
            channel.send(text);
        }
    }
});

client.login('YOUR_TOKEN');
