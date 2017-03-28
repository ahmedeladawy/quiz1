
const Express = require('express');
const router = Express.Router();

const msm = [];

router.get('/', function(req, res, next){
  res.render('index.ejs')
})

router.get('/desktop', function(req, res, next){
  res.render('desktop/desktop', {tweets:'', username: ''})
})

router.post('/desktop', function (request, response) {
  const  username  = request.body.username;
  const { tweets } = request.body;
  // const { tweets = [] } = request.cookies;
  msm.push(tweets);

  response.cookie('tweet', request.body.tweets)
  response.render('desktop/desktop',  { tweets:msm,  username});
})


module.exports = router;
