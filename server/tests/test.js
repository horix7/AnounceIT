
process.env.NODE_ENV = 'test';

import { should, use, request } from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

should();


use(chaiHttp);

const announcementTestOne = {
	"text": "addressser"
}

const changeAnounce = {
  "status": 'pending'
}

  describe('anouncement test', () => {
  
      it('User should create an anouncement ', () => {
        request(app)
          .post('/api/v1/announcement')
          .send(announcementTestOne)
          .end((err, res) => {
            res.status.should.be.equal(401);
          });
      });

      it('user should update the anouncement', () => {
        request(app)
          .put('/api/v1/anouncement/1')
          .send()
          .end((err, res) => {
            res.status.should.be.equal(401);
          });
      });

      it('should allow a user to view all announcement details', () => {
        request(app)
          .get('/api/v1/announcements')
          .send()
          .end((err, res) => {
            res.body.status.should.be.equal('error');
            res.status.should.be.equal(401);
          });
      });

      it('should get one anouncement by id', () => {
        request(app)
          .get(`/api/v1/announcement/1`)
          .send()
          .end((err, res) => {
            res.body.status.should.be.equal('success');
            res.status.should.be.equal(200);
          });
      });
      it('can delet by the id', () => {
        request(app)
          .delete(`/api/v1/announcement/1`)
          .send()
          .end((err, res) => {
            res.body.status.should.be.equal('error');
            res.status.should.be.equal(403);
          });
      });

  });
