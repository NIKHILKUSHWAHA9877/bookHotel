const express = require('express');
const helmet = require('helmet');
const cookieparser = require('cookie-parser');
const path = require('path');
// const { error } = require('console');

const fs = require('fs')

const app = express();
const PORT = 3000;


app.use(helmet())
app.use(cookieparser())
app.use(express.json())
app.use(express.urlencoded({ extended:true}))


app.set("view engine" , "ejs")
app.set("views" , path.join(__dirname , 'views'))



// app.get("/" , (req,res)=>{
//     res.send("Home Page")
//     res.end()
// })

//Setting up routes 

app.get('/' , (req,res)=>{
let username = req.cookies.username;
return res.render("home" , {username})
//here what will be shown on homepage will be writen in home.ejs file 

//  the  object i.e return res.render("home" , {username}) will be sent to the home.ejs file accrdingly the home.ejs will be updated
})

app.get('/login' , (req,res)=>{
let status = req.query.msg ? true:false; // if no error then go to if and show login page
if(status){
    return res.render('login',{
    error:"invalid details!"
})
}else{
return res.render('login')
}
})

app.get('/welcome' , (req,res)=>{
    let username = req.cookies.username  //f cookie of usernameexixt then it will read that
    return res.render('welcome' , {username})
})


//NOW we will define the /process_login route where we will be receiving the form data from the client .And,finally we will delete the cookie to logout the user in/logout route

app.post('/process_login' , (req,res)=>{
let username = req.body.username;
let password = req.body.password;


let userDetails = {
    username:"j",
    password:'s'
}

if(username === userDetails.username && password === userDetails.password){

res.cookie('username', username);
return res.redirect('/welcome');

}
else{
 return res.redirect('/login?msg=fail')
}
})

//here when we logout then all the cookies will automatically deleated else if login again without logout then cookies will not be deleate and it will automtically ligged in
app.get('/logout' , (req,res)=>{
res.clearCookie('username')
return res.redirect('/login')


})
app.listen(PORT,()=>{console.log("Server running on:" , PORT)})



//here if you want to give custom data base instead of that userdetail trial data so add this lines
// function getUsers() {
//     try {
//       const rawData = fs.readFileSync('users.json');
//       return JSON.parse(rawData);
//     } catch (error) {
//       console.error('Error reading users.json:', error);
//       return [];
//     }
//   }

//and also do changes in if condition where we are comparing data with entered data 