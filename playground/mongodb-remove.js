// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB');
  }
  console.log('Connected to MongoDB');

//delete many
// db.collection('todos').deleteMany({test: 'lunch'}).then((result) => {
//   console.log(result);
// });


//deleteOne
// db.collection('todos').deleteOne({text: 'deleteOne'}).then((result) => {
//   console.log(result);
// });

//findOneAndDelete
// db.collection('todos').findOneAndDelete({text: 'hairdresser'}).then((result) => {
//   console.log(result);
// });

//findOneAndDelete
db.collection('todos').findOneAndDelete({id: new Object("58f7be6fb5233c039cf84f06")}).then((result) => {
  console.log(JSON.stringify(result, undefined, 2));
});

//  db.close();
});
