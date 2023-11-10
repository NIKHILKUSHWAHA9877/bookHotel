 const express = require('express');
 const app = express()
 const path = ("path")
 const hbs = require("hbs")


// const templatePath = path.join(___dirname,'../templates')

app.use(express.json())
app.set("view engine" , "hbs")
// app.set("views", templatePath)

require("./db/conn")  // connecting database code to our main file and mongoose/mongodb 
 const port = process.env.PORT || 3000

 app.get("/" , (req , res)=>{
res.send("Hello from nikhil")

 });

//  app.listen(3000 , ()=> console.log("server started")) // here if we write port 3000 inside the app.listen then it will only avliable in our  local sever  but we want that everyone should access it so we will call it above using another method

// app.post("/")



app.listen(port , ()=>{
console.log(`Server is running on port no:${port}`)


})