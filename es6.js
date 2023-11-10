// let num 
// function sum(...num){
//     console.log(num);
// }
// console.log(sum(1,2,3)) // rest pArameter


//  const input = [5,7,9,11,15,17]
// const output = 13

// for (let i =0 ; i<input.length ; i++){
//  let start = input[i];
//  let next =  start + 2 ;
// if( input[i + 1] !==next){
// console.log(next)

// }
// const romanToInt = function(s) {
//     const MapToConvertRomanToInt = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000
//     };

//     let output = 0;
//     for (let i = 0 ; i<s.length ; i++){     
//     const currentChar = s[i];
//     const currentValue = MapToConvertRomanToInt[currentChar];
//      const nextChar =   s[i+1];
//      const nextValue =MapToConvertRomanToInt[nextChar];
    
//     if(nextValue > currentValue){
//         output -= currentValue;


//     }
//     else{

// output+=currentValue;

//     }
//     }
//     return output;
// };


// let obj = {
//     age: "33",
//     name:"virat",
//     sports:"cricket"
//     }
    
//     reverse =  function(){
//       const swappedObj = {};
//       for (const key in obj){
//     value = obj[key]
//      swappedObj[value] = key;
    
//     }
//     return swappedObj;
      
//     };
    
// const reversedObj = reverse();
// console.log(reversedObj);


for(i=0;i<5;i++){
    let str = "";
    for(j=5;j>i;j--){

str+=" ";

    }


for(k=0;k<=i;k++){
str+="*";
}
for(l=1;l<=i;l++){
    str+="*";

}


console.log(str);
}
for(i=5;i>=0;i--){
    let str = "";
    for(j=5;j>i;j--){

str+=" ";

    }


for(k=0;k<=i;k++){
str+="*";
}
for(l=1;l<=i;l++){
    str+="*";

}


console.log(str);
}