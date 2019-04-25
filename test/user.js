//Set environment to test
process.env.NODE_ENV = 'test';

let User = require('../src/models/users.js');
let Group = require('../src/models/group.js')
let Checktoken = require('../src/auth/common.js')

//the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();


chai.use(chaiHttp);
describe('User', () => {
    // Test the /GET route 
  describe('/GET user', () => {
      it('it should GET all the users', (done) => {
        chai.request(server)
            .get('/admin/user')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(0);
              done();
            });
      });
      it('it should NOT GET one user without id', (done) => {
        let newUser = {
          firstName: 'Afe',
          lastName: 'Ayokunle',
          prefEmail: 'ay@epicmail.com',
          password: 'jubille',
          phone: '09077657657',
          dateOfBirth: '12/6/90',
          gender:  'male'
        }
        chai.request(server)
          .get('/admin/user/'+ User.id)
          .send(newUser)
          .end((err, res) => {
                res.should.have.status(404);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('user not found');
            done();
          });
      });
      it('it should GET one user', (done) => {
        let newUser ={
          firstName: 'Afe',
          lastName: 'Ayokunle',
          prefEmail: 'ay@epicmail.com',
          password: 'jubille',
          phone: '09077657657',
          dateOfBirth: '12/6/90',
          gender:  'male'
        };
        chai.request(server)
          .get('/admin/user/' + User.id)
          .send(newUser)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('firstName');
                res.body.should.have.property('lastName');
                res.body.should.have.property('prefEmail');
                res.body.should.have.property('password');
                res.body.should.have.property('phone');
                res.body.should.have.property('dateOfBirth');
                res.body.should.have.property('gender');
                res.body.should.have.property('id').eql(User.id)
            done();
          });
        });
  });
  describe('/POST user', () => {
    it('it should not POST a user:All fields are required', (done) => {
          let newUser = {
              password: 'jubille',
              phone: '09077657657',
              dateOfBirth: '12/6/90',
              gender:  'male'
          }
        chai.request(server)
            .post('/auth/signup')
            .send(newUser)
            .end((err, res) => {
                  res.should.have.status(400);
                  res.body.should.be.a('object');
                  res.body.should.have.property('message').eql('All fields are required')
              done();
            });
    });
    it('it should POST a user ', (done) => {
          let newUser = {
              firstName: 'Afe',
              lastName: 'Ayokunle',
              prefEmail: 'ay@epicmail.com',
              password: 'jubille',
              phone: '09077657657',
              dateOfBirth: '12/6/90',
              gender:  'male'
          }
        chai.request(server)
            .post('/auth/signup')
            .send(newUser)
            .end((err, res) => {
                  res.should.have.status(201);
                  res.body.should.be.a('object');
                  res.body.should.have.property('firstName');
                  res.body.should.have.property('lastName');
                  res.body.should.have.property('prefEmail');
                  res.body.should.have.property('password');
                  res.body.should.have.property('phone');
                  res.body.should.have.property('dateOfBirth');
                  res.body.should.have.property('gender');
                  
              done();
            });
      });
  });

  describe('/LOGIN user', () => {
    it('it should NOT login a user with wrong email or password', (done) => {
          let loginCredential = {
              password: '',
              prefEmail: ''
            }
        chai.request(server)
            .post('/user/login')
            .send(loginCredential)
            .end((err, res) => {
                  res.should.have.status(404);
                  res.body.should.be.a('object');
                  res.body.should.have.property('message').eql('Invalid Email or Password')
              done();
            });
      });
      it('it should login a user with correct email and password', (done) => {
        let newUser = {
          firstName: 'Afe',
          lastName: 'Ayokunle',
          prefEmail: 'ay@epicmail.com',
          password: 'jubille',
          phone: '09077657657',
          dateOfBirth: '12/6/90',
          gender:  'male'
      }
        let loginCredential = {
            password: 'jubille',
            prefEmail: 'ay@epicmail.com'
          }
        chai.request(server)
          .post('/user/login')
          .send(newUser, loginCredential)
          .end((err, res) => {
                res.should.have.status(201);
                res.body.should.be.a('object');
                res.body.should.have.property('AccessToken');
            done();
          });
        });  
        it('it should POST a message', (done) => {
          let newMessage = {
            to: 'afek',
            from: 'ayo',
            subject: 'Hello',
            messageBody: 'Thank God for today'
            }
          
          chai.request(server)
          .post('/messages', Message.create)
          .send(newMessage,)
          .end((err, res) => {
            res.should.have.status(201);
            res.body.should.be.a('object');
            res.body.should.have.property('to');
            res.body.should.have.property('from');
            res.body.should.have.property('subject');
            res.body.should.have.property('messageBody');
            res.body.should.have.property('status');
            done();
          });
        });

  });
  describe('/POST Group', () => {
    it('it should not POST a group: Name field is required', (done) => {
          let newGroup = {
              noGroupName: 'jubille'
          }
        chai.request(server)
            .post('/admin/group')
            .send(newGroup)
            .end((err, res) => {
                  res.should.have.status(400);
                  res.body.should.be.a('object');
                  res.body.should.have.property('message').eql('Group name is required')
              done();
            });
    });
    it('it should POST a Group', (done) => {
          let newGroup = {
              groupName: 'Love'
          }
        chai.request(server)
            .post('/admin/group')
            .send(newGroup)
            .end((err, res) => {
                  res.should.have.status(201);
                  res.body.should.be.a('object');
                  res.body.should.have.property('groupName');
                  res.body.should.have.property('createdOn');
                  res.body.should.have.property('modifiedOn');
              done();
            });
    });
    it('it should GET all the Groups', (done) => {
      chai.request(server)
          .get('/admin/group')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(1); // To make array length equals zero it has to be in a new describe block
            done();
          });
    });
  });

  describe('/Messages', () => {
    it('it should GET a message', (done) => {
      chai.request(server)
      .get('/messages')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(0);
        done();
      });
    });
  });
});