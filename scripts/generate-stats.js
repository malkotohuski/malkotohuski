const puppeteer = require('puppeteer');

async function generate(url, output) {
  const browser = await puppeteer.launch({args: ['--no-sandbox']});
  const page = await browser.newPage();
  await page.goto(url);
  const element = await page.$('body'); 
  await element.screenshot({ path: output });
  await browser.close();
}

(async () => {
  await generate('https://github-readme-stats.vercel.app/api?username=malkotohuski&show_icons=true&theme=dracula&hide_border=true', 'github-stats.png');
  await generate('https://github-readme-stats.vercel.app/api/top-langs/?username=malkotohuski&layout=compact&theme=dracula&hide_border=true', 'github-top-langs.png');
})();
