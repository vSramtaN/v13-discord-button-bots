module.exports = {
    
    name: "game", 
    çalıştır: async (client, message, args, prefix ) => {
      const { MessageActionRow, MessageButton } = require('discord.js');

  
  
      let sramtanbabba1 = new MessageButton()
          .setStyle('DANGER')
          .setLabel('Vampir Köylü!')
          .setCustomId('vk')
  
      let sramtanbabba2 = new MessageButton()
          .setStyle('SUCCESS')
          .setLabel('Doğruluk / Cesaretlik!')
          .setCustomId('dc')
  
      let sramtanbabba3 = new MessageButton()
          .setStyle('PRIMARY')
          .setLabel('Gartic!')
          .setCustomId('gartic')
  
  
  
      let sramtan = new MessageActionRow()
          .addComponents(sramtanbabba1, sramtanbabba2, sramtanbabba3 )
      
    
  
      message.channel.send({ content:`** Aşağıdaki menüden kendinize oyun seçebilirsiniz. Bir oyunun rolünü almak için o butona tıklayın. **
  


`, components: [sramtan]  }) ;
  
  
  
  
        }
  
  }
  