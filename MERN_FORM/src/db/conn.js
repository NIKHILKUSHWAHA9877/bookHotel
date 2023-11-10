const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/ResistrationFaram",{
// useNewUrlParser:true,
// useUnifiedTopology:true,
// useCreateIndex:true
// }).then(()=>{
//     console.log(`Connecting Successful`)
// }).catch((e)=>{
// console.log(e)

// })
mongoose.connect("mongodb://127.0.0.1:27017/ResistrationFaram").then(()=>{
console.log(`Connecting Successful`)
}).catch((e)=>{
console.log("Failed to connect")
})
    