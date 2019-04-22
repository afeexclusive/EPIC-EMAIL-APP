'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _User = require('./src/controllers/User.js');

var _User2 = _interopRequireDefault(_User);

var _Group = require('./src/controllers/Group.js');

var _Group2 = _interopRequireDefault(_Group);

var _Message = require('./src/controllers/Message.js');

var _Message2 = _interopRequireDefault(_Message);

var _common = require('./src/auth/common.js');

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.json());

app.get('/', function (req, res) {
  return res.status(200).send({ 'message': 'Epic email API end point' });
});

module.exports = app.listen(3000);
console.log('app running on port ', 3000);

app.post('/auth/signup', _User2.default.create);
app.get('/admin/user', _User2.default.view);
app.get('/admin/user/:id', _User2.default.viewOne);
app.put('/user/:id', _common2.default.checkToken, _User2.default.update);
app.delete('/admin/user/:id', _User2.default.delete);
app.post('/user/login', _User2.default.login);

app.post('/admin/group', _Group2.default.create);
app.get('/admin/group', _Group2.default.view);
app.get('/admin/group/:id', _Group2.default.viewOne);
app.put('/admin/group/:id', _Group2.default.update);
app.delete('/admin/group/:id', _Group2.default.delete);

app.post('/messages', _common2.default.checkToken, _Message2.default.create);
app.get('/messages', _Message2.default.viewAll);
app.get('/messages/unread/:to', _common2.default.checkToken, _Message2.default.viewinbox);
app.get('/messages/sent/:from', _common2.default.checkToken, _Message2.default.viewsent);
app.get('/messages/:id', _common2.default.checkToken, _Message2.default.viewOne);
app.delete('/messages/del/:id', _common2.default.checkToken, _Message2.default.delete);
