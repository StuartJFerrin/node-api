var skillz = require('../skillz.js');
var secrets = require('../secrets.js');

module.exports = {

  addHeaders: function(req, res, next) {
    res.status(200).set({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'X-XSS-Protection': '1; mode=block',
      'X-Frame-Options': 'SAMEORIGIN',
      'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    });

    next();
  },
  generatedID: function(req, res, next) {
    var id = skillz.length+1;
req.body.skillz.id = id;
    next();
  },

verifyUser: function(req, res, next) {
  if (req.params.username === "user24601" && req.params.pin === "1234") {
    next();
    (res.json('Access Denied!!!'));
  }
}
}

