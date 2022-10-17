const db = require("../../../database");

module.exports = {
  getAllLuckyDraw: (callback) => {
    db.query(
      `select * from lucky_draw where type IS NULL order by id desc `,
      [],
      async (error, results, fields) => {
        if (error) {
          return callback(error);
        }

        return callback(null, results);
      }
    );
  },
  getAllLuckyDrawAdmin: (callback) => {
    db.query(
      `select * from lucky_draw where type='email' or type='nickname'`,
      [],
      async (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  modifyLuckyDraw: async ({ type, data }, callback) => {
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

    const adminData = await adminDataQuery();
    let isExistEmail = false;
    let isExistNickname = false;

    if (adminData) {
      isExistEmail = adminData.find((e) => e.type === "email");
      isExistNickname = adminData.find((e) => e.type === "nickname");
    }

    if (type === "email") {
      if (isExistEmail) {
        db.query(
          `update lucky_draw set email=? where type='email'`,
          [data.email.trim().replace(/\n/g, '|')],
          (error, results) => {
            if (error) {
              return callback(error);
            }
            return callback(null, results);
          }
        );
      } else {
        db.query(
          "insert into lucky_draw (email, type) value(?, ?)",
          [data.email.trim().replace(/\n/g, '|'), 'email'],
          (error, results) => {
            if (error) {
              return callback(error);
            }
            return callback(null, results);
          }
        );
      }
    }

    if (type === "nickname") {
      if (isExistNickname) {
        db.query(
          `update lucky_draw set nickname=? where type='nickname'`,
          [data.nickname.trim().replace(/\n/g, '|')],
          (error, results) => {
            if (error) {
              return callback(error);
            }
            return callback(null, results);
          }
        );
      } else {
        db.query(
          "insert into lucky_draw (nickname, type) value(?, ?)",
          [data.nickname.trim().replace(/\n/g, '|'), 'nickname'],
          (error, results) => {
            if (error) {
              return callback(error);
            }
            return callback(null, results);
          }
        );
      }
    }
  },
};
