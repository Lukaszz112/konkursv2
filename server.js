const TrashList = [];


const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://ReCycleMan:zaq1%40WSX@recycle.lonnt.mongodb.net/TrashList?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {

  try {

    await client.connect();

    const database = client.db("TrashList");

    const trash = database.collection("ReCycleBase");

    // query for movies that have a runtime less than 15 minutes

    const query = {};

    const options = {

      projection: { _id: 0, Item: 1, trashType: 1 },

    };

    const cursor = trash.find(query, options);

    // print a message if no documents were found

    if ((await cursor.count()) === 0) { 

      console.log("No documents found!");

    }

    // replace console.dir with your callback to access individual elements
    TrashList = [];
    // await cursor.forEach(console.dir);
    await cursor.forEach(function listItems(x){
      console.log(x)
      TrashList.push(x)
    })

  } finally {

    await client.close();

  }

}

run().catch(console.dir);

// async function run() {
//   try {
//     // Connect the client to the server
//     await client.connect();
//     // Establish and verify connection
//     await client.db("admin").command({ ping: 1 }); 
//     console.log("Connected successfully to server");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);



app.get('/trashList', (req, res) => {
        
TrashList = []
  
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://ReCycleMan:zaq1%40WSX@recycle.lonnt.mongodb.net/TrashList?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {

  try {

    await client.connect();

    const database = client.db("TrashList");

    const trash = database.collection("ReCycleBase");

    // query for movies that have a runtime less than 15 minutes

    const query = {};

    const options = {

      projection: { _id: 0, Item: 1, trashType: 1 },

    };

    const cursor = trash.find(query, options);

    // print a message if no documents were found

    if ((await cursor.count()) === 0) { 

      console.log("No documents found!");

    }

    // replace console.dir with your callback to access individual elements
    TrashList = [];
    // await cursor.forEach(console.dir);
    await cursor.forEach(function listItems(x){
      TrashList.push(x)
    })
     

  } finally {
    

    await client.close();
    
  }
  
 

}

async function showList(){
 
try {  
 await run().catch();
} finally { 
res.render('trash.ejs', {uri: uri, client: client, TrashList: TrashList, run: run()})
}
}
  
  showList();
  
}
)


app.listen(3000)