const { Router } = require("express");
const router = Router();
const { addUser,removeUser } = require("../fs");
const fs = require("fs");

router.post("/register", (req, res) => {
  let data = req.body;
  data.id = Date.now();
  console.log(data);
  let db = JSON.parse(fs.readFileSync("db/database.json", "utf-8"));
  let fill = db.users.filter(item => item.tel === data.tel || item.email === data.email);
  if (fill.length == 0){
    addUser(data);
    res.redirect('/');
  }
  else{
    res.redirect('/register');
  }
});

router.delete("/remove_user/:id", (req, res) => {
  removeUser(req.params.id, data => {
    if (data == 200){
        res.sendStatus(200);
    }
  });

});

module.exports = router;
