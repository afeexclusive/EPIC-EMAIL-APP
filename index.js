
import express from 'express';
import User from './src/controllers/User.js';
import Group from './src/controllers/Group.js';  
import Message from './src/controllers/Message.js';
import login from './src/auth/common.js';

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).send({'message': 'Epic email API end point'});
})

app.listen(3000)
console.log('app running on port ', 3000);

app.post('/auth/signup', User.create);
app.get('/admin/user', User.view);
app.get('/admin/user/:id', User.viewOne);
app.put('/user/:id', User.update);
app.delete('/admin/user/:id', User.delete);
app.post('/user/login', common.login)

app.post('/admin/group', Group.create);
app.get('/admin/group', Group.view);
app.get('/admin/group/:id', Group.viewOne);
app.put('/admin/group/:id', Group.update);
app.delete('/admin/group/:id', Group.delete);

app.post('/messages', Message.create);
app.get('/messages', Message.viewAll);
app.get('/messages/unread', Message.viewinbox);
app.get('/messages/sent', Message.viewsent);
app.get('/messages/:id', Message.viewOne);
app.delete('/messages/del/:id', Message.delete);
