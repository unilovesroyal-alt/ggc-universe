require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const { pa } = require('./pa-debugger.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.on('ready', () => {
  console.log(`🤖 ${client.user.tag} online — GGC Empire`);
  client.user.setActivity('⚡ GGC Universe', { type: 'WATCHING' });
  pa.emit('POSITIVE', 'DISCORD', 'BOT_ONLINE', { tag: client.user.tag });
});

client.on('messageCreate', async (msg) => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith('!')) return;
  
  const cmd = msg.content.slice(1).toLowerCase();
  
  if (cmd === 'gateway') {
    pa.emit('POSITIVE', 'DISCORD', 'COMMAND_GATEWAY', { user: msg.author.tag });
    msg.reply('◯ ∣\n**GATEWAY GIFT CODE**\n*Access is earned, not given*');
  }
  else if (cmd === 'triad') {
    pa.emit('POSITIVE', 'DISCORD', 'COMMAND_TRIAD', { user: msg.author.tag });
    msg.reply('⚡ GPC | 📺 CAMM\'s TV | 💰 LCMT');
  }
  else if (cmd === 'report') {
    const report = pa.report();
    msg.reply(`📊 **PA BATTLE REPORT**\n⚡ Positive: ${report.positive}\n🌑 Negative: ${report.negative}`);
  }
  else {
    pa.emit('NEGATIVE', 'DISCORD', 'UNKNOWN_COMMAND', { user: msg.author.tag, command: cmd });
  }
});

client.on('error', (err) => {
  pa.emit('NEGATIVE', 'DISCORD', 'BOT_ERROR', { error: err.message });
});

const TOKEN = process.env.DISCORD_TOKEN;
if (!TOKEN) {
  pa.emit('NEGATIVE', 'SYSTEM', 'MISSING_TOKEN', {});
  process.exit(1);
}
client.login(TOKEN);