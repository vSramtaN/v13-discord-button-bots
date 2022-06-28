module.exports = {
    
  name: "ilişki", 
  çalıştır: async (client, message, args, prefix ) => {
    const { MessageActionRow, MessageButton } = require('discord.js');


    let golge1 = new MessageButton()
        .setStyle('DANGER') 
        .setEmoji('❤️')
        .setCustomId('Lovers')

    let golge2 = new MessageButton()
        .setStyle('SECONDARY')
        .setEmoji('💔')
        .setCustomId('Alone')

    let golge3 = new MessageButton()
        .setStyle('SUCCESS')
        .setEmoji('💙')
        .setCustomId('LGBT')

    let golge4 = new MessageButton()
        .setStyle('PRIMARY')
        .setEmoji('🖤')
        .setCustomId('anyone')


    let sramtannnn = new MessageActionRow()
        .addComponents(golge1, golge2, golge3, golge4, )
    
  

    message.channel.send({ content:` **Merhabalar arkadaşlar, ilişki rolünüzü seçmek için aşağıdaki emojilerden herhangi birine basabilirsiniz. **

   ** ❤️ : \`Sevgilim Var\` **
   **  💔 : \`Sevgilim Yok\` **
   ** 💙 : \`LGBT\` **
   ** 🖤 : \`Sevgili Yapmıyorum\` ** ` 
   
   
   , components: [sramtannnn]  }) ;




      }

}
