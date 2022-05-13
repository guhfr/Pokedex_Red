const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

exports.connectMongo = async (database,collection) =>{
    await client.connect();
    //console.log("Connected successfully to server");
    const db = client.db(database);
    return db.collection(collection);
}