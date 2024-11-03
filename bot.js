const express = require('express');
const mineflayer = require('mineflayer');

// Create an Express app
const app = express();
const PORT = process.env.PORT || 3000; // Use environment variable or default to 3000

// Function to create a new bot instance
function createBot() {
  const bot = mineflayer.createBot({
    host: 'Hasan22arabic.aternos.me', // Replace with your Aternos server IP
    port: 46184, // Default Minecraft port
    username: 'BotName', // Replace with your bot's username
    version: '1.16.5', // Replace with your server's version
  });

  // Event when the bot is spawned
  bot.on('spawn', () => {
    console.log('Bot has spawned!');
    bot.entity.visible = false; 
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
    setTimeout(createBot, 5000); // Create a new bot instance
  });
}

// Start the Express server
app.get('/', (req, res) => {
  res.send('Bot is running!');
});

app.listen(PORT, () => {
  console.log(`Express server is running on http://localhost:${PORT}`);
});

// Create the initial bot instance
createBot();
