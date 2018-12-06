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

//     //--- Test - 1 OK
//     it(' Project Test-1  should return status 200  ', (done) => {
//         chai.request(app)
//             .get('/projects/getAll')
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 done();
//             })
//     });

//     //--- Test-2  OK
//     it(' Project Test-2 should Project to have requared data (_id, projectName, projectPrice  and etc.)', (done) => {
//         chai.request(app)
//             .get('/projects/getAll')
//             .end((err, response) => {
//                 chai.request(app)
//                     .get('/projects/' + response.body[0]._id)
//                     .end((err, res) => {
//                         res.should.have.status(200);
//                         const project = response.body[0];
//                         project._id.should.equal(response.body[0]._id);
//                         project.should.have.property('_id');
//                         project.should.have.property('projectName');
//                         project.projectName.should.equal('P1');
//                         project.projectPrice.should.not.equal(0);
//                         project.projectAddress.Street.should.not.equal(null);
//                         project.projectAddress.City.should.not.equal(null);
//                         done();
//                     });
//             });
//     });

//     //--- Test-3 
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

//     //-- Test-4
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
//                                  res.should.have.status(200);
//                                 const project = response.body[((response.body.length) - 1)];
//                                 project._id.should.equal(response.body[((response.body.length) - 1)]._id);
//                                 project.should.have.property('_id');
//                                 project.should.have.property('projectName');
//                                 project.projectName.should.equal('P3');
//                                 project.projectPrice.should.not.equal(((response.body.length) - 1));
//                                 project.projectAddress.Street.should.not.equal(null);
//                                 project.projectAddress.City.should.not.equal(null);
//                                 done();
//                             });
//             });
//     });

//     // //--- Test-5
//     it(' Project Test-5 should update a projectNamme', (done) =>{
//         chai.request(app)
//             .get('/projects/getAll')
//             .end( (err, response)=> {
//                 chai.request(app)
//                     .put('/projects/update/?id=' + response.body[1]._id)
//                     .send({ projectName: "P1 updated" })
//                     .end((err, res) => {
//                         chai.request(app)
//                         .get('/projects/getAll')
//                         .end( (err, response)=> {
//                         should.not.exist(err);
//                         response.should.have.status(200);
//                         const project = response.body[1]
//                         project.projectName.should.be.equal("P1 updated")
//                          done();
//                     });
//                 });
//             });
//     });

//     // --- Teast-6
//     it(' Project Test-6 should delete a project', (done)=> {
//         chai.request(app)
//             .get('/projects/getAll')
//             .end( (err, response) =>{
//                 chai.request(app)
//                     .get('/projects/' + response.body[((response.body.length) - 1)]._id)
//                     .end((err, res) => {
//                         chai.request(app)
//                             .delete('/projects/delete/?id=' + response.body[((response.body.length) - 1)]._id)
//                             .end( (error, res) =>{
//                                 const project = res.body;
//                                 res.should.have.status(200);
//                                 chai.request(app)
//                                     .get('/projects/' + response.body[((response.body.length) - 1)]._id)
//                                     .end((err, respo) => {
//                                         respo.should.have.status(200);
//                                         const project = respo.body
//                                         project.body.should.be.equal(null);
//                                     });
//                                 done();
//                             });
//                     });
//             });
//     });

// })

// describe('Customer', () => {
//     beforeEach((done) => {
//         let newCustomer = new CustomerModel({
//             customerName: "Customer-1",
//             customerAddress: {
//                 Street: "Kauno g.5",
//                 City: "Kaunas",
//                 Code: "12365"
//             },
//             customerCode:123466,
//             customerVATCode: "LT123456",
//             customerIsActive: true
//         });

//         let newCustomer1 = new CustomerModel({
//             customerName: "Customer-2",
//             customerAddress: {
//                 Street: "Kauno g.5",
//                 City: "Kaunas",
//                 Code: "12365"
//             },
//             customerCode:123466,
//             customerVATCode: "LT123456",
//             customerIsActive: true
//         });
//         newCustomer.save((err) => {
//             if (err) {
//                 console.log('Error on save new object :', err);
//             }
//         });
//         newCustomer1.save((err) => {
//             if (err) {
//                 console.log('Error on save new object :', err);
//             }
//             done();
//         });
//     });

