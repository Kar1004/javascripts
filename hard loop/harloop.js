// Sum
let min = 0;
let max = 100;
let number = [];
let sum = 0;
let rNumber = 0;


for (let i = rNumber; number < 50; i++) {


    rNumber = Math.floor(Math.random() * (max - min + 1) + min);
    

    for (let j = 0; j < number.length; j++) {
        sum += number[i];
    }

}
console.log(sum);
