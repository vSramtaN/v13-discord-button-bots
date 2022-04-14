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
const sramtandayı = require("./sramtan.json");
const moment = require("moment")
const {  Bot_Token, Bot_Durum, Bot_Status } = sramtandayı.Bot

xxxxxxxxxxxxxxx 	10 star sonra gelicek
