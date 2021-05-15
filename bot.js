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

    if (member.id === '679826513776083047') {
        if (oldPresence && oldPresence.status !== newPresence.status) {

            let channel = member.guild.channels.cache.get('841514123547508736');
         

            let text = ``;

            if (newPresence.status === "online") {
                text = `<@!679826513776083047> is back online, The issue is resolved.`;
            } 
             if (newPresence.status === "offline") {
                text = `<@!679826513776083047> is experiancing an outage. Keep up with this bot for more information on this outage.`;
            }
            
            channel.send(text);
        }
    }
});
client.on('presenceUpdate', (oldPresence, newPresence) => {
    let member = newPresence.member;

    if (member.id === '756151445501247865') {
        if (oldPresence && oldPresence.status !== newPresence.status) {
        
            let channel = member.guild.channels.cache.get('841514123547508736');


            let text = ``;

            if (newPresence.status === "online") {
                text = `<@!756151445501247865> is back online, The issue is resolved.`;
            } else if (newPresence.status === "offline") {
                text = `<@!756151445501247865> is experiancing an outage. Keep up with this bot for more information on this outage.`;
            }
         
            channel.send(text);
        }
    }
});
client.login('YOUR_TOKEN');
