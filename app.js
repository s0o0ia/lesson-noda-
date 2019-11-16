const express = require('express');
const os = require('os');
const app = express();
const PORT = 4000;


// const { name, summ } = require('./name');


const db = require('./db');
console.log(db);

const qwe = require('./name');

// qwe.name('Vassa');
// qwe.summ(20,20)


// let a = os.userInfo();
// console.log('=====>',a);
// console.log('=====>',a/1000 /60);
// networkInterfaces
// totalmem
// cpus
// let a = 100;
// let b = 300;
// let c = a + b;
// console.log(c);
// console.log("hello world");
// cours hunter

// const name = (name) => {
//     console.log(`Hello ${name}`);
// };

// name("Nastia");
// summ(20,20);

app.listen(PORT, () => {
  console.log("Server working"); 
})



