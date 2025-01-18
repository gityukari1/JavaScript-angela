require('dotenv').config(); // Load .env file

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
});

const BOT_TOKEN = process.env.BOT_TOKEN;

if (!BOT_TOKEN) {
  console.error('BOT_TOKEN is missing in the .env file!');
  process.exit(1); // Exit the process if no token is found
}

client.once('ready', () => {
  console.log('angela is online!');
});

client.login(BOT_TOKEN).catch((error) => {
  console.error('Login failed:', error);
});
