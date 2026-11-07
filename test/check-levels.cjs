// Checks that every campaign mission is winnable with its intended answer
// and that random Endless Drill puzzles are solvable.
// Run: node test/check-levels.cjs   (needs Playwright + Chromium)
const path = require('path');
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + path.resolve(__dirname, '..', 'index.html'));
  const failures = await page.evaluate(() => {
    const T = window.__traj, bad = [];
    for (const L of T.LEVELS) {
      const s = T.simulate(L, T.toStd(L.answer.form, L.answer));
      if (!s.win) bad.push(`${L.id} ${L.name}: ${s.misfire ? 'misfire' : s.endReason}`);
    }
    for (let i = 0; i < 300; i++) {
      const L = T.genDrill(i), s = T.simulate(L, T.toStd(L.answer.form, L.answer));
      if (!s.win) bad.push('drill ' + JSON.stringify(L.answer));
    }
    return bad;
  });
  await browser.close();
  if (failures.length) { console.error(failures.join('\n')); process.exit(1); }
  console.log('All missions and 300 drill puzzles pass.');
})();
