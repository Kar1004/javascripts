// NUMB AND FLOAT

var int = 102;
var float = 13.9;
console.log("la valeur de int est: " + int+"la valeur du float est :" +float);

//convert

var basic=30;
var stringfield=basic.length;
console.log(stringfield);

//## 03 - Round

var num=1.5;
var rounded= Math.round(num);
console.log(rounded);

//04 - Arithmétique

var bis =5;
var test= 12;
console.log(test+bis);

//COMPARAISON

var test=143;
var bis=219;

console.log("pour le supéreieur "+ test<bis);
console.log("pour le inférieur "+ test>bis);
console.log("pour le supéreieur et égale "+ test<=bis);
console.log("pour le inférieur et égale "+ test>=bis);
console.log("pour le supéreieur "+ test<bis);


//06 - Condition

var limit=50;
var score=65;
if (score<=limit){
    console.log("Ok good");
}
else{
    console.log("Noooooooooooo");

}

//07 - Condition

var password="azerty";

if (password.length > 5){
    console.log("password is secure");
}

// 08 - Condition III

var limit=50;
var score=65;
var password="azerty";

if(limit<score && password.length>5){
    console.log("Everything is good");
}
else if (limit>score ||password.length > 5){
    console.log("Something is good" );
}
else if (limit>score && password.length < 5){
    console.log("Nothing is good" );
}






//⭐ Bonus 

var min = 1;
var max = 6;

var random =Math.floor(Math.random() * (6 - 1 + 1) + 1); 
console.log(random);


if(random===6){
    console.log("yes we...");
}

else{
    console.log("vous étes proches");
}


// ⭐⭐ Bonus II

var month="january";

    switch (month) {
        case "january": 
            console.log("winter!");
            break;
        case "febreary": 
            console.log("summer");
            break;
        case "aout": 
            console.log("summer!");
            break;
        case "Winter": 
            console.log("Let it snow !");
            break;
        default: 
            console.log("That's not a season...");
    }


    // ⭐⭐⭐ Bonus III

    var roundedNumber=3.6;



