const db = require("./../../../database");

module.exports = {
  getAllChampions: (callback) => {
    db.query(
      `select * from champions where delete_status != 1 order by id desc `,
      [],
      async (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        
        const getTopUserByUser = await Promise.all(results.map(async (e) => {
          const dateStartCover = e.dateStart.substring(0, 10);
          const dateEndCover = e.dateEnd.substring(0, 10);
          if (e.type === 'klgd') {
            return new Promise((resolve, reject) => {
              db.query(`select email, sum(amount_win) as trade from bet_history where type_account = 1 and created_at BETWEEN '${dateStartCover}' and '${dateEndCover}' GROUP BY email ORDER BY trade DESC LIMIT 3`, [], (error1, results1) => {
                if (error1) {
                  reject(error1);
                }
                resolve(Object.assign(e, { topUser: results1 }));
              });
            });
          }

          if (e.type === 'hh') {
            const hoaHongCommissionHistory = await new Promise((resolve, reject) => {
              db.query(`SELECT upline_id, SUM(personal_trading_volume) as trading_volumn
              FROM commission_history
              WHERE type = 'hhv' AND created_at BETWEEN '${dateStartCover}' and '${dateEndCover}'
              GROUP BY upline_id
              ORDER BY trading_volumn DESC
              LIMIT 3`, [], (error1, results1) => {
                if (error1) {
                  reject(error1);
                }
                resolve(results1);
              });
            });

            if (!hoaHongCommissionHistory.length) return Object.assign(e, { topUser: [] });

            let refCodeIn = '(';
            const arr1 = hoaHongCommissionHistory.map((e) => e.upline_id);
            arr1.forEach((e, ind) => {
              refCodeIn += `'${e}'${ind !== arr1.length - 1 ? ',' : ''}`;
            })

            refCodeIn += ')';

            const userInfo = await new Promise((resolve, reject) => {
              db.query(`select email, ref_code from users where ref_code in ${refCodeIn}`, [], (error1, results2) => {
                if (error1) {
                  reject(error1);
                }
                resolve(results2);
              });
            });

            const userLookup = userInfo.reduce((prev, curr) => {
              prev[curr.ref_code] = curr.email;
              return prev;
            }, {});

            const topUser = [];
            hoaHongCommissionHistory.forEach((e) => {
              if (userLookup[e.upline_id]) {
                topUser.push({
                  email: userLookup[e.upline_id],
                  trade: e.trading_volumn,
                });
              }
            });

            return Object.assign(e, { topUser });
          }
        }));


        return callback(null, getTopUserByUser);
      }
    );
  },
  createChampion: (data, callback) => {
    db.query(
      `insert into champions (name, dateStart, dateEnd, totalRewards, background, type, content) values(?,?,?,?,?,?,?)`,
      [
        data.name,
        data.dateStart,
        data.dateEnd,
        data.totalRewards,
        data.background,
        data.type,
        data.content,
      ],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results.insertId);
      }
    );
  },
  deleteChampion: (id, callback) => {
    db.query(
      `update champions set delete_status= ? where id = ?`,
      [1, id],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  modifyChampion: ({ id, data }, callback) => {
    db.query(
      `update champions set name=?, dateStart=?, dateEnd=?, totalRewards=?, background=?, type=?, content=? where id = ?`,
      [
        data.name,
        data.dateStart,
        data.dateEnd,
        data.totalRewards,
        data.background,
        data.type,
        data.content,
        id,
      ],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
};
