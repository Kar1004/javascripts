function formatDate(myDate) {

    let date = new Date(myDate);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    console.log(`${day}/${month}/${year}`);
    return;

}

formatDate("2022-02-08")


// //02 - Age
function dateAge(myDate) {

    let date = new Date(myDate);
    let dates = new Date();
    let aniv = dates.getFullYear() - date.getFullYear();
    let years = date.getUTCFullYear();
    let days = date.getDate();
    let months = date.getMonth() + 1;




    console.log(`${days}/${months}/${years}`);
    console.log(aniv);
    return;
}

dateAge("1998-04-10")

// 03 - Validator



// function checkProfil(email, password, username) {
//     var prompt = require("prompt");
//     var schema = {
//         properties: {
//             name: {
//                 description: "écrivez votre nom",
//                 pattern: /^[a-zA-Z\s\-]+$/,
//                 message: 'Name must be only letters, spaces, or dashes',
//                 required: true,
//             },
//             password: {
//                 hidden: true,
//                 replace:'*',
//                 pattern:'/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g',
//                 required:true,
//                 maxItems:6,
//                 minItems:1,
                

//             },

//             email: {
//                 pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}/mg,
//                 required: true,
//             },
//         }
//     };
//     prompt.start();

//     prompt.get(schema, function (err, result) {

//         console.log('Command-line input received:');
//         console.log('  name: ' + result.name);
//         console.log('  password: ' + result.password);
//         console.log(' email: ' + result.email);
//     });



// }

// checkProfil();

//Bonus1

function formdat(mydate2) {
    var moment = require('moment');
 console.log(moment(mydate2).format('L')); 
    
}
formdat("1998-04-10")


function ages2(mydate3){
    var moment = require('moment');
console.log( moment().format('YYYY')-moment(mydate3).format('YYYY'));

}

ages2("1998")