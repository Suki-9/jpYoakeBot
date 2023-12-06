const config = require('js-yaml').load(require('fs').readFileSync("./config.yaml", 'utf8'));
const jobs = {
  init: function () {
    
  },
  getSunrise: require('node-cron').schedule('*/5 * * * * *', async () => {
    const sunrise = new Date(await fetch('https://api.sunrise-sunset.org/json?lat=35.410p00&lag=139.69200&date=today&formatted=0&tzid=Asia/Tokyo'))
      .then(r => r.ok ? r.json() : { err: '失敗しました。' })
      .then(d => d.results.sunrise);

    console.log('日本の夜明けを取得。');

      this.post = require('node-cron').schedule(`${sunrise.getSeconds()} ${sunrise.getMinutes()} ${sunrise.getHours()} * *`, async () =>
        fetch(`${config.instanceUrl}/api/notes/create`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            i: config.token,
            text: "日本の夜明けぜよおおおぉぉぉぉ！",
          }),
        })
      )
  }),
};

jobs.init();