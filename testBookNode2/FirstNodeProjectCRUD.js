const express = require("express")

const fs = require('fs') // here we writing require fs because we are now using POSTMAN and there we will aply POST method so we require fs here;

//taking json data below by giving its path
const Users = require("./MOCK_DATA.json");
const { json } = require("body-parser");

const app = express()


//Applying middleware plugin here because we are sending data by post req through POSTMAN so middleware is required verymuch
app.use(express.urlencoded({ extended: false }));


const PORT = 8000; // port on which app will run 


//Now by using GET method we will display our data on frontend
//we are writing /users here because on users section data will show we can give any other name also

// app.get("/users",(req,res)=>{
//     return res.json(Users)
// })

app.get("/api/users", (req, res) => {
    return res.json(Users)
})
//now we are applying /api method here means we are making a hybrid server like if user will open/request data in desktop then normal html data will be send as an response but if we use /api method then on mobile devices data will be shown as JSON format 
//SO INSTEAD OF ONLY app.get("/users",(req,res)=>{}  WE WILL MAKE IT  app.get("/api/users",(req,res) =>{})


//now lets make it hybrid like now we will use only users and show only first name of users from data 
app.get("/users", (req, res) => {
    const html = `
<ul>
${Users.map((user) => `<li>${user.first_name}</li>`).join("")}  

</ul>
`;
    res.send(html)
    // here we have to dirctly send the data so we are using send not json because it is just first_name so writing json will not be valid;
    // we are using .join("") is because without this first_name will shown with commas , and using join it will beautyfy and shown in proper formet

})

// we are done with making hybrid server using /api/users and /users only;


//NOW FOR EXAMPLE WE NEED UNIQUE USER I MEAN  like user with id:1   only or maybe with id:40 only so we had to do this (DYNAMICALLY) means we write id on search bar and we will get info of users -: 
app.get("/api/users/:id", (req, res) => {   // here we are writing :id after users because we will give random id's in number after /api/users and it will show us data
    const id = Number(req.params.id);   // here we write Number because id is in string and we converted here in number so we can write it in numbers in search bar 
    const user = Users.find((user) => user.id === id);   //here finding id in data using find if found then return response
    return res.json(user)
})

//ABOVE WE ARE DONE WITH FINDING UNIQUE ID AND SEND RESPONSE




//NOW we have to EDIT current data to fir this we will use PATCH method
app.patch("/api/users/:id", (req, res) => {
    //for editing data 
    
    return res.json({ status: "success" , data: updateData})
})


//NOW to ADD NEW DATA IN FILE WE WILL USE POST method
app.post("/api/users/", (req, res) => {
    //to add new data
    const body = req.body;
    // Users.push(body) // read below why commented this 
    // here we writing push(body) because it will add new data in Users data when we will send post request from POSTMAN 
    //BUT WHEN WE WILL SEND DATA THEN IT WILL ONLY ADDS DATA IN OUR USERS DATA BUT IT WILL NOT UPDATE UNIQUE ID so for this we can't just write Users.push(body) we need to use spread operater and then id + 1

    Users.push({...body, id: Users.length + 1 })
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(Users), (err, data) => {
        return res.json({ status: "success", id: Users.length });
    });
});


//Now to delete data from file
app.delete("/api/users/:id",async (req, res) => {
    //to delete data using id etc
   await Users.findByIdAndDelete(req.params.id )
    return res.json({ status: "success" })
})



//**************OPTIMIZING THE CODE**************** //
//Above we saw that for applying every ROUTE method we are writing every line again and again and ONE THING IS SAME IN EVERY ROUTE METHOD that is ("/api/users/:id") so we can also write them combineally Advantage of writing them combinally will be like in future if we want to edit something in ("/api/users/:id") then we had to only edit it oce not again and again in every ROUTE individually SO LETS OPTIMIZE OUR CODE :---

// app.route("/api/users/:id").get((req,res)=>{
// const id = Number( req.params.id);
// const user = Users.find((user) => user.id === id);
// return res.json(user); 
// }).patch((req,res)=>{}).delete((req,res)=>{})
// as we can see here we first wrote app.route and inside (app.route) we just one time write ("/api/users/:id") and by using (.) this dot we are writing different routes ater that and inside then writing functions normally so this is optamized version of previous codes






app.listen(PORT, () => console.log(`SERVER STARTED! at PORT: ${PORT}`))