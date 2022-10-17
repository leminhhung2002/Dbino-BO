const {
  getAllChampions,
  createChampion,
  deleteChampion,
  modifyChampion,
} = require("./champion.service");

module.exports = {
  getAllChampions: (req, res) => {
    getAllChampions((err, results) => {
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
  createChampion: (req, res) => {
    createChampion(req.body, (err, results) => {
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
  deleteChampion: (req, res) => {
    const id = req.params.id;
    deleteChampion(id, (err, results) => {
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
  modifyChampion: (req, res) => {
    const id = req.params.id;
    const data = req.body;
    modifyChampion({ id, data }, (err, results) => {
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