//     afterEach((done) => {
//         CustomerModel.collection.drop().then(function () {
//             done();
//         }).catch(function () {
//             // error handling
//         })
//     });

//     //--- Test - 1 OK
//     it(' Customer Test-1  should return status 200  ', (done) => {
//         chai.request(app)
//             .get('/customers/getAll')
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 done();
//             })
//     });

//     //--- Test-2  OK
//     it(' Customer Test-2 should Customer to have requared data (_id, customerName, customerCode  and etc.)', (done) => {
//         chai.request(app)
//             .get('/customers/getAll')
//             .end((err, response) => {
//                 chai.request(app)
//                     .get('/customers/' + response.body[0]._id)
//                     .end((err, res) => {
//                         res.should.have.status(200);
//                         const obj = response.body[0];
//                         obj._id.should.equal(response.body[0]._id);
//                         obj.should.have.property('_id');
//                         obj.should.have.property('customerName');
//                         obj.customerName.should.equal('Customer-1');
//                         obj.customerCode.should.equal(123466);
//                         obj.customerAddress.Street.should.not.equal(null);
//                         obj.customerAddress.City.should.not.equal(null);
//                         done();
//                     });
//             });
//     });

//     //--- Test-3 
//     it(' Customer Test-3 should return list of customers', (done) => {
//         chai.request(app)
//             .get('/customers/getAll')
//             .end((err, res) => {
//                 const obj = res.body;
//                 res.should.have.status(200);
//                 obj.should.be.a('array');
//                 res.body.length.should.be.eql(2);
//                 done();
//             });
//     });

//     //-- Test-4
//     it(' Customer Test-4 should add a new customer ', (done) => {
//         chai.request(app)
//             .post('/customers/new')
//             .send({
//                 customerName: "Customer-3",
//                 customerAddress: {
//                     Street: "Kauno g.5",
//                     City: "Kaunas",
//                     Code: "12365"
//                 },
//                 customerCode:11111,
//                 customerVATCode: "LT123456",
//                 customerIsActive: true
//             })
//             .end((err, res) => {
//                 chai.request(app)
//                     .get('/customers/getAll')
//                     .end((err, response) => {
//                                  res.should.have.status(200);
//                                 const obj = response.body[((response.body.length) - 1)];
//                                 obj._id.should.equal(response.body[((response.body.length) - 1)]._id);
//                                 obj.should.have.property('_id');
//                                 obj.should.have.property('customerName');
//                                 obj.customerName.should.equal('Customer-3');
//                                 done();
//                             });
//             });
//     });

//     // //--- Test-5
//     it(' Customer Test-5 should update a customerNamme', (done) =>{
//         chai.request(app)
//             .get('/customers/getAll')
//             .end( (err, response)=> {
//                 chai.request(app)
//                     .put('/customers/update/?id=' + response.body[1]._id)
//                     .send({ customerName: "Customer updated" })
//                     .end((err, res) => {
//                         chai.request(app)
//                         .get('/customers/getAll')
//                         .end( (err, response)=> {
//                         should.not.exist(err);
//                         response.should.have.status(200);
//                         const obj = response.body[1]
//                         obj.customerName.should.be.equal("Customer updated")
//                          done();
//                     });
//                 });
//             });
//     });

//     // --- Teast-6
//     it(' Customer Test-6 should delete a customer', (done)=> {
//         chai.request(app)
//             .get('/customers/getAll')
//             .end( (err, response) =>{
//                 chai.request(app)
//                     .get('/customers/' + response.body[((response.body.length) - 1)]._id)
//                     .end((err, res) => {
//                         chai.request(app)
//                             .delete('/customers/delete/?id=' + response.body[((response.body.length) - 1)]._id)
//                             .end( (error, res) =>{
//                                 chai.request(app)
//                                     .get('/customers/' + response.body[((response.body.length) - 1)]._id)
//                                     .end((err, respo) => {
//                                         respo.should.have.status(200);
//                                         const obj = respo.body
//                                         obj.body.should.be.equal(null);
//                                     });
//                                 done();
//                             });
//                     });
//             });
//     });

// })

