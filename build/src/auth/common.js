'use strict';

var jwt = require('jsonwebtoken');
var config = require('../controllers/User.js');

var checkToken = function checkToken(req, res, next) {
  var token = req.headers['authorization'] || req.headers['x-access-token']; // Express headers are auto converted to lowercase
  if (token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }

  if (token) {
    jwt.verify(token, 'privatekey', function (err, decoded) {
      if (err) {
        return res.json({
          success: false,
          message: 'Token is not valid'
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.json({
      success: false,
      message: 'Auth token is not supplied'
    });
  }
};

module.exports = {
  checkToken: checkToken
};