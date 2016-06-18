var express = require('express');
var axios = require('axios');
var router = express.Router();

router.route('/rentals')
  .get(function(req, res, next) {
    var url = 'http://api.hotwire.com/v1/search/car?apikey=kn6d52f66n2bnsydn43wq6y7&format=json&' + req._parsedUrl.query;
    axios.get(url)
      .then(function(e){
        return res.send(JSON.stringify(e.data));
      })
      .catch(next);
  });
router.get('*', function(req, res) {
  res.json({
    message: 'hooray! welcome to the api!'
  });
});
module.exports = router;
