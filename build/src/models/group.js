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

var Group = function () {
  function Group() {
    _classCallCheck(this, Group);

    this.groups = [];
  }

  //Making use of the construction to assign values to groups properties


  _createClass(Group, [{
    key: 'create',
    value: function create(data) {
      var newGroup = {
        id: (this.groups.length+1).toString(),
        groupName: data.groupName || '',
        createdOn: _moment2.default.now(),
        modifiedOn: _moment2.default.now()
      };
      this.groups.push(newGroup); //Adds newly created object into the array
      return newGroup;
    }
    // To list a single groups

  }, {
    key: 'getOne',
    value: function getOne(id) {
      return this.groups.find(function (account) {
        return account.id === id;
      });
    }

    // To list all groups

  }, {
    key: 'getAll',
    value: function getAll() {
      return this.groups;
    }
    //To modify groups account details when necessary

  }, {
    key: 'update',
    value: function update(id, data) {
      var currentGroup = this.getOne(id);
      var index = this.groups.indexOf(currentGroup);
      this.groups[index].groupName = data['groupName'] || currentGroup.groupName;
      this.groups[index].modifiedDate = _moment2.default.now();
      return this.groups[index];
    }
    // To delete or remove a groups: find the groups and replace/remove

  }, {
    key: 'delete',
    value: function _delete(id) {
      var currentGroup = this.getOne(id);
      var index = this.groups.indexOf(currentGroup);
      this.groups.splice(index, 1);
      return {};
    }
  }]);

  return Group;
}();

exports.default = new Group();