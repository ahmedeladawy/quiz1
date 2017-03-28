
const PORT = 5001;
const colors = require('colors');
const path =  require('path');
const Express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


const home = require('./routes/home');
const app = Express();


app.set('view engine', 'ejs');

app.use(logger('dev'));


app.use(Express.static(path.join(__dirname, 'public')));

app.use(cookieParser());

app.use(function (req, res, next) {

  if (!req.cookies.luckyNumber) {

    res.cookie('luckyNumber', Math.floor(Math.random() * 100), { maxAge: 86400000});
  }


  res.cookie('things',['Mouse', 'Pen', 'Bow', 'Dagger']);

  console.log('🤔', req.cookies.things);

  next();
})


app.use(bodyParser.urlencoded({extended: false}));

app.get('/hello-world', function (request, response, next) {


  response.send('Hello World!')
})

app.use('/', home);


app.listen(PORT, function () {
  console.log(`Server listening on http://localhost:${PORT}...`)
});














/* */
