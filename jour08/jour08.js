// //1
// var request = require('request');
// const contriesNames = [];
// let getCountries = "https://restcountries.com/v3.1/all";

// request.get(getCountries, function (err, res, body) {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     const country = JSON.parse(body);
//     for (i = 0; i < country.length; i++) {

//         contriesNames.push(country[i].name.common);

//     }
//     console.log(contriesNames);


// });


//02

var request = require('request')
const getFact = "https://api.chucknorris.io/jokes/random";


request.get(getFact, function (err, res, body) {
    if (err) {
        console.log(err);
        return;
    }
    const joke = JSON.parse(body);
    console.log(joke.value);
});

//3
var request = require('request')
const catchPokemon = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200";


function pokemon1(number) {
request.get(catchPokemon, function (err, res, body) {
    if (err) {
        console.log(err);
        return;
    }
    
        const pk = JSON.parse(body);
    console.log(pk.results[number].name);

});
}

pokemon1(10);
