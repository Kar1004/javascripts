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

    if(x.length === o.length )
    {
        console.log(true);
    }
    else{
        console.log(false);
    }
    
}

countEach("xxxooo")