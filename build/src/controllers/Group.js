'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _group = require('../models/group.js');

var _group2 = _interopRequireDefault(_group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//'./modelsgroup.js';


var Group = {
  //Server response to POST verb for group creation
  create: function create(req, res) {
    if (!req.body.groupName) {
      return res.status(400).send({ 'message': 'Group name is required' });
    }
    var currentGroup = _group2.default.create(req.body);
    return res.status(201).send(currentGroup);
  },


  // Server response to GET verb for listing groups
  view: function view(req, res) {
    var groups = _group2.default.getAll();
    return res.status(200).send(groups);
  },


  // Server response to GET verb that retrieves a group
  viewOne: function viewOne(req, res) {
    var currentGroup = _group2.default.getOne(req.params.id);
    if (!currentGroup) {
      return res.status(404).send({ 'message': 'group not found' });
    }
    return res.status(200).send(currentGroup);
  },


  // Server response to POST verb that updates group details
  update: function update(req, res) {
    var currentGroup = _group2.default.getOne(req.params.id);
    if (!currentGroup) {
      return res.status(404).send({ 'message': 'group not found' });
    }
    var updatedGroup = _group2.default.update(req.params.id, req.body);
    return res.status(200).send(updatedGroup);
  },


  //
  delete: function _delete(req, res) {
    var currentGroup = _group2.default.getOne(req.params.id);
    if (!currentGroup) {
      return res.status(404).send({ 'message': 'group not found' });
    }
    var ref = _group2.default.delete(req.params.id);
    return res.status(204).send({ 'message': 'group deleted' });
  }
};

exports.default = Group;