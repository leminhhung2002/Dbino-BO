const {
  getAllLuckyDraw,
  getAllLuckyDrawAdmin,
  modifyLuckyDraw,
} = require("./luckyDraw.service");

module.exports = {
  getAllLuckyDraw: (req, res) => {
    getAllLuckyDraw((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getAllLuckyDrawAdmin: (req, res) => {
    getAllLuckyDrawAdmin((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  modifyLuckyDraw: (req, res) => {
    const type = req.params.type;
    modifyLuckyDraw({ type, data: req.body }, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
};
