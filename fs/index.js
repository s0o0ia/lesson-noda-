const fs = require("fs");

module.exports.addUser = el => {
  let db = JSON.parse(fs.readFileSync("db/database.json", "utf-8"));
  db.users.push(el);
  fs.writeFileSync("db/database.json", JSON.stringify(db));
};


// let a = {
//   name:'vika'
// }
// console.log('=========',a)
// a.tel = 888;
// console.log('++++++',a)


module.exports.removeUser = (id ,callback) => {
  let db = JSON.parse(fs.readFileSync("db/database.json", "utf-8"));
  console.log(db.users);
  db.users.forEach(item => {
    if(item.id == id){
      let current = db.users.indexOf(item)
      db.users.splice(current,1)
    }
  });
  fs.writeFileSync("db/database.json", JSON.stringify(db));
  callback(200)
}

// var a = ['aa','bb','cc','dd']
// a.indexOf('cc')
// var current = a.indexOf('cc')
// a.splice(current,1)
// ["cc"]