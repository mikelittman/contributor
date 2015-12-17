var express = require('express');
var app = express();
var router = express.Router();
var embedly = require('embedly');
var bodyParser = require('body-parser');


app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/build'));
app.use(bodyParser.json());



router.route('/news')
  .get(function (req, res, next) {
    res.send('got eem');
  });

router.route('/story/:id')
  .get(function (req, res, next) {

  });

router.route('/story/preview')
  .post(function (req, res, next) {
    var storyUrl = req.data.url;
  });

router.route('/story')
  .post(function (req, res, next) {
    var storyUrl = req.data.url;
  });


app.use('/api', router);

app.listen(app.get('port'), function () {
  console.info('App has started');
});
