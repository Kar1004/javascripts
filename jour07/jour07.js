
var fs = require("fs");
fs.readFile("jour07.txt", function (err, data) {
    if (err) {
       console.error(err);
       return;
    }
 
    console.log("Lecture en différé : " + data.toString());
 });


 //2

 let array =[1,2,3,4,5];
 
 let double=array.map((arr) => arr*2);
 console.log(double);


 //3
 let longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
]

let shortNames = longNames.map(function(shortName){
    let name ={
        name : shortName.firstName + " " + shortName.lastName
    }
   return name
})
console.log(shortNames);


// Filter

let array1 = [49 , "toto" , 34 , "javascript" , 8];

let number = array1.filter(
    function(num) {
    if (typeof(num) === "number"){
    return num ;
    }
})

console.log(number);


//05 - Filter Even

let  numbers =[1, 2, 3, 4, 5, 6, 7 , 8]

let even=numbers.filter(function(eve){
    if(eve%2===0){
        return eve;
    }

    
})
console.log(even);


//06

let cakes = [
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
] 


let stat = cakes.map(function(sta){
    if(  sta.status === "available" && sta.flavor==="chocolate"){
      console.log(sta.status="sold out");

    }
    return sta
})

console.log(stat);

let choco=stat.filter(function(choc)
{
     return choc.status="sold out";   
}
)

if (choco.status=== "sold out"){
    console.log(choco);
    
}

    
