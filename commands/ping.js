const Discord = require('discord.js')
const sraconfig = require('../sramtan.json')
// hadi bu sizde kalsın <3

module.exports = {
    
    name: "ping", 
    aliases: ["png"],
    çalıştır: async (client, message, args, prefix ) => {
    
    const embed = new Discord.MessageEmbed()
    .setColor("YELLOW")
    .setFooter(sraconfig.Bot.Bot_Footer)
    .setTitle(` ${sraconfig.emoji.loading} Botun Gecikmesi: ** ${Math.round(message.client.ws.ping)} MS **`)
 
    message.channel.send({embeds: [embed]})

    }


}  
