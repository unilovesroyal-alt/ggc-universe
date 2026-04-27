require('dotenv').config();
const express = require('express');
const { pa } = require('./pa-debugger.js');
const app = express();

// Emit POSITIVE event when server starts
pa.emit('POSITIVE', 'SYSTEM', 'SERVER_START', { port: process.env.PORT || 3000 });

app.get('/', (req, res) => {
  // Emit POSITIVE event for every page view
  pa.emit('POSITIVE', 'WEB', 'PAGE_VIEW', { path: '/' });
  
  res.send(`
    <!DOCTYPE html>
    <html>
    <head><title>GGC Empire</title>
    <style>
      body { background: #0A0A0A; color: #F2F2F2; font-family: system-ui; text-align: center; padding: 50px; }
      .gateway { font-size: 4rem; }
      h1 { color: #FFD700; }
    </style>
    </head>
    <body>
      <div class="gateway">◯ ∣</div>
      <h1>GATEWAY GIFT CODE</h1>
      <p>Access is earned, not given</p>
      <p style="color:#FFD700;">⚡ PA Language Active ⚡</p>
    </body>
    </html>
  `);
});

// Error handler (emits NEGATIVE event)
app.use((err, req, res, next) => {
  pa.emit('NEGATIVE', 'WEB', 'SERVER_ERROR', { error: err.message });
  res.status(500).send('Something broke');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🔺 GGC Empire running on port ${PORT}`);
  pa.emit('POSITIVE', 'SYSTEM', 'SERVER_LISTENING', { port: PORT });
});