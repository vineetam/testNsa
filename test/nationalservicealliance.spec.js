'use strict';

var globals = require('../global')
var refreshToken = 'cm02YmUxcXd4YWd5OWdtOHJ0dTZ2anAycHI0ZzM0ajdqb2Nremx3ZWxmNnF2czN5dWdvNnpwNHEyajB2bHpqdA=='
var nationalservicealliance = require('../nationalservicealliance')
var global = require('./testGlobal.js')
var https = require('https')
var chai = require('chai');
var expect = chai.expect


describe('NSA Module', function () {

    //Tests for response 
    it("Calling Welcome", function (done) {
        var nsa = nationalservicealliance()
        nsa.welcome(function (data, status) {

            expect(data).to.equal('Welcome')
            done()
        })


    });

    //Tests for response 
    it("Calling Login", function (done) {
        var nsa = nationalservicealliance()
        nsa.login('johns', 'is09nyc1', function (data, status) {

            expect(status).to.equal(200)
            global.testToken = data.jwt
            global.testRefreshToken = data.refreshToken
            done()
        })


    });

    //Tests for response 
    it("Calling Refresh Login", function (done) {
        var nsa = nationalservicealliance(global.testRefreshToken)
        nsa.refreshLogin(function (data, status) {

            expect(status).to.equal(200)
            done()
        })

    });

    //Tests for response 
    it("Calling Logout", function (done) {
        var nsa = nationalservicealliance(global.testRefreshToken)
        nsa.logout(function (data, status) {

            expect(status).to.equal(200)
            done()
        })

    });

    //Tests for response 
    it("Calling Login Again", function (done) {
        var nsa = nationalservicealliance()
        nsa.login('johns', 'is09nyc1', function (data, status) {

            expect(status).to.equal(200)
            global.testToken = data.jwt
            global.testRefreshToken = data.refreshToken
            done()
        })


    });

    //Tests for response 
    it("Calling List Users", function (done) {
        var nsa = nationalservicealliance(global.testToken)

        nsa.listUsers(22, function (data, status) {

            expect(status).to.equal(200)
            done()
        })

    });

    //Tests for response 
    it("Calling Update User", function (done) {
        var nsa = nationalservicealliance(global.testToken)

        nsa.updateUser(22, {
            "firstName": "John6",
            "lastName": "Doe",
            "email": "john.doe@test.com"
        }, function (data, status) {

            expect(status).to.equal(200)
            done()
        })

    });

    //Tests for response 
    it("Calling Update User Password", function (done) {
        var nsa = nationalservicealliance(global.testToken)

        nsa.updateUserPassword(22, {
            "oldPassword": "is09nyc1",
            "newPassword": "is09nyc2"
        }, function (data, status) {

            expect(status).to.equal(200)
            done()
        })

    });

    //Tests for response 
    it("Calling List Availability", function (done) {
        var nsa = nationalservicealliance(global.testToken)

        nsa.listAvailability(function (data, status) {

            expect(status).to.equal(200)
            done()
        })

    });

    //Tests for response 
    it("Calling List Availability Defaults", function (done) {
        var nsa = nationalservicealliance(global.testToken)

        nsa.listAvailabilityDefaults(function (data, status) {

            expect(status).to.equal(200)
            done()
        })

    });

    //Tests for response 
    it("Calling List Availability Defaults", function (done) {
        var nsa = nationalservicealliance(global.testToken)

        nsa.listAvailabilityDefaults(function (data, status) {

            expect(status).to.equal(200)
            done()
        })

    });

    //Tests for response 
    it("Calling Add Availability", function (done) {
        var nsa = nationalservicealliance(global.testToken)

        nsa.addAvailability([

            {
                "date": "2016-01-01",
                "slots": [
                    "P"
                    , "A"
                    , "E"
                ]
            },
            {
                "date": "2016-01-02",
                "slots": [
                    "E"
                ]
            },
            {
                "date": "2016-01-03",
                "slots": [
                    "D"
                ]
            }
        ], function (data, status) {

            expect(status).to.equal(200)
            done()
        })

    });

    //Tests for response 
    it("Calling Update Availability By Date", function (done) {
        var nsa = nationalservicealliance(global.testToken)

        nsa.updateAvailabilityByDate('2016-01-03', {
            "slots": [
                "P"
                , "A"
                , "E"
            ]
        }
            , function (data, status) {

                expect(status).to.equal(200)
                done()
            })

    });


    //Tests for response 
    it("Calling Remove Availability", function (done) {
        var nsa = nationalservicealliance(global.testToken)

        nsa.removeAvailabilityByDate('2016-03-04', function (data, status) {

            expect(status).to.equal(403)
            done()
        })

    });

    //Tests for response 
    it("Calling Update Availability Defaults", function (done) {
        var nsa = nationalservicealliance(global.testToken)

        nsa.updateAvailabilityDefaults([
            {
                "day": "monday",
                "slots": [
                    "P"
                    , "A"
                    , "E"
                ]
            },
            {
                "day": "wednesday",
                "slots": [
                    "E"
                ]
            },
            {
                "day": "friday",
                "slots": [
                    "P"
                    , "A"
                    , "E"
                ]
            }
        ]
            , function (data, status) {

                expect(status).to.equal(200)
                done()
            })

    });



    //Tests for response 
    it("Calling Get Dispatches", function (done) {
        var nsa = nationalservicealliance(global.testToken)

        nsa.getDispatches('?status=closed', function (data, status) {

            expect(status).to.equal(200)
            done()
        })

    });


    //Tests for response 
    it("Calling GET Dispatches By DispatchNumber", function (done) {
        var nsa = nationalservicealliance(global.testToken)

        nsa.getDispatchesByDispatchNumber('NYC201509256146', function (data, status) {

            expect(status).to.equal(200)
            done()
        })

    });

    //Tests for response 
    it("Calling Update Dispatches By DisparchNumber", function (done) {
        var nsa = nationalservicealliance(global.testToken)

        nsa.updateDispatchesByDispatchNumber('NYC201509256146', {
            "serial": "serial123",
            "notes": "Replaced part"
        },
            function (data, status) {

                expect(status).to.equal(200)
                done()
            })

    });

    //Tests for response 
    it("Calling Update Dispatches Schedules", function (done) {
        var nsa = nationalservicealliance(global.testToken)

        nsa.updateDispatchesSchedules('NYC201509256146', {
            "newDate": "2016-06-14",
            "timeSlot": "A",
            "reason": 1,
            "notes": "Customer did not answer. Waited for 10 minutes"
        }, function (data, status) {

            expect(status).to.equal(200)
            done()
        })

    });


    //Tests for response 
    it("Calling Update Dispatches Completions", function (done) {
        var nsa = nationalservicealliance(global.testToken)

        nsa.updateDispatchesCompletions('NYC201509256146', {
            "runDate": "2016-07-07",
            "serialNumber": "06861",
            "statusCode": "CP",
            "servicePerformed": "open the equpment and replace the screen.",
            "notes": "doing good job",
            "repairCode": "PTEL",
            "Action": "closeBill",
            "repairSuccessful": true
        }, function (data, status) {

            expect(status).to.equal(200)
            done()
        })

    });

    //Tests for response 
    it("Calling Get Dispatches Attachments", function (done) {
        var nsa = nationalservicealliance(global.testToken)

        nsa.getDispatchesAttachments('NYC201509256146', function (data, status) {

            expect(status).to.equal(200)
            done()
        })

    });

    //Tests for response 
    it("Calling Add Dispatches Attachments", function (done) {
        var nsa = nationalservicealliance(global.testToken)

        nsa.addDispatchesAttachments('NYC201509256146', [
            {
                "attachmentTypeID": "1",
                "extension": ".jpg"
            },
            {
                "attachmentTypeID": "2",
                "extension": ".txt"
            }

        ], function (data, status) {

            expect(status).to.equal(200)
            done()
        })

    });

    //Tests for response 
    it("Calling List Payments", function (done) {
        var nsa = nationalservicealliance(global.testToken)

        nsa.listPayments('?page=2', function (data, status) {

            expect(status).to.equal(200)
            done()
        })

    });

    //Tests for response 
    it("Calling List Payment Batches", function (done) {
        var nsa = nationalservicealliance(global.testToken)

        nsa.listPaymentsByBatchId(2, function (data, status) {

            expect(status).to.equal(200)
            done()
        })

    });

    //Tests for response 
    it("Calling List Payment Calls", function (done) {
        var nsa = nationalservicealliance(global.testToken)

        nsa.listPaymentsByCallId('NYC201509256146', function (data, status) {

            expect(status).to.equal(200)
            done()
        })

    });

});

