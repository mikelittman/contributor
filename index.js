var express = require('express');
var app = express();
var router = express.Router();


app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/build'));



router.route('/news')
  .get(function (req, res, next) {
    res.send('got eem');
  });


app.use('/api', router);

app.listen(app.get('port'), function () {
  console.info('App has started');
});
