const config = require('js-yaml').load(require('fs').readFileSync("./config.yaml", 'utf8'));

// 毎朝午前3時に日の出の時間を取得します。
require('node-cron').schedule('0 0 3 * * *', async() => {
  // 日本の夜明けを取得
  const sunrise = new Date(await fetch(`https://api.sunrise-sunset.org/json?lat=35.410000&lng=139.69200&&date=today&formatted=0&tzid=Asia/Toky`)
    .then(res => res.ok ? res.json() : { err: "取得に失敗しました！" })
    .then(d => d.results.sunrise));
  
  // 時間になったら実行 投稿したら自滅します。
  const task = cron.schedule(`${sunrise.getSeconds} ${sunrise.getMinutes} ${sunrise.getHours()} * *`, () =>  
    fetch(`${config.instanceUrl}/api/notes/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        i: config.token,
        text: "日本の夜明けぜよおおお",
      }),
    }).then(()=> task.stop())
  );
});
