// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB');
  }
  console.log('Connected to MongoDB');

// db.collection('todos').find().count().then((count) => {
//   console.log(`Todos: ${count}`);
// }, (err) => {
//   console.log('unable to fetch todos', err);
// });

db.collection('users').find().count().then((count) => {
  console.log(`Users: ${count}`);
}, (err) => {
  console.log('unable to fetch todos', err);
});

  db.close();
});
