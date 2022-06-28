module.exports = {
    
    name: 'burç',
  çalıştır: async (client, message, args,prefix ) => {
    
    const { MessageActionRow, MessageButton } = require('discord.js');
    const babansramtan = require('../config/sramtan.json')

    let sramtansss1 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('I')
        .setCustomId('boga')

    let sramtansss2 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('II')
        .setCustomId('ikizler')

    let sramtansss3 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('III')
        .setCustomId('yengec')

    let sramtansss4 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('IV')
        .setCustomId('aslan')

    let sramtansss5 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('V')
        .setCustomId(`basak`)

    let sramtansss6 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('VI')
        .setCustomId('terazi')


    let sramtansss7 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('VII')
        .setCustomId('koc')


    let sramtansss8 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('VIII')
        .setCustomId('akrep')
    
    let sramtansss9 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('IX')
        .setCustomId('yay')
    
    let sramtansss10 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('X')
        .setCustomId('oglak')
    
    let sramtansss11 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('XI')
        .setCustomId('kova')
    
    let sramtansss12 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('XII')
        .setCustomId('balık')

        
    

    let golgesramtanshadow = new MessageActionRow()
        .addComponents(sramtansss1, sramtansss2, sramtansss3, sramtansss4)
    
    let golgesramtanshadow2 = new MessageActionRow()
        .addComponents(sramtansss5, sramtansss6, sramtansss7, sramtansss8)

     let golgesramtanshadow3 = new MessageActionRow()
        .addComponents(sramtansss9, sramtansss10, sramtansss11, sramtansss12)
    
    message.channel.send({ content:`** Merhabalar arkadaşlar, burç rollerinizi seçmek için aşağıdaki butonlardan herhangi birine basabilirsiniz.  **

    ** I : <@&${babansramtan.burç.boga}> **
    ** II : <@&${babansramtan.burç.ikizler}> ** 
   **  III : <@&${babansramtan.burç.yengec}> **
   **  IV : <@&${babansramtan.burç.aslan}> **
  **   V : <@&${babansramtan.burç.basak}> **
  **   VI : <@&${babansramtan.burç.terazi}> ** 
   **  VII : <@&${babansramtan.burç.koc}> **
   **  VIII : <@&${babansramtan.burç.akrep}> **
   **  IX : <@&${babansramtan.burç.yay}> **
   **  X : <@&${babansramtan.burç.oglak}> **
   **  XI : <@&${babansramtan.burç.kova}> **
   **  XII : <@&${babansramtan.burç.balık}> **
    
    
    
     
    
    
    
    `, components: [golgesramtanshadow, golgesramtanshadow2, golgesramtanshadow3]  }) ;




      }

}
