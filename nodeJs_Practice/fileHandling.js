// in this we are learning file handling 
// to start working on file handling we need a module named "fs";
const files = require('fs')

files.writeFileSync("./text.txt","Hello World");// this is syncronous way to write an a file



// asyncronous way to write file
files.writeFile("./test.txt", "Hello Worl", (err) => {});


// this function will help to read any file data in terminal or console
const result = files.readFileSync("./contacts.txt","utf-8")
console.log(result)


//one another way to read files data inside console and  
files.readFile("./contacts.txt",(err,result)=>{
if(err){
    console.log("Error")

}else{
    console.log(result);
}

})

//previous function overwrite other old content if we insert any new content inside them so below method is used to append new data without deleating or overwriting new data
files.appendFileSync("./test.txt" , new Date().getDate().toLocaleString()); //this is syncronous one and this will add dates again and again

//previous one will append date but again and again in same line but below will ad new data but also in different line

files.appendFileSync("./test.txt", `\n hHi there \n`)





