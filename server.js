const express = require('express')
const app = express()
var http = require('http');


app.set('view-engine', 'ejs')

app.use(express.static(__dirname + '/public'))

app.use(express.urlencoded({ extended: false }))



app.get('/filter', (req, res) => {
  res.render('filter.ejs')
})

app.get('/collect', (req, res) => {
  res.render('collect.ejs')
})

app.get('/about', (req, res) => {
  res.render('about.ejs')
})

app.get('/recycling', (req, res) => {
  res.render('recycling.ejs')
})


let TrashList = [];


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

var axios = require('axios');
var data = JSON.stringify({
    "collection": "ReCycleBase",
    "database": "TrashList",
    "dataSource": "ReCycle",
    "projection": {
        "_id": 1
    }
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-lotli/endpoint/data/beta/action/findOne',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': "UnQbIgRCTTiX2IQmed9H1KafVywPCQ6EbL5YLqLDnzH6Mn0GkvR6G5U6JlSEY3Yb"
    },
    data : data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });


app.listen(3300)
