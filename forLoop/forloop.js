// // 01  - Somme des carrés


// var num= 5;
//     for( i=num; i<=10 ;i++ ){
     
//         num=i*i;
//         console.log(num);
//     }
// // 02 - Comptons
 
// var mSever=100;
// var result=1;
// var count=0;

// for(i= mSever ; i<=1000 ; i++){
//     mSever=i;

//          if(i%7===0){ 
//             count=count+1;      
             
//         }
// }

// console.log(count);
// ### 03 - Chanceux

var min = 1;
var max = 6;
var chance =0;
var count=0;


for(  i=0; i< 20 ;i++){
    chance= Math.floor(Math.random() * ( max - min + 1) + min);
   if(chance >= 5){
   
     count=count +chance;

   }
   
}

console.log(count);
