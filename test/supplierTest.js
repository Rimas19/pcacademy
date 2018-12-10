process.env.NODE_ENV = 'test';
const chai = require('chai');
const chaiHtpp = require('chai-http');
const app = require('../app');
const SupplierModel = require('../models/supplierModel');
const should = require('chai').should();
chai.should();
chai.use(chaiHtpp);

mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

describe('Supplier', () => {
    beforeEach((done) => {
        console.log('CALL supplier');
        let newSupplier = new SupplierModel({
            supplierName: "Supplier-1",
            supplierAddress: {
                Street: "Kauno g.5",
                City: "Kaunas",
                Code: "12365"
            },
            supplierCode: 123466,
            supplierVATCode: "LT123456",
            supplierIsActive: true
        });

        let newSupplier1 = new SupplierModel({
            supplierName: "Supplier-2",
            supplierAddress: {
                Street: "Kauno g.5",
                City: "Kaunas",
                Code: "12365"
            },
            supplierCode: 123466,
            supplierVATCode: "LT123456",
            supplierIsActive: true
        });

        newSupplier1.save((err) => {
            newSupplier.save((err) => {
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
        SupplierModel.collection.drop().then(function () {
            done();
        }).catch(function () {
            // error handling
        })
    });

    // //--- Test - 1 OK
    it(' Customer Test-1  should return status 200  ', (done) => {
        chai.request(app)
            .get('/customers/getAll')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            })
    });

    //     //--- Test-2  OK
    it(' Supplier Test-2 should Supplier to have requared data (_id, supplierName, supplierCode  and etc.)', (done) => {
        chai.request(app)
            .get('/suppliers/getAll')
            .end((err, response) => {
                chai.request(app)
                    .get('/suppliers/' + response.body[0]._id)
                    .end((err, res) => {
                        res.should.have.status(200);
                        const obj = response.body[0];
                        obj._id.should.eql(response.body[0]._id);
                        obj.should.have.property('_id');
                        obj.should.have.property('supplierName');
                        obj.supplierName.should.eql(response.body[0].supplierName);
                        obj.supplierCode.should.eql(123466);
                        obj.supplierAddress.Street.should.not.eql(null);
                        obj.supplierAddress.City.should.not.eql(null);
                        done();
                    });
            });
    });

    //     //--- Test-3 
    it(' Supplier Test-3 should return list of suppliers', (done) => {
        chai.request(app)
            .get('/suppliers/getAll')
            .end((err, res) => {
                const obj = res.body;
                res.should.have.status(200);
                obj.should.be.a('array');
                res.body.length.should.be.eql(2);
                done();
            });
    });

    //     //-- Test-4
    it(' Supplier Test-4 should add a new supplier ', (done) => {
        chai.request(app)
            .post('/suppliers/new')
            .send({
                supplierName: "Supplier-3",
                supplierAddress: {
                    Street: "Kauno g.5",
                    City: "Kaunas",
                    Code: "12365"
                },
                supplierCode: 123466,
                supplierVATCode: "LT123456",
                supplierIsActive: true
            })
            .end((err, res) => {
                chai.request(app)
                    .get('/suppliers/getAll')
                    .end((err, response) => {
                        res.should.have.status(200);
                        const obj = response.body[((response.body.length) - 1)];
                        obj._id.should.eql(response.body[((response.body.length) - 1)]._id);
                        obj.should.have.property('_id');
                        obj.should.have.property('supplierName');
                        obj.supplierName.should.eql('Supplier-3');
                        done();
                    });
            });
    });

    //     // //--- Test-5
    it(' Supplier Test-5 should update a supplierNamme', (done) => {
        chai.request(app)
            .get('/suppliers/getAll')
            .end((err, response) => {
                chai.request(app)
                    .put('/suppliers/update/?id=' + response.body[1]._id)
                    .send({ supplierName: "Supplier updated" })
                    .end((err, res) => {
                        chai.request(app)
                            .get('/suppliers/getAll')
                            .end((err, response) => {
                                should.not.exist(err);
                                response.should.have.status(200);
                                const obj = response.body[1]
                                obj.supplierName.should.be.eql("Supplier updated")
                                done();
                            });
                    });
            });
    });

    //     // --- Teast-6
    it(' Supploier Test-6 should delete a supplier', (done) => {
        chai.request(app)
            .get('/suppliers/getAll')
            .end((err, response) => {
                chai.request(app)
                    .get('/suppliers/' + response.body[((response.body.length) - 1)]._id)
                    .end((err, res) => {
                        chai.request(app)
                            .delete('/suppliers/delete/?id=' + response.body[((response.body.length) - 1)]._id)
                            .end((error, res) => {
                                chai.request(app)
                                    .get('/suppliers/' + response.body[((response.body.length) - 1)]._id)
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
