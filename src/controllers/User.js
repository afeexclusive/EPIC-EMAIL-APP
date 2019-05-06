import UserModel from '../models/users.js'; 
import jwt from 'jsonwebtoken';


const User = {
  //Server response to POST verb for user creation
  create(req, res) {
    if (!req.body.firstName && !req.body.lastName && !req.body.prefEmail) {
      return res.status(400).send({'message': 'All fields are required'})
    }
    const currentUser = UserModel.create(req.body);
    return res.status(201).send(currentUser);
  },

  login(req, res, next){
    const activeUser = UserModel.login(req.body)
    if(!activeUser){
      return res.status(404).send({'message':'Invalid Email or Password'});
    }
    if (!activeUser.password){
      return res.status(404).send({'message':'Invalid Password'})
    }
    jwt.sign(req.body, 'privatekey', { expiresIn: '1h' },(err, token) => {
      return res.status(200).send({'AccessToken':token});
    });
    
  },



  // Server response to GET verb for listing users
  view(req, res) {
    const users = UserModel.getAll();
    return res.status(200).send(users);
  },
  
  // Server response to GET verb that retrieves a user account
  viewOne(req, res) {
    const currentUser = UserModel.getOne(req.params.prefEmail);
    if (!currentUser) {
      return res.status(404).send({'message': 'user not found'});
    }
    return res.status(200).send(currentUser);
  },
  
  // 
  update(req, res) {
    const currentUser = UserModel.getOne(req.params.prefEmail);
    if (!currentUser) {
      return res.status(404).send({'message': 'user not found'});
    }
    const updatedUser = UserModel.update(req.params.prefEmail, req.body)
    return res.status(200).send(updatedUser);
  },

  //
  delete(req, res) {
    const currentUser = UserModel.getOne(req.params.prefEmail);
    if (!currentUser) {
      return res.status(404).send({'message': 'user not found'});
    }
    const ref = UserModel.delete(req.params.prefEmail);
    return res.status(204).send({'message': 'user deleted'});
  }
}

export default User;