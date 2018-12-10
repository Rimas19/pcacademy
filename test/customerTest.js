process.env.NODE_ENV = 'test';
const chai = require('chai');
const chaiHtpp = require('chai-http');
const app = require('../app');
const CustomerModel = require('../models/customerModel');
const should = require('chai').should();
chai.should();
chai.use(chaiHtpp);

mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

describe('Customer', () => {
    beforeEach((done) => {
        console.log('CALL CUSTOMER');
        let newCustomer = new CustomerModel({
            customerName: "Customer-1",
            customerAddress: {
                Street: "Kauno g.5",
                City: "Kaunas",
                Code: "12365"
            },
            customerCode: 123466,
            customerVATCode: "LT123456",
            customerIsActive: true
        });

        let newCustomer1 = new CustomerModel({
            customerName: "Customer-2",
            customerAddress: {
                Street: "Kauno g.5",
                City: "Kaunas",
                Code: "12365"
            },
            customerCode: 123466,
            customerVATCode: "LT123456",
            customerIsActive: true
        });

        newCustomer1.save((err) => {
            newCustomer.save((err) => {
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
        CustomerModel.collection.drop().then(function () {
            done();
        }).catch(function () {
            // error handling
        })
    });

    //--- Test - 1 OK
    it(' Customer Test-1  should return status 200  ', (done) => {
        chai.request(app)
            .get('/customers/getAll')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            })
    });

    //--- Test-2  OK
    it(' Customer Test-2 should Customer to have requared data (_id, customerName, customerCode  and etc.)', (done) => {
        chai.request(app)
            .get('/customers/getAll')
            .end((err, response) => {
                chai.request(app)
                    .get('/customers/' + response.body[0]._id)
                    .end((err, res) => {
                        res.should.have.status(200);
                        const obj = response.body[0];
                        obj._id.should.eql(response.body[0]._id);
                        obj.should.have.property('_id');
                        obj.should.have.property('customerName');
                        obj.customerName.should.eql(response.body[0].customerName);
                        obj.customerCode.should.eql(123466);
                        obj.customerAddress.Street.should.not.eql(null);
                        obj.customerAddress.City.should.not.eql(null);
                        done();
                    });
            });
    });

    //--- Test-3 
    it(' Customer Test-3 should return list of customers', (done) => {
        chai.request(app)
            .get('/customers/getAll')
            .end((err, res) => {
                const obj = res.body;
                res.should.have.status(200);
                obj.should.be.a('array');
                res.body.length.should.be.eql(2);
                done();
            });
    });

    //-- Test-4
    it(' Customer Test-4 should add a new customer ', (done) => {
        chai.request(app)
            .post('/customers/new')
            .send({
                customerName: "Customer-3",
                customerAddress: {
                    Street: "Kauno g.5",
                    City: "Kaunas",
                    Code: "12365"
                },
                customerCode: 11111,
                customerVATCode: "LT123456",
                customerIsActive: true
            })
            .end((err, res) => {
                chai.request(app)
                    .get('/customers/getAll')
                    .end((err, response) => {
                        res.should.have.status(200);
                        const obj = response.body[((response.body.length) - 1)];
                        obj._id.should.eql(response.body[((response.body.length) - 1)]._id);
                        obj.should.have.property('_id');
                        obj.should.have.property('customerName');
                        obj.customerName.should.eql('Customer-3');
                        done();
                    });
            });
    });

    // //--- Test-5
    it(' Customer Test-5 should update a customerNamme', (done) => {
        chai.request(app)
            .get('/customers/getAll')
            .end((err, response) => {
                chai.request(app)
                    .put('/customers/update/?id=' + response.body[1]._id)
                    .send({ customerName: "Customer updated" })
                    .end((err, res) => {
                        chai.request(app)
                            .get('/customers/getAll')
                            .end((err, response) => {
                                should.not.exist(err);
                                response.should.have.status(200);
                                const obj = response.body[1]
                                obj.customerName.should.be.eql("Customer updated")
                                done();
                            });
                    });
            });
    });

    // --- Teast-6
    it(' Customer Test-6 should delete a customer', (done) => {
        chai.request(app)
            .get('/customers/getAll')
            .end((err, response) => {
                chai.request(app)
                    .get('/customers/' + response.body[((response.body.length) - 1)]._id)
                    .end((err, res) => {
                        chai.request(app)
                            .delete('/customers/delete/?id=' + response.body[((response.body.length) - 1)]._id)
                            .end((error, res) => {
                                chai.request(app)
                                    .get('/customers/' + response.body[((response.body.length) - 1)]._id)
                                    .end((err, respo) => {
                                        respo.should.have.status(200);
                                        const obj = respo.body;
                                        obj.should.be.eql({});
                                    });
                                done();
                            });
                    });
            });
    });

})
