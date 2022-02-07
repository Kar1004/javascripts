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
   var cats=[cat,cat2]

console.log(cats[0].age);
console.log(cats[1].age);

console.log(cats.isCute);
console.log(cats[1].isCute);

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
let secondes=0;
let minute =0;
let heure =0;
function format(num){
    
      heure=Math.floor(num/3600);
      minute=Math.floor((num-heure*3600)/60);
      secondes=num-heure*3600-minute*60;
      console.log( heure ,minute,secondes );

}
format(3700);