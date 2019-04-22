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

//This class contains the array that will hold the groups groups in objects
var User = function () {
  function User() {
    _classCallCheck(this, User);

    this.users = [];
  }

  //Making use of the construction to assign values to groups properties


  _createClass(User, [{
    key: 'create',
    value: function create(data) {
      var newUser = {
        id: (this.users.length + 1).toString(),
        firstName: data.firstName || '',
        lastName: data.lastName || '',
        prefEmail: data.prefEmail || '',
        password: data.password || '',
        phone: data.phone || '',
        dateOfBirth: data.dateOfBirth || '',
        gender: data.gender || '',
        createdDate: _moment2.default.now(),
        modifiedDate: _moment2.default.now()
      };
      this.users.push(newUser); //Adds newly created object into the array
      return newUser;
    }
    // To list a single groups

  }, {
    key: 'getOne',
    value: function getOne(id) {
      return this.users.find(function (account) {
        return account.id === id;
      });
    }

    // To list all groups

  }, {
    key: 'getAll',
    value: function getAll() {
      return this.users;
    }
    //To modify groups account details when necessary

  }, {
    key: 'update',
    value: function update(id, data) {
      var currentUser = this.getOne(id);
      var index = this.users.indexOf(currentUser);
      this.users[index].firstName = data['firstName'] || currentUser.firstName;
      this.users[index].lastName = data['lastName'] || currentUser.lastName;
      this.users[index].prefEmail = data['prefEmail'] || currentUser.prefEmail;
      this.users[index].password = data['password'] || currentUser.password;
      this.users[index].phone = data['phone'] || currentUser.phone;
      this.users[index].dateOfBirth = data['dateOfBirth'] || currentUser.dateOfBirth;
      this.users[index].modifiedDate = _moment2.default.now();
      this.users[index].gender = data['gender'] || currentUser.gender;
      return this.users[index];
    }
    // To delete or remove a groups: find the groups and replace/remove

  }, {
    key: 'delete',
    value: function _delete(id) {
      var currentUser = this.getOne(id);
      var index = this.users.indexOf(currentUser);
      this.users.splice(index, 1);
      return {};
    }
  }]);

  return User;
}();

exports.default = new User();