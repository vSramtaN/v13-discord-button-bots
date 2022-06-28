module.exports = {
    
  name: "ec-rol", 
  çalıştır: async (client, message, args, prefix ) => {

    const { MessageActionRow, MessageButton } = require('discord.js');
    const config = require('../config/sramtan.json')

    let dayı1 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('🎁 Etkinlik Katılımcısı')
        .setCustomId('etkinlik')

    let dayı2 = new MessageButton()
        .setStyle('DANGER')
        .setLabel('🎉 Çekiliş Katılımcısı')
        .setCustomId('cekilis')

   


    let sramtan = new MessageActionRow()
        .addComponents(dayı1, dayı2,)
    
  

    message.channel.send({ content:`** Sunucumuzda eveyone ve here kullanılmamaktadır, bu yüzden bu rolleri almanızı öneririz. **

** <@&${config.katilim.cekilis}> :  Sunucumuzda her gün yapılan çekilişlere katılmanızı sağlar, **

** <@&${config.katilim.etkinlik}> : Sunucumuzda her gün yapılan etkinliklere katılmanızı sağlar. **


    `, components: [sramtan]  }) ;




      }

}
