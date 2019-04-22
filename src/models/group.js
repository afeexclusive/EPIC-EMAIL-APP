import moment from 'moment';
import uuid from 'uuid';

class Group{
  
  constructor() {
    this.groups = [];
  }

  //Making use of the construction to assign values to groups properties
  create(data) {
    const newGroup = {
      id: (this.groups.length+1).toString(),
      groupName: data.groupName || '',
      createdOn: moment.now(),
      modifiedOn: moment.now()
    };
    this.groups.push(newGroup); //Adds newly created object into the array
    return newGroup;
  }
  // To list a single groups
  getOne(id) {
    return this.groups.find(account => account.id === id);
  }
  
  // To list all groups
  getAll() {
    return this.groups;
  }
   //To modify groups account details when necessary
  update(id, data) {
    const currentGroup = this.getOne(id);
    const index = this.groups.indexOf(currentGroup);
    this.groups[index].groupName = data['groupName'] || currentUser.groupName;
    this.groups[index].modifiedDate = moment.now()
    return this.groups[index];
  }
  // To delete or remove a groups: find the groups and replace/remove
  delete(id) {
    const currentGroup = this.getOne(id);
    const index = this.groups.indexOf(currentGroup);
    this.groups.splice(index, 1);
    return {};
  }
}

export default new Group();