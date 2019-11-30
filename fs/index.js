const fs = require("fs");

module.exports.addUser = el => {
  // fs.writeFileSync("hello.txt", "hello world");
  // fs.appendFileSync("hello.txt", "hello ");
  let db = JSON.parse(fs.readFileSync("db/database.json", "utf-8"));
  // let a = {
  //   firstname: "Sofa",
  //   tel: "911"
  // };
  db.users.push(el);
  fs.writeFileSync("db/database.json", JSON.stringify(db));
};


// let a = {
//   name:'vika'
// }
// console.log('=========',a)
// a.tel = 888;
// console.log('++++++',a)


// console.log(db);
module.exports.removeUser = id => {
  console.log('id', id)
}