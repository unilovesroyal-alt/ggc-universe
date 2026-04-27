require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.on('ready', () => {
  console.log(`🤖 ${client.user.tag} online — GGC Empire`);
  client.user.setActivity('⚡ GGC Universe', { type: 'WATCHING' });
});

client.on('messageCreate', async (msg) => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith('!')) return;
  const cmd = msg.content.slice(1).toLowerCase();
  if (cmd === 'gateway') msg.reply('◯ ∣\n**GATEWAY GIFT CODE**\n*Access is earned, not given*');
  if (cmd === 'triad') msg.reply('⚡ GPC | 📺 CAMM\'s TV | 💰 LCMT');
});

const TOKEN = process.env.DISCORD_TOKEN;
if (!TOKEN) { console.error('❌ No DISCORD_TOKEN'); process.exit(1); }
client.login(TOKEN);
