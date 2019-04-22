import MessageModel from '../models/message.js'; //'./modelmessage';

const Message = {
  //Server response to POST verb for compose message
  create(req, res) {
    if (!req.body.to && !req.body.from && !req.body.subject && !req.body.messageBody) {
      return res.status(400).send({'message': 'All fields are required'})
    }
    const currentMessage = MessageModel.create(req.body);
    return res.status(201).send(currentMessage);
  },
  
  // Server response to GET verb for listing recieved message
  viewinbox(req, res) {
    const messages = MessageModel.inbox(req.params.to);
    return res.status(200).send(messages);
  },
  
  // Server response to GET verb that lists sent messages
  viewsent(req, res) {
    const messages = MessageModel.sent(req.params.from);
    return res.status(200).send(messages);
  },

  viewOne(req, res) {
    const currentMessage = MessageModel.getOne(req.params.id);
    if (!currentMessage) {
      return res.status(404).send({'message': 'message not found'});
    }
    return res.status(200).send(currentMessage);
  },
  
  viewAll(req, res) {
    const messages = MessageModel.getAll();
    return res.status(200).send(messages);
  },
  //
    
  delete(req, res) {
    const currentMessage = MessageModel.getOne(req.params.id);
    if (!currentMessage) {
      return res.status(404).send({'message': 'message not found'});
    }
    const ref = MessageModel.delete(req.params.id);
    return res.status(204).send({'message': 'message deleted'});
  }
}

export default Message;
