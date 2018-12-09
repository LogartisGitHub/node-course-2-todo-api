//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    // deleteMany
//    db.collection('Users').deleteMany({name: 'Zoltan'}).then((result) =>{
//        console.log(result);
//    });

    // deleteOne
//    db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) =>{
//        console.log(result);
//    });

    // findOneAndDelete
    
     db.collection('Users').findOneAndDelete({_id: new ObjectID('5c0bed93d2527932f8012cc3')}).then((result) =>{
         console.log(result);
     });

    //client.close();
} );

