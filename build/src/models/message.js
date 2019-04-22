'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//This class contains the array that will hold the messages messages in objects
var Message = function () {
  function Message() {
    _classCallCheck(this, Message);

    this.messages = [];
  }

  //Making use of the construction to assign values to message properties


  _createClass(Message, [{
    key: 'create',
    value: function create(data) {
      var newMessage = {
        id: (this.messages.length + 1).toString(),
        parentId: _uuid2.default.v4(),
        to: data.to,
        from: data.from,
        subject: data.subject,
        messageBody: data.messageBody,
        status: '',
        createdOn: _moment2.default.now()
      };
      this.messages.push(newMessage); //Adds newly created object into the array
      return newMessage;
    }

    // To list a recieved messages

  }, {
    key: 'inbox',
    value: function inbox(to) {
      var recievedmsg = this.messages.filter(function (owner) {
        return owner.to === to;
      });
      return recievedmsg;
    }

    // To list sent messages

  }, {
    key: 'sent',
    value: function sent(from) {
      var sentmsg = this.messages.filter(function (sender) {
        return sender.from === from;
      });
      return sentmsg;
    }

    // To get a particular email

  }, {
    key: 'getOne',
    value: function getOne(id) {
      return this.messages.find(function (account) {
        return account.id === id;
      });
    }

    // To get all email

  }, {
    key: 'getAll',
    value: function getAll() {
      return this.messages;
    }

    // To delete or remove a message: find the message and replace/remove

  }, {
    key: 'delete',
    value: function _delete(id) {
      var currentMessage = this.getOne(id);
      var index = this.messages.indexOf(currentMessage);
      this.messages.splice(index, 1);
      return {};
    }
  }]);

  return Message;
}();

exports.default = new Message();