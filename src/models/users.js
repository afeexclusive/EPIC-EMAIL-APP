import moment from 'moment';
import uuid from 'uuid';
import jwt from 'jsonwebtoken';

//This class contains the array that will hold the groups groups in objects
class User{
  
  constructor() {
    this.users = [];
  }

  //Making use of the construction to assign values to groups properties
  create(data) {
    const newUser = {
      id: (this.users.lenght+1).toString(),
      firstName: data.firstName || '',
      lastName: data.lastName || '',
      prefEmail: data.prefEmail || '',
      password: data.password || '',
      phone: data.phone || '',
      dateOfBirth: data.dateOfBirth || '',
      gender: data.gender || '',
      createdDate: moment.now(),
      modifiedDate: moment.now()
    };
    this.users.push(newUser); //Adds newly created object into the array
    return newUser;
  }

  validate(prefEmail){
    return this.users.find(account => account.prefEmail === prefEmail);
  }

  login(data){
    const body = {
      prefEmail: data.prefEmail,
      password: data.password
    };
    const activeUser = this.validate(prefEmail) || '';
    if(password === activeUser.password){
      return activeUser;
    }
  }

  // To list a single groups
  getOne(id) {
  	return this.users.find(account => account.id === id);
  }
  
  // To list all groups
  getAll() {
    return this.users;
  }
   //To modify groups account details when necessary
  update(id, data) {
    const currentUser = this.getOne(id);
    const index = this.users.indexOf(currentUser);
    this.users[index].firstName = data['firstName'] || currentUser.firstName;
    this.users[index].lastName = data['lastName'] || currentUser.lastName;
    this.users[index].prefEmail = data['prefEmail'] || currentUser.prefEmail;
    this.users[index].password = data['password'] || currentUser.password;
    this.users[index].phone = data['phone'] || currentUser.phone;
    this.users[index].dateOfBirth = data['dateOfBirth'] || currentUser.dateOfBirth;
    this.users[index].modifiedDate = moment.now()
    this.users[index].gender = data['gender'] || currentUser.gender;
    return this.users[index];
  }
  // To delete or remove a groups: find the groups and replace/remove
  delete(id) {
    const currentUser = this.getOne(id);
    const index = this.users.indexOf(currentUser);
    this.users.splice(index, 1);
    return {};
  }
}

export default new User();