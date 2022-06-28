const { Client, Intents , Collection, MessageActionRow, MessageSelectMenu, Discord} = require('discord.js');
const client = new Client({ 
    intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.GUILD_INTEGRATIONS,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING
] 
});
const { joinVoiceChannel } = require('@discordjs/voice');
const sramtandayı = require("././src/config/sramtan.json");
const moment = require("moment")
const {  Bot_Token, Bot_Durum, Bot_Status } = sramtandayı.Bot

moment.locale("tr");


require('./src/handlers/functions.js')(client);
require('./src/handlers/mongoHandler.js');
require('./src/handlers/eventHandler.js');


const prefix = sramtandayı.Bot.Bot_Prefix;

client.annen = new Collection(); 
client.aliases = new Collection();

["command"].forEach(handler => {
  require(`./src/events/commandsLoad`)(client);
}); 



client.on("messageCreate", async message => {
  
  

  if (message.author.bot) return; 
  if (!message.guild) return; 

  if (!message.content.startsWith(prefix)) return; 

  const args = message.content.slice(prefix.length).trim().split(/ +/g); 
  const cmd = args.shift().toLowerCase(); 

  if (cmd.length === 0) return; 

  var command = client.annen.get(cmd); 
  if (!command) command = client.annen.get(client.aliases.get(cmd));


  if (command) 
  {
    try {
      command.çalıştır(client, message, args, message.author, args.join(" "), prefix)
    } catch (error) {
      console.log(error)
    }
  } else 
  return 
    
});





client.on('ready', () => { 
    joinVoiceChannel({
  channelId: sramtandayı.Bot.Bot_VoiceChannel,
  guildId: sramtandayı.Server.GuildID,
  adapterCreator: client.guilds.cache.get(sramtandayı.Server.GuildID).voiceAdapterCreator
 
});
  });

