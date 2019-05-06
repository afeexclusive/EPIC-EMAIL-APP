'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _users = require('../models/users.js');

var _users2 = _interopRequireDefault(_users);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = {
  //Server response to POST verb for user creation
  create: function create(req, res) {
    if (!req.body.firstName && !req.body.lastName && !req.body.prefEmail) {
      return res.status(400).send({ 'message': 'All fields are required' });
    }
    var currentUser = _users2.default.create(req.body);
    return res.status(201).send(currentUser);
  },
  login: function login(req, res, next) {
    var activeUser = _users2.default.login(req.body);
    if (!activeUser) {
      return res.status(404).send({ 'message': 'Invalid Email or Password' });
    }
    _jsonwebtoken2.default.sign(req.body, 'privatekey', { expiresIn: '1h' }, function (err, token) {
      res.status(201).send({'AccessToken': token});
    });
    
  },
 
  // Server response to GET verb for listing users
  view: function view(req, res) {
    var users = _users2.default.getAll();
    return res.status(200).send(users);
  },


  // Server response to GET verb that retrieves a user account
  viewOne: function viewOne(req, res) {
    var currentUser = _users2.default.getOne(req.params.prefEmail);
    if (!currentUser) {
      return res.status(404).send({ 'message': 'user not found' });
    }
    return res.status(200).send(currentUser);
  },


  // 
  update: function update(req, res) {
    var currentUser = _users2.default.getOne(req.params.prefEmail);
    if (!currentUser) {
      return res.status(404).send({ 'message': 'user not found' });
    }
    var updatedUser = _users2.default.update(req.params.prefEmail, req.body);
    return res.status(200).send(updatedUser);
  },


  //
  delete: function _delete(req, res) {
    var currentUser = _users2.default.getOne(req.params.prefEmail);
    if (!currentUser) {
      return res.status(404).send({ 'message': 'user not found' });
    }
    var ref = _users2.default.delete(req.params.prefEmail);
    return res.status(204).send({ 'message': 'user deleted' });
  }
};

exports.default = User;