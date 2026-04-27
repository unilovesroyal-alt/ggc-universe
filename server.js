app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>GGC Empire</title>
      <style>
        body { background: #0A0A0A; color: #F2F2F2; font-family: system-ui; text-align: center; padding: 50px; }
        .gateway { font-size: 4rem; }
        h1 { color: #FFD700; }
        .product { background: rgba(255,215,0,0.1); border-radius: 20px; padding: 20px; margin: 20px 0; }
        ul { text-align: left; display: inline-block; }
        li { margin: 10px 0; }
      </style>
    </head>
    <body>
      <div class="gateway">◯ ∣</div>
      <h1>GATEWAY GIFT CODE</h1>
      <p>Access is earned, not given</p>
      
      <div class="product">
        <h2 style="color:#FFD700;">Products & Services</h2>
        <ul>
          <li><strong>⚡ Seed Cards</strong> — Digital access cards (Silver, Gold, Obsidian tiers)</li>
          <li><strong>🔺 GPC Digital Identity</strong> — Aura, rank, exposure, earnings tracking</li>
          <li><strong>📺 CAMM's TV</strong> — Attention engine with vertical video feed</li>
          <li><strong>💰 LCMT Money Train</strong> — Monetization, royalties, IP ownership</li>
          <li><strong>🤖 Discord Bot</strong> — Commands: !gateway, !triad, !report</li>
        </ul>
      </div>
      
      <p><strong>One-time purchases and recurring subscriptions available.</strong></p>
    </body>
    </html>
  `);
});