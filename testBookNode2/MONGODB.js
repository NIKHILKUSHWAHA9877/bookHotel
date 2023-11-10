// test> use new1_dataBase
// switched to db new1_dataBase     // this command is to create new database
// new1_dataBase> show dbs   // this comment will show our databases we created or avliable
// admin   40.00 KiB
// config  72.00 KiB
// local   40.00 KiB

// new1_dataBase> db.posts.insertOne({title:"first data", readtime:10, publish_date:"28/7/2023"});    //by using this commant db. ...  this will     create new sections and whatever we wanted to add in our data base  and press enter 
// {
//   acknowledged: true,
//   insertedId: ObjectId("64ecee1e7b18bf7ef4fe594f")
// }
// new1_dataBase> show collections    // 
// posts

// new1_dataBase> db.posts.find()      // this command will show our inserted data we we created above and also provide one unique id to that automatically  
// [
//   {
//     _id: ObjectId("64ecee1e7b18bf7ef4fe594f"),
//     title: 'first data',
//     readtime: 10,
//     publish_date: '28/7/2023'
//   }
// ]


// new1_dataBase> db.posts.find({read_time:{$gt:9}});   
// so this db.posts.find() previously we used this command to see our inserted data now we can also insert conditions in it to see particular data like we inserted condition above in find brackets like ({read_time:{$gt:9}}) so here $gt means (greather than ) it will show only that data which read_time is greather  than 9 ; 


// new1_dataBase> db.posts.updateOne({read_time:{$lt:15}},{$set:{status:"Just new added using UpdateOne"}});
// so this db.posts.updateOne  (updateOne) command is use to add any new data to particular dataset or update any current data so again we are first providing condition into it like in which data ( {read_time:{$lt:15} ) read time is less than 15 is there ({$lt:15} lt means less than)  and after this we are using ({$set:{status:"Just new added using UpdateOne"}})  this $set will add new status column in data 


//new1_dataBase> db.posts.deleteOne({read_time:{$lt:15}});
//this deleteOne will delete whatever you want to delete in your data



// SO THIS WAS CRUD operations in MONGO  CRUD means  CREATE , READ , UPDATE , DELEATE ; we done all CRUD operation above successfully;






// ****************************************    below is first ever database created and its all errors   ********************************//
// MongoInvalidArgumentError: Argument "docs" must be an array of documents
// new1_dataBase> db.posts.insertMany[({title:"second time added",read_time:5,publish_date:"28/7/2023"},{title:"third add",read_time:5,publish_date:"28/7/2023"})];

// new1_dataBase>

// new1_dataBase> show dbs
// admin           40.00 KiB
// config         108.00 KiB
// local           40.00 KiB
// new1_dataBase   40.00 KiB
// new1_dataBase> db.posts.find()
// [
//   {
//     _id: ObjectId("64ecee1e7b18bf7ef4fe594f"),
//     title: 'first data',
//     readtime: 10,
//     publish_date: '28/7/2023'
//   }
// ]
// new1_dataBase> db.posts.insertMany[({title:"second time added",read_time:5,publish_date:"28/7/2023"},{title:"third add",read_time:5,publish_date:"28/7/2023"})];

// new1_dataBase> db.posts.insertMany[({title:"second time added",read_time:5,publish_date:"28/7/2023"},{title:"third add",read_time:5,publish_date:"28/7/2023"});
// Uncaught:
// SyntaxError: Unexpected token, expected "]" (1:143)

// > 1 | db.posts.insertMany[({title:"second time added",read_time:5,publish_date:"28/7/2023"},{title:"third add",read_time:5,publish_date:"28/7/2023"});
//     |                                                                                                                                                ^
//   2 |

// new1_dataBase> db.posts.insertMany({title:"second time added",read_time:5,publish_date:"28/7/2023"},{title:"third add",read_time:5,publish_date:"28/7/2023"});
// MongoInvalidArgumentError: Argument "docs" must be an array of documents
// new1_dataBase>
// (To exit, press Ctrl+C again or Ctrl+D or type .exit)
// new1_dataBase>

// C:\Users\nikhi>

// C:\Users\nikhi>

// C:\Users\nikhi> db.posts.insertMany({title:"second time added",read_time:5,publish_date:"28/7/2023"},{title:"third add",read_time:5,publish_date:"28/7/2023"});
// 'db.posts.insertMany' is not recognized as an internal or external command,
// operable program or batch file.

// C:\Users\nikhi>mongosh
// Current Mongosh Log ID: 64ecf2073df8e1ee8b5c5c7a
// Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.6
// Using MongoDB:          7.0.0
// Using Mongosh:          1.10.6

// For mongosh info see: https://docs.mongodb.com/mongodb-shell/

