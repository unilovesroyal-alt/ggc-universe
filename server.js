require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
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
    </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => console.log('🔺 GGC Empire running'));
