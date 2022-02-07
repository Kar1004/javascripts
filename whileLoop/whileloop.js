const { log, countReset } = require("console");

//### 01 - Comptons
var num = 50;
var num2 = 200;


while (num < num2) {
   if (num % 2 === 0) {
      console.log("il est pair", num);
   }
   num++

}

// 02- Try again

let dice = null;
let count = 0;

let min = 1;
let max = 6;



while (dice < 6) {
   dice = Math.floor(Math.random() * (max - min + 1) + min);
   count = count + 1;

   console.log(dice, "valeur de dé");
}

console.log(count, "nbr de lancé");

//03 - Course
let mins = 1;
let maxs = 10;

let usainBolt = 0;
let tysonGay = 0;

let countU = 0;
let countT = 0;

while (usainBolt <= 100 && tysonGay <= 100) {

   countU = Math.floor(Math.random() * (maxs - mins + 1) + mins);
   countT = Math.floor(Math.random() * (maxs - mins + 1) + mins);

   usainBolt += countU;
   tysonGay += countT;



}

if (usainBolt >= 100) {
   console.log("usain bolt gagne", usainBolt);
}
else {
   console.log("tyson gay gagne", tysonGay);
}
