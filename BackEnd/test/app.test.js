const chai = require('chai');
let assert = chai.assert;
let should = chai.should();
let expect = chai.expect;
const chaiaspromised = require('chai-as-promised');
chai.use(chaiaspromised);
const chaiHttp = require('chai-http');
chai.use(chaiHttp);


const server = require('../app');
const { response } = require('express');


describe('BLOG APIs', function () {
  // checking that get request for getting all blog is working properly
  it('getAllYoga aasans', function (done) {
    this.timeout(0);
    chai
      .request(server)
      .get('/yoga')
      //.set('Authorization', 'Bearer ' + token)
      .end((err, res) => {
        // res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

  it('Create a new blog', function () {
    chai
      .request(server)
      .post('/blog/createpost')
      .send({
        "title": "Exercise",
        "content":"DO Exercise daily .",
        "author":"Happy Kumar"
      })

  });
  it('Create a new USER account', function () {
    chai
      .request(server)
      .post('/auth/signup')
      .send({
        "name": "Happyk",
        "password":"acsdw",
        "email":"pqr@gmail.com"
      })

  });
  it('Checking Existing User can LOGIN OR not', function () {
    chai
      .request(server)
      .post('/auth/login')
      .send({
        "password":"acsdw",
        "email":"pqr@gmail.com"
      })

  });





  

});