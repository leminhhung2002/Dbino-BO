const router = require("express");
const app = router();
const cron = require("cron");
const db = require("../../../database");
const { checkToken } = require("../../../auth/token_validation");
const {
  getAllLuckyDraw,
  getAllLuckyDrawAdmin,
  modifyLuckyDraw,
} = require("./luckyDraw.controller");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.get("/lucky-draws", checkToken, getAllLuckyDraw);

app.get("/lucky-draws-admin", checkToken, getAllLuckyDrawAdmin);

// Admin tạo username và email random
app.put("/lucky-draws/:type", checkToken, modifyLuckyDraw);

// 12 AM
const job = new cron.CronJob({
  cronTime: "0 0 0 * * *",
  onTick: async() => {
    const adminDataQuery = () => {
      return new Promise((resolve, reject) => {
        db.query(
          `select * from lucky_draw where type='email' or type='nickname'`,
          [],
          (error, results, fields) => {
            if (error) {
              return reject(error);
            }

            return resolve(results);
          }
        );
      });
    };

    function getMultipleRandom(arr, num) {
      const shuffled = [...arr].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, num);
    }

    const adminData = await adminDataQuery();
    if (adminData.length === 2) {
      const emailsRandomList = adminData.find((e) => e.type === "email");
      const nicknamesRandomList = adminData.find((e) => e.type === "nickname");

      if (emailsRandomList && nicknamesRandomList) {
        const emails = getMultipleRandom(emailsRandomList.email.split("|"), 3);
        const nicknames = getMultipleRandom(
          nicknamesRandomList.nickname.split("|"),
          3
        );
        const currentDay = new Date().toISOString();

        db.query(
          `insert into lucky_draw (email, nickname, day)
              values(?,?,?)`,
          [emails.join("|"), nicknames.join("|"), currentDay],
          (error, results) => {
            if (error) {
              console.error(error);
              return;
            }
            console.log(`Thêm thành công dữ liệu giải đấu ${results.insertId}`);
          }
        );
      }
    }
  }
});
job.start();

module.exports = app;
