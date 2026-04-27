class PADebugger {
  constructor() {
    this.log = [];
    this.positive = 0;
    this.negative = 0;
    this.pulseStreak = 0;
    this.hollowStreak = 0;
  }

  emit(force, domain, action, data = {}) {
    const entry = { id: this.log.length + 1, time: new Date().toLocaleTimeString(), force, domain, action, data };
    this.log.push(entry);
    if (force === 'POSITIVE') {
      this.positive++;
      this.pulseStreak++;
      this.hollowStreak = 0;
      console.log(`⚡ [${entry.time}] ${domain}:${action} | Streak: ${this.pulseStreak}`);
    } else if (force === 'NEGATIVE') {
      this.negative++;
      this.hollowStreak++;
      this.pulseStreak = 0;
      console.log(`🌑 [${entry.time}] ${domain}:${action} | Streak: ${this.hollowStreak}`);
    }
    return entry;
  }

  report() {
    const total = this.positive + this.negative;
    const posPct = total === 0 ? 0 : (this.positive / total * 100).toFixed(1);
    const negPct = total === 0 ? 0 : (this.negative / total * 100).toFixed(1);
    console.log('\n═══════════════════════════════════');
    console.log('⚔️ PA LANGUAGE BATTLE REPORT ⚔️');
    console.log('═══════════════════════════════════');
    console.log(`⚡ POSITIVE: ${this.positive} (${posPct}%)`);
    console.log(`🌑 NEGATIVE: ${this.negative} (${negPct}%)`);
    if (this.pulseStreak > 5) console.log('🔥 PULSE IS DOMINATING!');
    else if (this.hollowStreak > 5) console.log('🕳️ HOLLOW IS SPREADING!');
    else console.log('⚖️ FORCES ARE BALANCED!');
    return { positive: this.positive, negative: this.negative };
  }
}

const pa = new PADebugger();
module.exports = { pa };