// ------
//    The server generated these startup warnings when booting
//    2023-08-28T23:31:58.824+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
// ------

// test> show dbs
// admin           40.00 KiB
// config         108.00 KiB
// local           40.00 KiB
// new1_dataBase   40.00 KiB
// test>
// (To exit, press Ctrl+C again or Ctrl+D or type .exit)
// test> db.posts.find()

// test>
// (To exit, press Ctrl+C again or Ctrl+D or type .exit)
// test>

// C:\Users\nikhi>

// C:\Users\nikhi>

// C:\Users\nikhi>mongosh
// Current Mongosh Log ID: 64ecf25984663d6e089c1961
// Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.6
// Using MongoDB:          7.0.0
// Using Mongosh:          1.10.6

// For mongosh info see: https://docs.mongodb.com/mongodb-shell/

// ------
//    The server generated these startup warnings when booting
//    2023-08-28T23:31:58.824+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
// ------

// test> show dbs
// admin           40.00 KiB
// config         108.00 KiB
// local           40.00 KiB
// new1_dataBase   40.00 KiB
// test> db.posts.find()

// test> use new1_dataBase
// switched to db new1_dataBase
// new1_dataBase> db.posts.find()
// [
//   {
//     _id: ObjectId("64ecee1e7b18bf7ef4fe594f"),
//     title: 'first data',
//     readtime: 10,
//     publish_date: '28/7/2023'
//   }
// ]
// new1_dataBase> db.posts.insertMany({title:"second time added",read_time:5,publish_date:"28/7/2023"},{title:"third add",read_time:5,publish_date:"28/7/2023"});
// MongoInvalidArgumentError: Argument "docs" must be an array of documents
// new1_dataBase> db.posts.insertOne({title:"second time added",read_time:5,publish_date:"28/7/2023"},{title:"third add",read_time:5,publish_date:"28/7/2023"});
// {
//   acknowledged: true,
//   insertedId: ObjectId("64ecf35d84663d6e089c1962")
// }
// new1_dataBase> db.posts.insertOne({title:"fourth time added",read_time:15,publish_date:"28/7/2023"});
// {
//   acknowledged: true,
//   insertedId: ObjectId("64ecf39584663d6e089c1963")
// }
// new1_dataBase> db.collections
// new1_dataBase.collections
// new1_dataBase> db.posts.find()
// [
//   {
//     _id: ObjectId("64ecee1e7b18bf7ef4fe594f"),
//     title: 'first data',
//     readtime: 10,
//     publish_date: '28/7/2023'
//   },
//   {
//     _id: ObjectId("64ecf35d84663d6e089c1962"),
//     title: 'second time added',
//     read_time: 5,
//     publish_date: '28/7/2023'
//   },
//   {
//     _id: ObjectId("64ecf39584663d6e089c1963"),
//     title: 'fourth time added',
//     read_time: 15,
//     publish_date: '28/7/2023'
//   }
// ]
// new1_dataBase> db.posts.find({read_time{$gt:9}});
// Uncaught:
// SyntaxError: Unexpected token, expected "," (1:24)

// > 1 | db.posts.find({read_time{$gt:9}});
//     |                         ^
//   2 |

// new1_dataBase> db.posts.find({read_time:{$gt:9}});
// [
//   {
//     _id: ObjectId("64ecf39584663d6e089c1963"),
//     title: 'fourth time added',
//     read_time: 15,
//     publish_date: '28/7/2023'
//   }
// ]
// new1_dataBase> db.posts.updateOne({read_time:{$lt:15}},{$set:{status:"Just new added using UpdateOne"}});
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0
// }
// new1_dataBase> db.posts.find()
// [
//   {
//     _id: ObjectId("64ecee1e7b18bf7ef4fe594f"),
//     title: 'first data',
//     readtime: 10,
//     publish_date: '28/7/2023'
//   },
//   {
//     _id: ObjectId("64ecf35d84663d6e089c1962"),
//     title: 'second time added',
//     read_time: 5,
//     publish_date: '28/7/2023',
//     status: 'Just new added using UpdateOne'
//   },
//   {
//     _id: ObjectId("64ecf39584663d6e089c1963"),
//     title: 'fourth time added',
//     read_time: 15,
//     publish_date: '28/7/2023'
//   }
// ]
// new1_dataBase>
// (To exit, press Ctrl+C again or Ctrl+D or type .exit)
// new1_dataBase>

// C:\Users\nikhi>

// C:\Users\nikhi>

// C:\Users\nikhi>.exit
// '.exit' is not recognized as an internal or external command,
// operable program or batch file.

// C:\Users\nikhi>^D^D

// C:\Users\nikhi> ***************************************************************//

