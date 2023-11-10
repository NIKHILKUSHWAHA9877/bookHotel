const { MongoClient} = require('mongodb');


const uri = "mongodb+srv://Nikhil_Kushwaha:howareyou123N@lmongodb.iggpbyp.mongodb.net/?retryWrites=true&w=majority";

async function main(){

const client = new MongoClient(uri);

try{
    // Connect the client to the server	(optional starting in v4.7)
await client.connect();

// Send a ping to confirm a successful connection
await listDatabases(client)

}catch(e){
console.log(e)

}finally{
await client.close();
}
}

async function listDatabases(client){
dbLIST = await client.db().admin().listDatabases();
console.log("Avliable Databases are: " + dbLIST);
dbLIST.databases.forEach(db =>{
console.log(` - ${db.name}`);
})


}
main().catch(console.error)


// const url = "mongodb+srv://Nikhil_Kushwaha:howareyou@123N@lmongodb.iggpbyp.mongodb.net/?retryWrites=true&w=majority"


// const client = new MongoClient(url)


// await client.connect();
// await listDatabases(client)



// instead of writing await.client.connect() and await listdatabases noramlly we can write them in try/catch/finally like firrst it will try to execute and in catch if error will come then it will console.log error and after that at last finally will run  .. soo it is good practice to write them inside try catch instead of writting them normally
// try{
//     await client.connect();
//     await listDatabases(client)
     
// }catch{
//     console.log("ERROR!")
// }finally{

// await client.close();
// }
