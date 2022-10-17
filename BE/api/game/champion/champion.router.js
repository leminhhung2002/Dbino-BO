const router = require("express");
const app = router();
const { checkToken } = require("../../../auth/token_validation");
const {
  getAllChampions,
  createChampion,
  deleteChampion,
  modifyChampion,
} = require("./champion.controller");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.get("/champions", checkToken, getAllChampions);

app.post("/champion", checkToken, createChampion);

app.delete("/champion/:id", checkToken, deleteChampion);

app.put("/champion/:id", checkToken, modifyChampion);

module.exports = app;
