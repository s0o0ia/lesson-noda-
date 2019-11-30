const { Router } = require("express");
const router = Router();
const path = require("path");
const db = require("../db/database.json");
console.log(db.logins);

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

router.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "about.html"));
});

router.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "register.html"));
});

router.get("/db", (req, res) => {
  res.send(db);
});

router.get("/db/:id", (req, res) => {
  const el = req.params["id"];
  res.send(db.logins[el]);
});

module.exports = router;
