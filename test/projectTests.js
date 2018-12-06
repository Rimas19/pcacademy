// process.env.NODE_ENV = 'test';

// const chai = require('chai');
// const expect = require('chai').expect;
// const chaiHtpp = require('chai-http');
// const app = require('../app');
// const CONFIG = require('../config');
// const ProjectModel = require('../models/projectModel');
// const jsdom = require('jsdom');
// const should = chai.should();

// chai.should();
// chai.use(chaiHtpp);

// describe('Project', () => {

//     beforeEach(done => {
//         ProjectModel.remove({}, err => {
//             done();
//         });
//     });

//     it('should list ALL projects', function (done) {
//         chai.request(app)
//             .get('/projects/getAll')
//             .end(function (err, res) {
//                 res.should.have.status(200);
//                 res.should.be.json;
//                 res.body.should.be.a('array');
//                 done();
//             });
//     });

//     describe('/GET projects', () => {
//         it('it should return projects list', done => {
//             chai.request(app)
//                 .get('/projects/getAll')

//                 .end((error, response) => {
//                     response.should.have.status(200);
//                     response.body.should.be.a('array');
//                     response.body.length.should.be.eql(0);
//                     done();
//                 });
//         });
//     });

//     describe('/POST project', () => {
//         it('it should POST project and retun object nor equal null', (done) => {
//             chai.request(app)
//                 .post('/projects/new')
//                 .send({
//                     projectName: "13644",
//                     projectDescription: "desc",
//                     projectAddress: {
//                         Street: "Kauno",
//                         City: "Kaunas",
//                         Code: "12365"
//                     },
//                     projectPrice: 125,
//                     projectIsActive: true
//                 })
//                 .end((err, res) => {
//                     res.should.have.status(200);
//                     res.should.have.not.eql(null);
//                     done();
//                 });
//         });
//     });

//     describe('/DELETE project', () => {
//         it('it should DELETE project and retun response equal null', (done) => {
//             chai.request(app)
//                 .get('/projects/getAll')
//                 .end((error, resp) => {
//                     chai.request(app)
//                         .delete('/projects/delete')
//                         .send({ _id: "5c0695dde5282d3a44efeda3" })
//                         .end((err, response) => {
//                             response.should.have.status(200);
//                             response.body.should.be.a('object');
//                             done();
//                         });
//                 });
//         });
//     });

//     describe('/UPDATE project', () => {
//         it('it should UPDATE project and retun updated object', (done) => {
//             chai.request(app)
//                 .put('/projects/update/?id=5c0695dde5282d3a44efeda3')
//                 .send({
//                     projectDescription: "updated project"
//                 })
//                 .end((err, response) => {
//                     response.should.have.status(200);
//                     response.body.should.be.a('object');
//                     done();
//                 });
//         });
//     });

// });