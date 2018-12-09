//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    // findOneAndUpdate

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c0bed075c5c011c94b38023')
    }, {
        $set: {
            name: 'Zoltan'
        },
        $inc: {
            age: 1
        }

    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })

    //client.close();
} );

