const { locale } = require("moment");

function sortLetters(letters) {

    var lettertab = [];

    for (i = 0; i <=letters.length; i++) {
        lettertab.push(letters[i]);
    }

    lettertab.sort();
    
    console.log(lettertab.join(''));


}
sortLetters('konexio')

//02

function countEach(x , o) {


    
   

    
}



countEach("xxxoo")


//03
 

function checkPal( word) {

    const WordR=word.split('').reverse().join('');

    if (word==WordR) {
        console.log(word + ' is palindrome.');
    }
    else {
        console.log(word + ' is not palindrome.'+' '+WordR);
    }
}

checkPal("JELLY");

//04

function swap(Lword) {
let fwor =[];   
   
   for( i=0 ; i<Lword.length ; i++){
    let word = Lword.split("");
    if (word[i].toLowerCase()==word[i]) {
        let low=word[i].toUpperCase()
        fwor.push(low)
    }

    if (word[i].toUpperCase()==word[i]) {
        let up=word[i].toLowerCase()
        fwor.push(up)
    }

   
   
   }
   console.log(fwor.join("")) ;
    


    
}
swap('Lost in city and Lol')