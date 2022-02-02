// function calculate(num1,num2,operator){
//       if (operator === "+" ) {
//           console.log(num1+num2);          
//       }
//       else if (operator === "*") {
//           console.log(num1*num2);
//       } 
      
//       else if (operator === "/" ) {
//           console.log(num1/num2);
//       } 
      
//       else if (operator === "%" ) {
//           console.log(num1%num2);
//       } 
      
      
      
//       else {
//           console.log("error");
//       }
    
// }

// calculate()
var args1 =parseInt( process.argv.slice(2)) ;

console.log('arguments : ', calculate(args1));

// 02 - Table$


function multiply(num) {
      
    for (let i = 1 ; i <= 10; i++) {
        result= i*num;
        
        if (num){
        console.log(result);
        }
        else{
            console.log("error");
        }

        
    }
   
    
}
multiply()
var args =parseInt( process.argv.slice(2)) ;

console.log('arguments : ', multiply(args));

