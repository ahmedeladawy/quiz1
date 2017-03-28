// when we require pg-promise, we get a function return that
// can be configured by passing an argument
// we'll use default configuration therefore will call with no
// arguments
const pgp = require('pg-promise')();

// use pgp to establish a connection our postgres db
// it takes an object to tell it where to find our db
const db = pgp({
    host: 'localhost',
    database: 'ned'
})

// when we require this file in the future, we'll
// the db connection that we setup here
module.exports = db;
