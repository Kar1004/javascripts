console.log("hello world!");


// STRING
var test="mon nom est Al";
console.log(test);

//CONCATENATION

var name ="Al"
console.log("Nice to meet you" +" "+name)

//String Length
var testlenght="I'm very long !" ;
console.log(testlenght.length);

//Replace

var food="croissant is meh" ;
food=food.replace("meh"," so good");
console.log(food);

//Up and Down

var basic="This is Cool";
var basicUp= basic.toUpperCase();
var basicDown=basic.toLowerCase();
console.log(basicUp);
console.log(basicDown);

//split

var word="banana";
var letter=word.split("");
console.log(letter);

//template

var age= 23;
var template= `I m ${age} years old`;
console.log(template);

// Sub
 var sub="lorem adjasht";
 sub=sub.substring(4,5);
 console.log(sub)

 //ECHAPPEMENTS
 var spit="bonjour";
 spit=spit.replaceAll('o','a')
 console.log(spit)
