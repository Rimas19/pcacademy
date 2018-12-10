// process.env.NODE_ENV = 'test';
// const chai = require('chai');
// const chaiHtpp = require('chai-http');
// const app = require('../app');
// const InvoiceModel = require('../models/invoiceModel');
// const Supplier = require('../models/supplierModel');
// const Customer = require('../models/customerModel');
// const Project = require('../models/projectModel');
// const should = require('chai').should();
// chai.should();
// chai.use(chaiHtpp);

// mongoose = require('mongoose');
// mongoose.set('useCreateIndex', true);


// describe('Invoice', () => {

//     // beforeEach(done => {
//     //     InvoiceModel.remove({}, err => {
//     //         done();
//     //     });
//     // });

//     beforeEach(async () => {

//         const supplier = await Supplier.findById('5c0a5b548478485560b38486');
//         const supplier1 = await Supplier.findById('5c0a5b598478485560b38487');
//         const customer = await Customer.findById('5c0a5ba78478485560b3848a');
//         const customer1 = await Customer.findById('5c0a5bab8478485560b3848b');
//         const project = await Project.findById('5c0699b97a8617343879347a');
//         const project1 = await Project.findById('5c0a5bf38478485560b3848f');

//         let newInvoice = new InvoiceModel({
//             invoiceSer: "SER",
//             invoiceNumber: 1000,
//             invoiceDate: "2018-11-12",
//             invoiceProjectQuant: 1,
//             invoiceSupplier: supplier,
//             invoiceCustomer: customer,
//             invoiceProject: project,
//             invoicePrice: 125,
//             invoiceVAT: 0.21,
//             invoiceRate: 155,
//             invoiceIsActive: true
//         });
//         let newInvoice1 = new InvoiceModel({
//             invoiceSer: "SER",
//             invoiceNumber: 1001,
//             invoiceDate: "2018-11-12",
//             invoiceProjectQuant: 1,
//             invoiceSupplier: supplier1,
//             invoiceCustomer: customer1,
//             invoiceProject: project1,
//             invoicePrice: 200,
//             invoiceVAT: 0.21,
//             invoiceRate: 242,
//             invoiceIsActive: true
//         });

//         newInvoice.save((err) => {
//             newInvoice1.save((err) => {
//                 if (err) {
//                     console.log('Error on save new object :', err);
//                 }
//             });
//             if (err) {
//                 console.log('Error on save new object :', err);
//             }
//             //   done();
//         });
//     });

//     // afterEach((done) => {
//     //     InvoiceModel.collection.drop().then(function () {
//     //         done();
//     //     }).catch(function () {
//     //         // error handling
//     //     })
//     // });

//     //--- Test - 1 OK
//     it(' Invoice Test-1  should return status 200  ', (done) => {
//         chai.request(app)
//             .get('/invoices/getAll')
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 done();
//             })
//     });

//     //--- Test-2  OK
//     it(' Invoice Test-2 should Invoice to have requared data (_id, Supplier, Customer, Project  and etc.)', (done) => {
//         chai.request(app)
//             .get('/invoices/getAll')
//             .end((err, response) => {
//                 const obj = response.body[0];
//                 console.log('Response    :' + obj.invoiceSupplier)
//                 response.should.have.status(200);
//                 obj.should.have.property('_id');
//                 obj.should.have.property('invoiceSupplier');
//                 obj.should.have.property('invoiceCustomer');
//                 obj.should.have.property('invoiceProject');
//                 obj.invoiceSupplier.supplierName.should.eql('Supplier-1');
//                 obj.invoiceCustomer.customerName.should.eql('Customer-1');
//                 obj.invoiceProject.projectName.should.eql('P1');
//                 obj.invoiceRate.should.not.eql(0);
//                 done();
//             });
//     });

//     //--- Test-3 
//     it(' Invoice Test-3 should return list of invoices', (done) => {
//         chai.request(app)
//             .get('/invoices/getAll')
//             .end((err, res) => {
//                 const obj = res.body;
//                 res.should.have.status(200);
//                 obj.should.be.a('array');
//                 obj.length.should.not.be.eql(2);
//                 done();
//             });
//     });

//     //-- Test-4
//     // it(' Invoice Test-4 should add a new invoice ', async (done) => {
//     //     const supplier = await Supplier.findById('5c0a5b548478485560b38486');
//     //     const customer = await Customer.findById('5c0a5ba78478485560b3848a');
//     //     const project = await Project.findById('5c0699b97a8617343879347a');

//     //     let newInvoice = new InvoiceModel({
//     //         invoiceSer: "SER",
//     //         invoiceNumber: 1111,
//     //         invoiceDate: "2018-11-12",
//     //         invoiceProjectQuant: 1,
//     //         invoiceSupplier: supplier,
//     //         invoiceCustomer: customer,
//     //         invoiceProject: project,
//     //         invoicePrice: 125,
//     //         invoiceVAT: 0.21,
//     //         invoiceRate: 155,
//     //         invoiceIsActive: true
//     //     });
//     //     chai.request(app)
//     //         .post('/invoices/new')
//     //         .send({
//     //             newInvoice
//     //         })
//     //         .end((err, res) => {
//     //             const obj = res.body
//     //             console.log('Response   :' + obj[)
//     //             chai.request(app)
//     //                 .get('/invoices/getAll')
//     //                 .end((err, response) => {
//     //                     response.should.have.status(200);
//     //                     const obj = response.body[((response.body.length) - 1)];
//     //                     console.log('Response   :' + obj)
//     //                     obj._id.should.eql(response.body[((response.body.length) - 1)]._id);
//     //                     obj.should.have.property('_id');
//     //                     obj.should.have.property('invoiceNumber');
//     //                     obj.invoiceNumber.should.eql(1111);
//     //                     done();
//     //                 });
//     //         });
//     // });

//     //--- Test-5
//     it(' Invoice Test-5 should update a invoiceDate', (done) => {
//         chai.request(app)
//             .get('/invoices/getAll')
//             .end((err, response) => {
//                 const obj = response.body;
//                 chai.request(app)
//                     .put('/invoices/update/?id=' + obj[0]._id)
//                     .send({ invoiceDate: "2016-12-12" })
//                     .end((err, res) => {
//                         chai.request(app)
//                             .get('/invoices/getAll')
//                             .end((err, response) => {
//                                 should.not.exist(err);
//                                 response.should.have.status(200);
//                                 const obj = response.body[0]
//                                 obj.invoiceDate.should.be.eql("2016-12-12T00:00:00.000Z")
//                                 done();
//                             });
//                     });

//             });
//     });

//     //--- Teast-6
//     it(' Invoice Test-6 should delete a invoice', (done) => {
//         chai.request(app)
//             .get('/invoices/getAll')
//             .end((err, response) => {
//                 chai.request(app)
//                     .get('/invoices/' + response.body[((response.body.length) - 1)]._id)
//                     .end((err, res) => {
//                         chai.request(app)
//                             .delete('/invoices/delete/?id=' + response.body[((response.body.length) - 1)]._id)
//                             .end((error, res) => {
//                                 const project = res.body;
//                                 res.should.have.status(200);
//                                 chai.request(app)
//                                     .get('/invoices/' + response.body[((response.body.length) - 1)]._id)
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


// });
