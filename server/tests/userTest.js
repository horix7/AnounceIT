
process.env.NODE_ENV = 'test';

import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.should();
chai.use(chaiHttp)

const userTest = {
	"firstName": "userfirs",
	"lastName": "lastName",
	"email": "email@mail.com",
	"address": "addressser",
	"phoneNumber": "string",
	"is_admin": false,
	"password": "newassword"
}

const oneUser = {
    id: 1
}


describe('user tests', () => {
    it('user should create account with valid data', () => {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send(userTest)
        .end((err, res) => {
          res.body.status.should.be.equal("success");
          res.status.should.equal(201)
        })
    });

    it('user should sign in the system', () => {
        chai.request(app)
          .post('/api/v1/auth/signin')
          .send(userTest)
          .end((err, res) => {
            res.body.status.should.be.equal("success");
            res.status.should.equal(200)
          })
      });

      it('admin user should  get all users', () => {
        chai.request(app)
          .get('/api/v1/allusers')
          .send()
          .end((err, res) => {
            res.body.status.should.be.equal("success");
            res.status.should.equal(200)
          })
      });
      it('admin user should get one particular users', () => {
        chai.request(app)
          .get('/api/v1/oneuser')
          .send(oneUser)
          .end((err, res) => {
            res.body.status.should.be.equal("success");
            res.status.should.equal(200)
          })
      })
  })
