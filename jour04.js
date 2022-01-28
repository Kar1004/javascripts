//## 01 - Object
var cat ={
    name :"Garfield",
    age : 3,
    isCute: true,
}

console.log(cat)
console.log(cat.age)


if (cat.isCute!=false){
    console.log("so cute")
};

// ## 02 - Combine

var cat2 ={
    name :"Gar",
    age : 6,
    isCute: true,
}

var cat ={
    name :"Garfield",
    age : 3,
    isCute: true,
}
    Object.assign(cat,cat2);
   var cats=cat;
console.log(cats);


console.log(cat.age);
console.log(cats.age);

console.log(cats.isCute);
console.log(cat2.isCute);

//03 - Even

function checkIfEven(num) {
    if(num%2===0){
        console.log("even");
    
    }

    else{
        console.log("odd");
    }
}

checkIfEven(9);
checkIfEven(1);
checkIfEven(10);
checkIfEven(7);
checkIfEven(5);
checkIfEven(12);
checkIfEven(6);


//## 04 - Compare

function compare(num,num2){
    if(num>num2){
        console.log("num est grand que num2",num);
    }
    else if(num<num2){
        console.log("num2 est grand que num",num2);
    }
    
    else if(num===num2){
        console.log("num2 et num sont égaux");
    }

    else{
        console.log(" vous étes nulle");
    }
    
}

compare(5,5)
compare(5,11)
compare(5,4)
compare(9,5)
compare(5,10)
compare(20,5)
compare(5,1)

//## 5-ADD UP

var lol= 0 ;

function addUp(num){
    for(var i=num; i<=78 ;i++){
        lol = i;
       
    }
    console.log(lol);
}

addUp(12);

//## 06 - Time
var secondes=0;
function format(num){
    if(num>0){
        console.log( secondes=secondes.floor(num%3600));
    }

}
format(3700);