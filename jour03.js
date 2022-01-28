01 - Array

var fruits =["mango", "lemon","blueberry"];
console.log(fruits);

//# Arrays, boucles

var fruits=["eggs","milk","butter"];
console.log(fruits[1]);
console.log(fruits.indexOf("butter"));

//03 - Add and Remove

var objects=["pen","book","lamp"];
console.log(objects.shift("chair"));
console.log(objects.pop());
console.log(objects.push("laptop"));
console.log(objects.unshift());
console.log(objects);

// ## 04 - Order

var numbers=[4, 10, 8, 12 , 6];
console.log(numbers.reverse());
console.log(numbers.sort((a,b) => a-b ));


// BOUCLE 

var total=0;
var limit=10;


for( var i=0; i<=limit ;i++)
{
    total=total+i;
   
   

}

console.log(total);

// REVERSE

var sentence="Hello Konexio !";
var result="";

for(var i= sentence.length-1 ; i>=0; i--){
      result=result + sentence[i];
   
 }

 console.log(result);



 //  BONUS



 for(var i =0 ; i<100 ; i++){
     if(i%3===0){
         console.log("dizz ")
     }
     else if(i%5===0){
         console.log("Buzz");
     }

     else if(i%3===0 && i%5===0){
         console.log("fizzbuzz");
     }

     else if(i%7===0){
             
     }

     else{
         console.log(i);
     }
 }

 // BONUS 2
//  var total=0;
// var limit=10;

// while(total<=limit){
   
//     i+1;
// }

// console.log(total=i+total);