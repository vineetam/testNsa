'use strict';

//Include modules required
var globals = require('../../global')
var nsa = require('../../nationalservicealliance')()
var https = require('https')
var chai = require('chai');
var expect = chai.expect
var global = require('../testGlobal.js')

//Describes test cases for Payment API
describe('Payment Resource Test', function () {

    //Tests Get Payments 
    it("Get Payments Test", function (done) {

        //Calls API
        globals.payments.getPayments('GET', '/payments', globals.port, globals.host, global.testToken, function (data, status) {

            //Expects Status 200
            expect(status).to.equal(200);
            done();
        })
    });
    
     //Tests Get Payments For Error
    it("Get Payments For Error Test", function (done) {

        //Calls API
        globals.payments.getPayments('GET', '/payments', 8900, 'myhost', global.testToken, function (data, status) {

            //Expects Status NA
            expect(status).to.equal('NA');
            done();
        })
    });

    //Tests Get Payments with wrong token
    it("Get Payments with wrong token Test", function (done) {

        //Calls API
        globals.payments.getPayments('GET', '/payments', globals.port, globals.host, 'global.testToken', function (data, status) {

            //Expects Status 401
            expect(status).to.equal(401);
            done();
        })
    });

    //Tests Get Payments Batches For Error
    it("Get Payments Batches For Error Test", function (done) {

        //Calls API
        globals.payments.getPaymentsBatches('GET', '/payments/batches/2', 8900, 'myhost', global.testToken, function (data, status) {

            //Expects Status NA
            expect(status).to.equal('NA');
            done();
        })
    });
    
     //Tests Get Payments Batches For Error 
    it("Get Payments Batches For Error Test", function (done) {

        //Calls API
        globals.payments.getPaymentsBatches('GET', '/payments/batches/2', globals.port, globals.host, global.testToken, function (data, status) {

            //Expects Status 200
            expect(status).to.equal(200);
            done();
        })
    });

    //Tests Get Payments Batches with wrong token
    it("Get Payments Batches with wrong token Test", function (done) {

        //Calls API
        globals.payments.getPaymentsBatches('GET', '/payments/batches/2', globals.port, globals.host, 'global.testToken', function (data, status) {

            //Expects Status 401
            expect(status).to.equal(401);
            done();
        })
    });

    //Tests Get Payments Batches with Invalid Batch ID
    it("Get Payments Batches with Invalid Batch ID", function (done) {

        //Calls API
        globals.payments.getPaymentsBatches('GET', '/payments/batches/invalid2', globals.port, globals.host, global.testToken, function (data, status) {

            //Expects Status 403
            expect(status).to.equal(403);
            done();
        })
    });

    //Tests Get Payments Calls
    it("Get Payments Calls Test", function (done) {

        //Calls API
        globals.payments.getPaymentsCalls('GET', '/payments/calls/NYC201509256146', globals.port, globals.host, global.testToken, function (data, status) {

            //Expects Status 200
            expect(status).to.equal(200);
            done();
        })
    });
    
     //Tests Get Payments Calls For Error
    it("Get Payments Calls For Error Test", function (done) {

        //Calls API
        globals.payments.getPaymentsCalls('GET', '/payments/calls/NYC201509256146', 8900, 'myhost', global.testToken, function (data, status) {

            //Expects Status NA
            expect(status).to.equal('NA');
            done();
        })
    });

    //Tests Get Payments Calls with wrong token
    it("Get Payments Calls with wrong token Test", function (done) {

        //Calls API
        globals.payments.getPaymentsCalls('GET', '/payments/calls/NYC201509256146', globals.port, globals.host, 'global.testToken', function (data, status) {

            //Expects Status 401
            expect(status).to.equal(401);
            done();
        })
    });

    //Tests Get Payments Calls with Invalid Call ID
    it("Get Payments Calls with Invalid Call ID", function (done) {

        //Calls API
        globals.payments.getPaymentsCalls('GET', '/payments/calls/1NYC201509256146', globals.port, globals.host, global.testToken, function (data, status) {

            //Expects Status 403
            expect(status).to.equal(403);
            done();
        })
    });

});