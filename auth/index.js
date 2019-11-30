const { Router } = require("express");
const router = Router();
const { addUser } = require("../fs");

router.post("/register", (req, res) => {
  // console.log(req.body);
  let data = req.body;
  data.id = Date.now();
  console.log(data);
  addUser(req.body);
  res.redirect("/");
});

router.delete("/user", (req, res) => {
  console.log(req.body);
  addUser(req.body);
  res.redirect("/");
});

module.exports = router;
