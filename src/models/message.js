import moment from 'moment';
import uuid from 'uuid';

//This class contains the array that will hold the messages messages in objects
class Message{
  
  constructor() {
    this.messages = [];
  }

  //Making use of the construction to assign values to message properties
  create(data) {
    const newMessage = {
      id: (this.messages.length+1).toString(),
      parentId: uuid.v4(),
      to: data.to || '',
      from: data.from || '',
      subject: data.subject || '',
      messageBody: data.messageBody || '',
      status: '',
      createdOn: moment.now()
    };
    this.messages.push(newMessage); //Adds newly created object into the array
    return newMessage;
  }

  // To list a recieved messages
  inbox(to){
    let recievedmsg = this.messages.filter(owner => {
      return owner.to === to;
    });
    return recievedmsg;
 }
  
  // To list sent messages
  
  sent(from){
    let sentmsg = this.messages.filter(sender => {
      return sender.from === from;
    });
    return sentmsg;
 }
  
  // To get a particular email
  getOne(id) {
    return this.messages.find(account => account.id === id);
  }

  // To get all email
  getAll(){
    return this.messages;
  }
  
  // To delete or remove a message: find the message and replace/remove
  delete(id) {
    const currentMessage = this.getOne(id);
    const index = this.messages.indexOf(currentMessage);
    this.messages.splice(index, 1);
    return {};
  }
}
export default new Message();