client.on('ready', () => {
  client.user.setActivity(Bot_Durum)
  client.user.setStatus(Bot_Status)
}); 
 

 client.on("interactionCreate",async (interaction, message) => {

  if(interaction.isButton()) {
    
  if(interaction.customId === "Lovers") {
      let member = interaction.member
      if(member.roles.cache.has(sramtandayı.iliski.Lovers)) {
        await member.roles.remove(sramtandayı.iliski.Lovers);
        await interaction.reply({ content: `<@&${sramtandayı.iliski.Lovers}> rolü üzerinizden alındı`, ephemeral: true });
      } else {
        await member.roles.add(sramtandayı.iliski.Lovers);
        await interaction.reply({ content: `<@&${sramtandayı.iliski.Lovers}> üzerinize verildi`, ephemeral: true });
      };
    };
  
  
  if(interaction.customId === "Alone") {
      let member = interaction.member
      if(member.roles.cache.has(sramtandayı.iliski.Alone)) {
        await member.roles.remove(sramtandayı.iliski.Alone);
        await interaction.reply({ content: `<@&${sramtandayı.iliski.Alone}> rolü üzerinizden alındı`, ephemeral: true });
      } else {
        await member.roles.add(sramtandayı.iliski.Alone);
        await interaction.reply({ content: `<@&${sramtandayı.iliski.Alone}> üzerinize verildi`, ephemeral: true });
      };
    };
  
if(interaction.customId === "LGBT") {
      let member = interaction.member
      if(member.roles.cache.has(sramtandayı.iliski.LGBT)) {
        await member.roles.remove(sramtandayı.iliski.LGBT);
        await interaction.reply({ content: `<@&${sramtandayı.iliski.LGBT}> rolü üzerinizden alındı`, ephemeral: true });
      } else {
        await member.roles.add(sramtandayı.iliski.LGBT);
        await interaction.reply({ content: `<@&${sramtandayı.iliski.LGBT}> üzerinize verildi`, ephemeral: true });
      };
    };
   
   if(interaction.customId === "anyone") {
      let member = interaction.member
      if(member.roles.cache.has(sramtandayı.iliski.anyone)) {
        await member.roles.remove(sramtandayı.iliski.anyone);
        await interaction.reply({ content: `<@&${sramtandayı.iliski.anyone}> rolü üzerinizden alındı`, ephemeral: true });
      } else {
        await member.roles.add(sramtandayı.iliski.anyone);
        await interaction.reply({ content: `<@&${sramtandayı.iliski.anyone}> üzerinize verildi`, ephemeral: true });
      };
    };
   
   
     if(interaction.customId === "etkinlik") {
      let member = interaction.member
      if(member.roles.cache.has(sramtandayı.katilim.etkinlik)) {
        await member.roles.remove(sramtandayı.katilim.etkinlik);
        await interaction.reply({ content: `<@&${sramtandayı.katilim.etkinlik}> rolü üzerinizden alındı`, ephemeral: true });
      } else {
        await member.roles.add(sramtandayı.katilim.etkinlik);
        await interaction.reply({ content: `<@&${sramtandayı.katilim.etkinlik}> üzerinize verildi`, ephemeral: true });
      };
    };
    
    
    if(interaction.customId === "cekilis") {
      let member = interaction.member
      if(member.roles.cache.has(sramtandayı.katilim.cekilis)) {
        await member.roles.remove(sramtandayı.katilim.cekilis);
        await interaction.reply({ content: `<@&${sramtandayı.katilim.cekilis}> rolü üzerinizden alındı`, ephemeral: true });
      } else {
        await member.roles.add(sramtandayı.katilim.cekilis);
        await interaction.reply({ content: `<@&${sramtandayı.katilim.cekilis}> üzerinize verildi`, ephemeral: true });
      };
    };
  
    if(interaction.customId === "vk") {
        let member = interaction.member
        if(member.roles.cache.has(sramtandayı.game.vk)) {
          await member.roles.remove(sramtandayı.game.vk);
          await interaction.reply({ content: `<@&${sramtandayı.game.vk}> rolü üzerinizden alındı`, ephemeral: true });
        } else {
          await member.roles.add(sramtandayı.game.vk);
          await interaction.reply({ content: `<@&${sramtandayı.game.vk}> üzerinize verildi`, ephemeral: true });
        };
      };


      if(interaction.customId === "dc") {
        let member = interaction.member
        if(member.roles.cache.has(sramtandayı.game.dc)) {
          await member.roles.remove(sramtandayı.game.dc);
          await interaction.reply({ content: `<@&${sramtandayı.game.dc}> rolü üzerinizden alındı`, ephemeral: true });
        } else {
          await member.roles.add(sramtandayı.game.dc);
          await interaction.reply({ content: `<@&${sramtandayı.game.dc}> üzerinize verildi`, ephemeral: true });
        };
      };



      if(interaction.customId === "gartic") {
        let member = interaction.member
        if(member.roles.cache.has(sramtandayı.game.gartic)) {
          await member.roles.remove(sramtandayı.game.gartic);
          await interaction.reply({ content: `<@&${sramtandayı.game.gartic}> rolü üzerinizden alındı`, ephemeral: true });
        } else {
          await member.roles.add(sramtandayı.game.gartic);
          await interaction.reply({ content: `<@&${sramtandayı.game.gartic}> üzerinize verildi`, ephemeral: true });
        };
      };

 if(interaction.customId === 'boga') {
 let member = interaction.member
if(member.roles.cache.has(sramtandayı.burç.boga)) {
await member.roles.remove(sramtandayı.burç.boga);
await interaction.reply({ content: `<@&${sramtandayı.burç.boga}> rolü üzerinizden alındı`, ephemeral: true });
} else {
await member.roles.add(sramtandayı.burç.boga);
await interaction.reply({ content: `<@&${sramtandayı.burç.boga}> üzerinize verildi`, ephemeral: true });


}; 
};

if(interaction.customId === "ikizler") {
let member = interaction.member
if(member.roles.cache.has(sramtandayı.burç.ikizler)) {
await member.roles.remove(sramtandayı.burç.ikizler);
await interaction.reply({ content: `<@&${sramtandayı.burç.ikizler}> rolü üzerinizden alındı`, ephemeral: true });
} else {
await member.roles.add(sramtandayı.burç.ikizler);
await interaction.reply({ content: `<@&${sramtandayı.burç.ikizler}> üzerinize verildi`, ephemeral: true });





};


};


if(interaction.customId === 'yengec') {
let member = interaction.member
if(member.roles.cache.has(sramtandayı.burç.yengec)) {
await member.roles.remove(sramtandayı.burç.yengec);
await interaction.reply({ content: `<@&${sramtandayı.burç.yengec}> rolü üzerinizden alındı`, ephemeral: true });
} else {
await member.roles.add(sramtandayı.burç.yengec);
await interaction.reply({ content: `<@&${sramtandayı.burç.yengec}> üzerinize verildi`, ephemeral: true });



}; 
};

if(interaction.customId === "aslan") {
let member = interaction.member
if(member.roles.cache.has(sramtandayı.burç.aslan)) {
await member.roles.remove(sramtandayı.burç.aslan);
await interaction.reply({ content: `<@&${sramtandayı.burç.aslan}> rolü üzerinizden alındı`, ephemeral: true });
} else {
await member.roles.add(sramtandayı.burç.aslan);
await interaction.reply({ content: `<@&${sramtandayı.burç.aslan}> üzerinize verildi`, ephemeral: true });



};
};



if(interaction.customId === 'basak') {
let member = interaction.member
if(member.roles.cache.has(sramtandayı.burç.basak)) {
await member.roles.remove(sramtandayı.burç.basak);
await interaction.reply({ content: `<@&${sramtandayı.burç.basak}> rolü üzerinizden alındı`, ephemeral: true });
} else {
await member.roles.add(sramtandayı.burç.basak);
await interaction.reply({ content: `<@&${sramtandayı.burç.basak}> üzerinize verildi`, ephemeral: true });


}; 
};

if(interaction.customId === "terazi") {
let member = interaction.member
if(member.roles.cache.has(sramtandayı.burç.terazi)) {
await member.roles.remove(sramtandayı.burç.terazi);
await interaction.reply({ content: `<@&${sramtandayı.burç.terazi}> rolü üzerinizden alındı`, ephemeral: true });
} else {
await member.roles.add(sramtandayı.burç.terazi);
await interaction.reply({ content: `<@&${sramtandayı.burç.terazi}> üzerinize verildi`, ephemeral: true });


};
};


if(interaction.customId === 'koc') {
let member = interaction.member
if(member.roles.cache.has(sramtandayı.burç.koc)) {
await member.roles.remove(sramtandayı.burç.koc);
await interaction.reply({ content: `<@&${sramtandayı.burç.koc}> rolü üzerinizden alındı`, ephemeral: true });
} else {
await member.roles.add(sramtandayı.burç.koc);
await interaction.reply({ content: `<@&${sramtandayı.burç.koc}> üzerinize verildi`, ephemeral: true });

}; 
};

if(interaction.customId === "akrep") {
let member = interaction.member
if(member.roles.cache.has(sramtandayı.burç.akrep)) {
await member.roles.remove(sramtandayı.burç.akrep);
await interaction.reply({ content: `<@&${sramtandayı.burç.akrep}> rolü üzerinizden alındı`, ephemeral: true });
} else {
await member.roles.add(sramtandayı.burç.akrep);
await interaction.reply({ content: `<@&${sramtandayı.burç.akrep}> üzerinize verildi`, ephemeral: true });

};
};

if(interaction.customId === "yay") {
let member = interaction.member
if(member.roles.cache.has(sramtandayı.burç.yay)) {
await member.roles.remove(sramtandayı.burç.yay);
await interaction.reply({ content: `<@&${sramtandayı.burç.yay}> rolü üzerinizden alındı`, ephemeral: true });
} else {
await member.roles.add(sramtandayı.burç.yay);
await interaction.reply({ content: `<@&${sramtandayı.burç.yay}> üzerinize verildi`, ephemeral: true });


};
};

if(interaction.customId === "oglak") {
let member = interaction.member
if(member.roles.cache.has(sramtandayı.burç.oglak)) {
await member.roles.remove(sramtandayı.burç.oglak);
await interaction.reply({ content: `<@&${sramtandayı.burç.oglak}> rolü üzerinizden alındı`, ephemeral: true });
} else {
await member.roles.add(sramtandayı.burç.oglak);
await interaction.reply({ content: `<@&${sramtandayı.burç.oglak}> üzerinize verildi`, ephemeral: true });


};
};

if(interaction.customId === "kova") {
let member = interaction.member
if(member.roles.cache.has(sramtandayı.burç.kova)) {
await member.roles.remove(sramtandayı.burç.kova);
await interaction.reply({ content: `<@&${sramtandayı.burç.kova}> rolü üzerinizden alındı`, ephemeral: true });
} else {
await member.roles.add(sramtandayı.burç.kova);
await interaction.reply({ content: `<@&${sramtandayı.burç.kova}> üzerinize verildi`, ephemeral: true });


};
};

if(interaction.customId === "balık") {
let member = interaction.member
if(member.roles.cache.has(sramtandayı.burç.balık)) {
await member.roles.remove(sramtandayı.burç.balık);
await interaction.reply({ content: `<@&${sramtandayı.burç.balık}> rolü üzerinizden alındı`, ephemeral: true });
} else {
await member.roles.add(sramtandayı.burç.balık);
await interaction.reply({ content: `<@&${sramtandayı.burç.balık}> üzerinize verildi`, ephemeral: true });


};
}; // balık //////////////////////




if(interaction.customId === "siyah") {
  let member = interaction.member
  if(member.roles.cache.has(sramtandayı.color.siyah)) {
    await member.roles.remove(sramtandayı.color.siyah);
    await interaction.reply({ content: `<@&${sramtandayı.color.siyah}> rolü üzerinizden alındı`, ephemeral: true });
  } else {
    await member.roles.add(sramtandayı.color.siyah);
    await interaction.reply({ content: `<@&${sramtandayı.color.siyah}> üzerinize verildi`, ephemeral: true });
  };
};


if(interaction.customId === "beyaz") {
  let member = interaction.member
  if(member.roles.cache.has(sramtandayı.color.beyaz)) {
    await member.roles.remove(sramtandayı.color.beyaz);
    await interaction.reply({ content: `<@&${sramtandayı.color.beyaz}> rolü üzerinizden alındı`, ephemeral: true });
  } else {
    await member.roles.add(sramtandayı.color.beyaz);
    await interaction.reply({ content: `<@&${sramtandayı.color.beyaz}> üzerinize verildi`, ephemeral: true });
  };
};

if(interaction.customId === "sarı") {
  let member = interaction.member
  if(member.roles.cache.has(sramtandayı.color.sarı)) {
    await member.roles.remove(sramtandayı.color.sarı);
    await interaction.reply({ content: `<@&${sramtandayı.color.sarı}> rolü üzerinizden alındı`, ephemeral: true });
  } else {
    await member.roles.add(sramtandayı.color.sarı);
    await interaction.reply({ content: `<@&${sramtandayı.color.sarı}> üzerinize verildi`, ephemeral: true });
  };
};

if(interaction.customId === "mor") {
  let member = interaction.member
  if(member.roles.cache.has(sramtandayı.color.mor)) {
    await member.roles.remove(sramtandayı.color.mor);
    await interaction.reply({ content: `<@&${sramtandayı.color.mor}> rolü üzerinizden alındı`, ephemeral: true });
  } else {
    await member.roles.add(sramtandayı.color.mor);
    await interaction.reply({ content: `<@&${sramtandayı.color.mor}> üzerinize verildi`, ephemeral: true });
  };
};

if(interaction.customId === "turuncu") {
  let member = interaction.member
  if(member.roles.cache.has(sramtandayı.color.turuncu)) {
    await member.roles.remove(sramtandayı.color.turuncu);
    await interaction.reply({ content: `<@&${sramtandayı.color.turuncu}> rolü üzerinizden alındı`, ephemeral: true });
  } else {
    await member.roles.add(sramtandayı.color.turuncu);
    await interaction.reply({ content: `<@&${sramtandayı.color.turuncu}> üzerinize verildi`, ephemeral: true });
  };
};


 if(interaction.customId === "yesil") {
  let member = interaction.member
  if(member.roles.cache.has(sramtandayı.color.yesil)) {
    await member.roles.remove(sramtandayı.color.yesil);
    await interaction.reply({ content: `<@&${sramtandayı.color.yesil}> rolü üzerinizden alındı`, ephemeral: true });
  } else {
    await member.roles.add(sramtandayı.color.yesil);
    await interaction.reply({ content: `<@&${sramtandayı.color.yesil}> üzerinize verildi`, ephemeral: true });
  };
};



if(interaction.customId === "mavi") {
    let member = interaction.member
    if(member.roles.cache.has(sramtandayı.color.mavi)) {
      await member.roles.remove(sramtandayı.color.mavi);
      await interaction.reply({ content: `<@&${sramtandayı.color.mavi}> rolü üzerinizden alındı`, ephemeral: true });
    } else {
      await member.roles.add(sramtandayı.color.mavi);
      await interaction.reply({ content: `<@&${sramtandayı.color.mavi}> üzerinize verildi`, ephemeral: true });
    };
  };


  if(interaction.customId === "pembe") {
    let member = interaction.member
    if(member.roles.cache.has(sramtandayı.color.pembe)) {
      await member.roles.remove(sramtandayı.color.pembe);
      await interaction.reply({ content: `<@&${sramtandayı.color.pembe}> rolü üzerinizden alındı`, ephemeral: true });
    } else {
      await member.roles.add(sramtandayı.color.pembe);
      await interaction.reply({ content: `<@&${sramtandayı.color.pembe}> üzerinize verildi`, ephemeral: true });
    };
  };


  if(interaction.customId === "kırmızı") {
    let member = interaction.member
    if(member.roles.cache.has(sramtandayı.color.kırmızı)) {
      await member.roles.remove(sramtandayı.color.kırmızı);
      await interaction.reply({ content: `<@&${sramtandayı.color.kırmızı}> rolü üzerinizden alındı`, ephemeral: true });
    } else {
      await member.roles.add(sramtandayı.color.kırmızı);
      await interaction.reply({ content: `<@&${sramtandayı.color.kırmızı}> üzerinize verildi`, ephemeral: true });
    };
  };

  


}})

client.login(Bot_Token).then(() => console.log('[BOT] Connection Started')).catch(() => {
	console.log('[BOT] Failed To Start Connection, Trying Again');
	process.exit();
});
