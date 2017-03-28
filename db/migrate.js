// load the connection to our database from our conn.js
// script
const db = require('./conn');

// the method .query takes a string as the first argument
// this string represent a sql query
// here we're using to create a table named posts with
// the columns id, title and content
db.query(`
  CREATE TABLE posts (
    id SERIAL,
    title VARCHAR(255),
    content TEXT
  )
`).then(function () {
  // .then is method that takes a callback which will be run
  // after the query is complete and is successful
  console.log('🛠 Created table posts!');
  process.exit(); // process.exit() tells node to quit our program
  // we do this because otherwise, the script is going to lock our
  // terminal
}).catch(function (error) {
  // .catch is method that takes a callback which will be run
  // if the query fails for any reason
  console.error(error);
  process.exit();
})
