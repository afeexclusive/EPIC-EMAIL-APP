'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _message = require('../models/message.js');

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//'./modelmessage';

var Message = {
  //Server response to POST verb for compose message
  create: function create(req, res) {
    if (!req.body.to && !req.body.from && !req.body.subject && !req.body.messageBody) {
      return res.status(400).send({ 'message': 'All fields are required' });
    }
    var currentMessage = _message2.default.create(req.body);
    return res.status(201).send(currentMessage);
  },


  // Server response to GET verb for listing recieved message
  viewinbox: function viewinbox(req, res) {
    var messages = _message2.default.inbox(req.params.to);
    return res.status(200).send(messages);
  },


  // Server response to GET verb that lists sent messages
  viewsent: function viewsent(req, res) {
    var messages = _message2.default.sent(req.params.from);
    return res.status(200).send(messages);
  },
  viewOne: function viewOne(req, res) {
    var currentMessage = _message2.default.getOne(req.params.id);
    if (!currentMessage) {
      return res.status(404).send({ 'message': 'message not found' });
    }
    return res.status(200).send(currentMessage);
  },
  viewAll: function viewAll(req, res) {
    var messages = _message2.default.getAll();
    return res.status(200).send(messages);
  },

  //

  delete: function _delete(req, res) {
    var currentMessage = _message2.default.getOne(req.params.id);
    if (!currentMessage) {
      return res.status(404).send({ 'message': 'message not found' });
    }
    var ref = _message2.default.delete(req.params.id);
    return res.status(204).send({ 'message': 'message deleted' });
  }
};

exports.default = Message;