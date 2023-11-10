const http = require("http");

// these below fs and url also not required because we are using express framework here 
// const fs = require("fs");
// const url = require("url");

const express = require("express");

//we we are creating a app here and this application we created is  basically a handler function;
const application = express();


// so here we are applying handler on get request 
//('/') so this slash is a path where we are applying handler ('/') this sign is home page sign (basically on which path you want to put handler request)
//req and res are handler function this req and res ks only for (application.get('/' ) only for home page
application.get('/' , (req , res)=>{
return res.send("Hello from home page")
})
//now if req or res come from any other page 
application.get('/about', (req , res)=>{
return res.send("hello from about page")

})

// this below function MyHandler whole big code is now of no need because we use express framework here and there is no need to wite this much big code

// function MyHandler(req,res){   
//     const log = `${Date.now()}: ${req.url} New Req Received\n`;
//     const myUrl = url.parse(req.url,true);
//     console.log(myUrl);
    
//     fs.appendFile("log.txt",log ,(err ,data)=>{
    
//     switch(myUrl.pathname){
    
//     case "/":
//     res.end("HomePage");
//     break;
    
//     case"./about":
//     const username = myUrl.query.myname;
//     res.end(`Hi,${username}`);
//     break;
//     }
//     })
//     console.log("New req Rec")
   
//     console.log(req)
//     res.end("Hello From Server")
    
   

// }


//if we do not want to use these below myserver and myserver listen code line to give host number so in express framework we can also use another way like below 

application.listen(8001 , () => console.log("Server Started!"));

const MyServer = http.createServer(application);

MyServer.listen(8001, ()=> console.log("Server Started"))