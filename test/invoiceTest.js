process.env.NODE_ENV = 'test';
const chai = require('chai');
const chaiHtpp = require('chai-http');
const app = require('../app');
const InvoiceModel = require('../models/invoiceModel');
const Supplier = require('../models/supplierModel');
const Customer = require('../models/customerModel');
const Project = require('../models/projectModel');
const should = require('chai').should();
chai.should();
chai.use(chaiHtpp);

mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);


describe('Invoice', () => {
    beforeEach(async (done) => {
        let supplier = await Supplier.findById('5c0a5b548478485560b38486');
        let supplier1 = await Supplier.findById('5c0a5b598478485560b38487');
        let customer = await Customer.findById('5c0a5ba78478485560b3848a');
        let customer1 = await Customer.findById('5c0a5bab8478485560b3848b');
        let project = await Project.findById('5c0699b97a8617343879347a');
        let project1 = await Project.findById('5c0a5bf38478485560b3848f');



        let newInvoice = new InvoiceModel({
            invoiceSer: "SER",
            invoiceNumber: 1000,
            invoiceDate: "2018-11-12",
            invoiceProjectQuant: 1,
            invoiceSupplier: supplier,
            invoiceCustomer: customer,
            invoiceProject: project,
            invoicePrice: 125,
            invoiceVAT: 0.21,
            invoiceRate: 155,
            invoiceIsActive: true
        });
        let newInvoice1 = new InvoiceModel({
            invoiceSer: "SER",
            invoiceNumber: 1001,
            invoiceDate: "2018-11-12",
            invoiceProjectQuant: 1,
            invoiceSupplier: supplier1,
            invoiceCustomer: customer1,
            invoiceProject: project1,
            invoicePrice: 125,
            invoiceVAT: 0.21,
            invoiceRate: 151,
            invoiceIsActive: true
        });

        newInvoice1.save((err) => {
            newInvoice.save((err) => {
                if (err) {
                    console.log('Error on save new object :', err);
                }
            });
            if (err) {
                console.log('Error on save new object :', err);
            }
            done();
        });
    });

    afterEach((done) => {
        InvoiceModel.collection.drop().then(function () {
            done();
        }).catch(function () {
            // error handling
        })
    });

    // //--- Test - 1 OK
    it(' Invoice Test-1  should return status 200  ', (done) => {
        chai.request(app)
            .get('/invoices/getAll')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            })
    });

    // // //--- Test-2  OK
    it(' Invoice Test-2 should Invoice to have requared data (_id, Supplier, Customer, Project  and etc.)', (done) => {
        chai.request(app)
            .get('/invoices/getAll')
            .end((err, response) => {
                chai.request(app)
                    .get('/invoices/' + response.body[0]._id)
                    .end((err, res) => {
                        res.should.have.status(200);
                        //  const obj = response.body[0];
                        // obj._id.should.eql(response.body[0]._id);
                        // obj.should.have.property('_id');
                        // obj.should.have.property('projectName');
                        // obj.objtName.should.eql('P1');
                        // obj.invoiceRate.should.not.eql(0);
                        // obj.projectAddress.Street.should.not.eql(null);
                        // obj.projectAddress.City.should.not.eql(null);
                        done();
                    });
            });
    });

    // // //--- Test-3 
    // it(' Project Test-3 should return list of projects', (done) => {
    //     chai.request(app)
    //         .get('/projects/getAll')
    //         .end((err, res) => {
    //             const projects = res.body;
    //             res.should.have.status(200);
    //             projects.should.be.a('array');
    //             projects.length.should.be.eql(2);
    //             done();
    //         });
    // });

    // // //-- Test-4
    // it(' Project Test-4 should add a new project ', (done) => {
    //     chai.request(app)
    //         .post('/projects/new')
    //         .send({
    //             projectName: "P3",
    //             projectDescription: "desc",
    //             projectAddress: {
    //                 Street: "Prienu g.7",
    //                 City: "Prienai",
    //                 Code: "12365"
    //             },
    //             projectPrice: 300,
    //             projectIsActive: true
    //         })
    //         .end((err, res) => {
    //             chai.request(app)
    //                 .get('/projects/getAll')
    //                 .end((err, response) => {
    //                     res.should.have.status(200);
    //                     const project = response.body[((response.body.length) - 1)];
    //                     project._id.should.eql(response.body[((response.body.length) - 1)]._id);
    //                     project.should.have.property('_id');
    //                     project.should.have.property('projectName');
    //                     project.projectName.should.eql('P3');
    //                     project.projectPrice.should.not.equal(((response.body.length) - 1));
    //                     project.projectAddress.Street.should.not.eql(null);
    //                     project.projectAddress.City.should.not.eql(null);
    //                     done();
    //                 });
    //         });
    // });

    // // // //--- Test-5
    // it(' Project Test-5 should update a projectNamme', (done) => {
    //     chai.request(app)
    //         .get('/projects/getAll')
    //         .end((err, response) => {
    //             chai.request(app)
    //                 .put('/projects/update/?id=' + response.body[1]._id)
    //                 .send({ projectName: "P1 updated" })
    //                 .end((err, res) => {
    //                     chai.request(app)
    //                         .get('/projects/getAll')
    //                         .end((err, response) => {
    //                             should.not.exist(err);
    //                             response.should.have.status(200);
    //                             const project = response.body[1]
    //                             project.projectName.should.be.eql("P1 updated")
    //                             done();
    //                         });
    //                 });
    //         });
    // });

    // // // --- Teast-6
    // it(' Poject Test-6 should delete a project', (done) => {
    //     chai.request(app)
    //         .get('/projects/getAll')
    //         .end((err, response) => {
    //             chai.request(app)
    //                 .get('/projects/' + response.body[((response.body.length) - 1)]._id)
    //                 .end((err, res) => {
    //                     chai.request(app)
    //                         .delete('/projects/delete/?id=' + response.body[((response.body.length) - 1)]._id)
    //                         .end((error, res) => {
    //                             const project = res.body;
    //                             res.should.have.status(200);
    //                             chai.request(app)
    //                                 .get('/projects/' + response.body[((response.body.length) - 1)]._id)
    //                                 .end((err, respo) => {
    //                                     respo.should.have.status(200);
    //                                     const project = respo.body
    //                                     project.should.be.eql({});
    //                                 });
    //                             done();
    //                         });
    //                 });
    //         });
    // });

})
