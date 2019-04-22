import GroupModel from '../models/group.js'; //'./modelsgroup.js';


const Group = {
  //Server response to POST verb for group creation
  create(req, res) {
    if (!req.body.groupName) {
      return res.status(400).send({'message': 'Group name is required'})
    }
    const currentGroup = GroupModel.create(req.body);
    return res.status(201).send(currentGroup);
  },
  
  // Server response to GET verb for listing groups
  view(req, res) {
    const groups = GroupModel.getAll();
    return res.status(200).send(groups);
  },
  
  // Server response to GET verb that retrieves a group
  viewOne(req, res) {
    const currentGroup = GroupModel.getOne(req.params.id);
    if (!currentGroup) {
      return res.status(404).send({'message': 'group not found'});
    }
    return res.status(200).send(currentGroup);
  },
  
  // Server response to POST verb that updates group details
  update(req, res) {
    const currentGroup = GroupModel.getOne(req.params.id);
    if (!currentGroup) {
      return res.status(404).send({'message': 'group not found'});
    }
    const updatedGroup = GroupModel.update(req.params.id, req.body)
    return res.status(200).send(updatedGroup);
  },

  //
  delete(req, res) {
    const currentGroup = GroupModel.getOne(req.params.id);
    if (!currentGroup) {
      return res.status(404).send({'message': 'group not found'});
    }
    const ref = GroupModel.delete(req.params.id);
    return res.status(204).send({'message': 'group deleted'});
  }
}

export default Group;