// process.env.NODE_ENV = 'test';
// const chai = require('chai');
// const chaiHtpp = require('chai-http');
// const app = require('../app');
// const ProjectModel = require('../models/projectModel');
// const should = require('chai').should();
// chai.should();
// chai.use(chaiHtpp);

// mongoose = require('mongoose');
// mongoose.set('useCreateIndex', true);

// describe('Project', () => {
//     beforeEach((done) => {
//         let newProject = new ProjectModel({
//             projectName: "P1",
//             projectDescription: "desc",
//             projectAddress: {
//                 Street: "Kauno g.5",
//                 City: "Kaunas",
//                 Code: "12365"
//             },
//             projectPrice: 125,
//             projectIsActive: true
//         });

//         let newProject1 = new ProjectModel({
//             projectName: "P2",
//             projectDescription: "desc",
//             projectAddress: {
//                 Street: "Vilniaus g.9",
//                 City: "Vilnius",
//                 Code: "12365"
//             },
//             projectPrice: 200,
//             projectIsActive: true
//         });
//         newProject.save((err) => {
//             if (err) {
//                 console.log('Error on save new Project :', err);
//             }
//         });
//         newProject1.save((err) => {
//             if (err) {
//                 console.log('Error on save new Project :', err);
//             }
//             done();
//         });
//     });

//     afterEach((done) => {
//         ProjectModel.collection.drop().then(function () {
//             done();
//         }).catch(function () {
//             // error handling
//         })
//     });

//     // //--- Test - 1 OK
//     it(' Project Test-1  should return status 200  ', (done) => {
//         chai.request(app)
//             .get('/projects/getAll')
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 done();
//             })
//     });

//     // //--- Test-2  OK
//     it(' Project Test-2 should Project to have requared data (_id, projectName, projectPrice  and etc.)', (done) => {
//         chai.request(app)
//             .get('/projects/getAll')
//             .end((err, response) => {
//                 chai.request(app)
//                     .get('/projects/' + response.body[0]._id)
//                     .end((err, res) => {
//                         res.should.have.status(200);
//                         const project = response.body[0];
//                         project._id.should.eql(response.body[0]._id);
//                         project.should.have.property('_id');
//                         project.should.have.property('projectName');
//                         project.projectName.should.eql('P1');
//                         project.projectPrice.should.not.eql(0);
//                         project.projectAddress.Street.should.not.eql(null);
//                         project.projectAddress.City.should.not.eql(null);
//                         done();
//                     });
//             });
//     });

//     // //--- Test-3 
//     it(' Project Test-3 should return list of projects', (done) => {
//         chai.request(app)
//             .get('/projects/getAll')
//             .end((err, res) => {
//                 const projects = res.body;
//                 res.should.have.status(200);
//                 projects.should.be.a('array');
//                 projects.length.should.be.eql(2);
//                 done();
//             });
//     });

//     // //-- Test-4
//     it(' Project Test-4 should add a new project ', (done) => {
//         chai.request(app)
//             .post('/projects/new')
//             .send({
//                 projectName: "P3",
//                 projectDescription: "desc",
//                 projectAddress: {
//                     Street: "Prienu g.7",
//                     City: "Prienai",
//                     Code: "12365"
//                 },
//                 projectPrice: 300,
//                 projectIsActive: true
//             })
//             .end((err, res) => {
//                 chai.request(app)
//                     .get('/projects/getAll')
//                     .end((err, response) => {
//                         res.should.have.status(200);
//                         const project = response.body[((response.body.length) - 1)];
//                         project._id.should.eql(response.body[((response.body.length) - 1)]._id);
//                         project.should.have.property('_id');
//                         project.should.have.property('projectName');
//                         project.projectName.should.eql('P3');
//                         project.projectPrice.should.not.equal(((response.body.length) - 1));
//                         project.projectAddress.Street.should.not.eql(null);
//                         project.projectAddress.City.should.not.eql(null);
//                         done();
//                     });
//             });
//     });

//     // // //--- Test-5
//     it(' Project Test-5 should update a projectNamme', (done) => {
//         chai.request(app)
//             .get('/projects/getAll')
//             .end((err, response) => {
//                 chai.request(app)
//                     .put('/projects/update/?id=' + response.body[1]._id)
//                     .send({ projectName: "P1 updated" })
//                     .end((err, res) => {
//                         chai.request(app)
//                             .get('/projects/getAll')
//                             .end((err, response) => {
//                                 should.not.exist(err);
//                                 response.should.have.status(200);
//                                 const project = response.body[1]
//                                 project.projectName.should.be.eql("P1 updated")
//                                 done();
//                             });
//                     });
//             });
//     });

//     // // --- Teast-6
//     it(' Poject Test-6 should delete a project', (done) => {
//         chai.request(app)
//             .get('/projects/getAll')
//             .end((err, response) => {
//                 chai.request(app)
//                     .get('/projects/' + response.body[((response.body.length) - 1)]._id)
//                     .end((err, res) => {
//                         chai.request(app)
//                             .delete('/projects/delete/?id=' + response.body[((response.body.length) - 1)]._id)
//                             .end((error, res) => {
//                                 const project = res.body;
//                                 res.should.have.status(200);
//                                 chai.request(app)
//                                     .get('/projects/' + response.body[((response.body.length) - 1)]._id)
//                                     .end((err, respo) => {
//                                         respo.should.have.status(200);
//                                         const project = respo.body
//                                         project.should.be.eql({});
//                                     });
//                                 done();
//                             });
//                     });
//             });
//     });

// })
