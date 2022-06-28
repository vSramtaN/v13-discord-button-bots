module.exports = {
    
    name: 'color',
  çalıştır: async (client, message, args,prefix ) => {
    
    const { MessageActionRow, MessageButton } = require('discord.js');
    const babansramtanmaddox = require('../config/sramtan.json')

    let sramtansss1 = new MessageButton()
        .setStyle('DANGER')
        .setLabel('Siyah')
        .setCustomId('siyah')

    let sramtansss2 = new MessageButton()
        .setStyle('DANGER')
        .setLabel('Beyaz')
        .setCustomId('beyaz')

        let sramtansss3 = new MessageButton()
        .setStyle('DANGER')
        .setLabel('Kırmızı')
        .setCustomId('kırmızı')
        
        let sramtansss4 = new MessageButton()
        .setStyle('DANGER')
        .setLabel('Yeşil')
        .setCustomId(`yesil`)


        let sramtansss5 = new MessageButton()
        .setStyle('DANGER')
        .setLabel('Mor')
        .setCustomId('mor') 

        let sramtansss6 = new MessageButton()
        .setStyle('DANGER')
        .setLabel('Sarı')
        .setCustomId('sarı')
   
        let sramtansss7 = new MessageButton()
        .setStyle('DANGER')
        .setLabel('Turncu')
        .setCustomId('turuncu')


    let sramtansss8 = new MessageButton()
        .setStyle('DANGER')
        .setLabel('Mavi')
        .setCustomId('mavi')

    let sramtansss9 = new MessageButton()
       .setStyle("DANGER")
       .setLabel("Pembe")
       .setCustomId("pembe")

 
   

    let golgesramtanshadow = new MessageActionRow()
        .addComponents(sramtansss1, sramtansss2, sramtansss3, sramtansss4)
    
    let golgesramtanshadow2 = new MessageActionRow()
        .addComponents(sramtansss5, sramtansss6, sramtansss7, sramtansss8, sramtansss9)
    
    message.channel.send({ content:`** Merhaba, Aşağıdaki Renklerden İstediğini Almak için Butona Tıklaman Yeterlidir.  **

    ** Siyah : <@&${babansramtanmaddox.color.siyah}> **
    ** Beyaz : <@&${babansramtanmaddox.color.beyaz}> ** 
    ** Kırmızı: <@&${babansramtanmaddox.color.kırmızı}> **
   **  Yeşil : <@&${babansramtanmaddox.color.yesil}> **
  **   Mor : <@&${babansramtanmaddox.color.mor}> **
  **   Sarı : <@&${babansramtanmaddox.color.sarı}> ** 
   **  Turuncu : <@&${babansramtanmaddox.color.turuncu}> **
   **  Mavi <@&${babansramtanmaddox.color.mavi}> **
   **  Pembe : <@&${babansramtanmaddox.color.pembe}> **

    
    
    
     
    
    
    
    `, components: [golgesramtanshadow, golgesramtanshadow2]  }) ;




      }

}
