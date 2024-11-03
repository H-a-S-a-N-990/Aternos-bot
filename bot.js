const express = require('express');
const mineflayer = require('mineflayer');

// Create an Express app
const app = express();
const PORT = process.env.PORT || 3000; // Use environment variable or default to 3000

// Create a bot instance
const bot = mineflayer.createBot({
  host: 'Hasan22arabic.aternos.me', // Replace with your Aternos server IP
  port: 46184, // Default Minecraft port
  username: '247', // Replace with your bot's username
  version: '1.16.5', // Replace with your server's version
});

// Middleware to keep the server alive
app.get('/', (req, res) => {
  res.send('Bot is running!');
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Express server is running on http://localhost:${PORT}`);
});

// Event when the bot is spawned
bot.on('spawn', () => {
  console.log('Bot has spawned!');
});

// Event when the bot encounters an error
bot.on('error', (err) => {
  console.log('Error:', err);
});

// Event when the bot is kicked
bot.on('kicked', (reason) => {
  console.log('Kicked:', reason);
});

// Event when the bot is disconnected
bot.on('end', () => {
  console.log('Bot has disconnected. Attempting to reconnect...');
  // Reconnect after a delay
  setTimeout(() => {
    bot.connect();
  }, 5000);
});
