//So here we will create our first server 

//again we require a module for that 

const http = require("http")
const fs = require("fs")
const url = require("url")

// createServer keyword will create server for us Create server will take a (requestListener)callback function that can process our incoming requests..
//the arrow function we created inside createServer that is responsible for our incoming requests 
//req and res req is request and Response are two arguments inside creatserver and arrow function 
//whenever any incoming request will come inside server then createserver will run this arrow callback function 
//inside first argument (req / request) it will put all incoming request like user name/his request/his ip address etc all client side ....
const MyServer = http.createServer((req,res)=>{



const log = `${Date.now()}: ${req.url} New Req Received\n`;
const myUrl = url.parse(req.url,true);
console.log(myUrl);

fs.appendFile("log.txt",log ,(err ,data)=>{

switch(myUrl.pathname){

case "/":
res.end("HomePage");
break;

case"./about":
const username = myUrl.query.myname;
res.end(`Hi,${username}`);
break;


}


})
console.log("New req Rec")
//so this console.log will run when any new request will run it will show to user
//then it will send res/ response


console.log(req)
//this response object console.log(req) will give us all then infomation of requester user who came to our server like ip / device name form where requested etc..


res.end("Hello From Server")

});



// so starting server required a port number like 8000 etc 
//like one server can run only one port like this one running on 8000 next will run on 8001 like this

//then we will provide a  callback arrow function inside this like if everything is running fine everything is inisiliing fine then console.log() this
//optional
MyServer.listen(8000,()=> console.log("Server Started")) 
// then after this we have to go inside package.json file and make there a start script