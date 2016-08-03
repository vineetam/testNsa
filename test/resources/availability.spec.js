'use strict';

//Include modules required
var globals = require('../../global')
var nsa = require('../../nationalservicealliance')()
var https = require('https')
var chai = require('chai');
var expect = chai.expect
var global = require('../testGlobal.js')

//Json body for post availability
var requestAvailData = '[{"date": "2016-01-05", "slots": [ "P","A","E"]},{"date": "2016-01-06","slots": ["E"]},{"date": "2016-01-08","slots": ["D"]}]'

//Json body for put availability for date
var requestAvailDataDate = '{"slots": ["P","A" ,"E"]}'

//Json body for post availability default
var requestAvailDefault = '[  {"day": "monday","slots": ["P" ,"A" ,"E"] }, { "day": "wednesday","slots": [  "E"   ]},  {"day": "friday","slots": [  "P" ,"A","E"] } ]'

//Describes test cases for Availability API
describe('Availability Resource Test', function () {

    //Tests Get Availability 
    it("Get Availability Test", function (done) {

        //Calls API
        globals.availability.getAvailability('GET', '/availability', globals.port, globals.host, global.testToken, function (data, status) {

            //Expects Status 200
            expect(status).to.equal(200);
            done();
        })
    });

    //Tests Get Availability For Error
    it("Get Availability For Error Test", function (done) {

        //Calls API
        globals.availability.getAvailability('GET', '/availability', 8900, 'myhost', global.testToken, function (data, status) {

            //Expects Status NA
            expect(status).to.equal('NA');
            done();
        })
    });

    //Tests Get Availability with wrong token
    it("Get Availability with wrong token Test", function (done) {

        //Calls API
        globals.availability.getAvailability('GET', '/availability', globals.port, globals.host, 'global.testToken', function (data, status) {

            //Expects Status 401
            expect(status).to.equal(401);
            done();
        })
    });

    //Tests Get Availability Defaults
    it("Get Availability Defaults Test", function (done) {

        //Calls API
        globals.availability.getAvailabilityDefaults('GET', '/availability/defaults', globals.port, globals.host, global.testToken, function (data, status) {

            //Expects Status 200
            expect(status).to.equal(200);
            done();
        })
    });

    //Tests Get Availability Defaults For Error
    it("Get Availability Defaults For Error Test", function (done) {

        //Calls API
        globals.availability.getAvailabilityDefaults('GET', '/availability/defaults', 8900, 'myhost', global.testToken, function (data, status) {

            //Expects Status NA
            expect(status).to.equal('NA');
            done();
        })
    });


    //Tests Get Availability Defaults with wrong token
    it("Get Availability Defaults with wrong token Test", function (done) {

        //Calls API
        globals.availability.getAvailabilityDefaults('GET', '/availability/defaults', globals.port, globals.host, 'global.testToken', function (data, status) {

            //Expects Status 401
            expect(status).to.equal(401);
            done();
        })
    });


    //Tests Post Availability
    it("Post Availability Test", function (done) {

        //Calls API
        globals.availability.postAvailability('POST', '/availability', globals.port, globals.host, global.testToken, requestAvailData, function (data, status) {

            //Expects Status 200
            expect(status).to.equal(200);
            done();
        })
    });

    //Tests Post  For Error
    it("Post Availability For Error Test", function (done) {

        //Calls API
        globals.availability.postAvailability('POST', '/availability', 8900, 'myhost', global.testToken, requestAvailData, function (data, status) {

            //Expects Status NA
            expect(status).to.equal('NA');
            done();
        })
    });

    //Tests Post Availability with wrong token
    it("Post Availability with wrong token Test", function (done) {

        //Calls API
        globals.availability.postAvailability('POST', '/availability', globals.port, globals.host, 'global.testToken', requestAvailData, function (data, status) {

            //Expects Status 401
            expect(status).to.equal(401);
            done();
        })
    });

    //Tests Post Availability with wrong body
    it("Post Availability with wrong body Test", function (done) {

        //Calls API
        globals.availability.postAvailability('POST', '/availability', globals.port, globals.host, global.testToken, '', function (data, status) {

            //Expects Status 403
            expect(status).to.equal(403);
            done();
        })
    });

    //Tests Post Availability with invalid date
    it("Post Availability with invalid date Test", function (done) {

        var requestAvailDataInvalidDate = '[{"date": "05-01-2016", "slots": [ "P","A","E"]}]'

        //Calls API
        globals.availability.postAvailability('POST', '/availability', globals.port, globals.host, global.testToken, requestAvailDataInvalidDate, function (data, status) {

            //Expects Status 403
            expect(status).to.equal(403);
            done();
        })
    });

    //Tests Post Availability with invalid slot
    it("Post Availability with invalid slot Test", function (done) {

        var requestAvailDataInvalidSlot = '[{"date": "2016-01-05", "slots": [ "P","Z","E"]}]'

        //Calls API
        globals.availability.postAvailability('POST', '/availability', globals.port, globals.host, global.testToken, requestAvailDataInvalidSlot, function (data, status) {

            //Expects Status 403
            expect(status).to.equal(403);
            done();
        })
    });

    //Tests Put Availability By Date
    it("Put Availability By Date Test", function (done) {

        //Calls API
        globals.availability.putAvailabilityByDate('PUT', '/availability/2016-01-05', globals.port, globals.host, global.testToken, requestAvailDataDate, function (data, status) {

            //Expects Status 200
            expect(status).to.equal(200);
            done();
        })
    });

    //Tests Put Availability By Date For error
    it("Put Availability By Date For Error Test", function (done) {

        //Calls API
        globals.availability.putAvailabilityByDate('PUT', '/availability/2016-01-05', 8900, 'myhost', global.testToken, requestAvailDataDate, function (data, status) {

            //Expects Status NA
            expect(status).to.equal('NA');
            done();
        })
    });

    //Tests Put Availability By Date with wrong token
    it("Put Availability By Date with wrong token Test", function (done) {

        //Calls API
        globals.availability.putAvailabilityByDate('PUT', '/availability/2016-01-05', globals.port, globals.host, 'global.testToken', requestAvailDataDate, function (data, status) {

            //Expects Status 401
            expect(status).to.equal(401);
            done();
        })
    });

    //Tests Put Availability By Date with wrong body
    it("Put Availability By Date with wrong body Test", function (done) {

        //Calls API
        globals.availability.putAvailabilityByDate('PUT', '/availability/2016-01-05', globals.port, globals.host, global.testToken, '', function (data, status) {

            //Expects Status 403
            expect(status).to.equal(403);
            done();
        })
    });

    //Tests Put Availability By Date with invalid date
    it("Put Availability By Date with invalid date Test", function (done) {

        var requestAvailDataInvalidDate = '{"slots": ["P","A" ,"E"]}'

        //Calls API
        globals.availability.putAvailabilityByDate('PUT', '/availability/05-01-2016', globals.port, globals.host, global.testToken, requestAvailDataInvalidDate, function (data, status) {

            //Expects Status 403
            expect(status).to.equal(403);
            done();
        })
    });

    //Tests Put Availability By Date which is not exists on given date
    it("Put Availability By Date which is not exists on given date Test", function (done) {

        var requestAvailDataDateInvalidSlot = '{"slots": ["P","A" ,"E"]}'

        //Calls API
        globals.availability.putAvailabilityByDate('PUT', '/availability/01-01-1990', globals.port, globals.host, global.testToken, requestAvailDataDateInvalidSlot, function (data, status) {

            //Expects Status 403
            expect(status).to.equal(403);
            done();
        })
    });

    //Tests Put Availability By Date with invalid slot
    it("Put Availability By Date with invalid slot Test", function (done) {

        var requestAvailDataDate = '{"slots": ["P","Z" ,"E"]}'

        //Calls API
        globals.availability.putAvailabilityByDate('PUT', '/availability/2016-01-05', globals.port, globals.host, global.testToken, requestAvailDataDate, function (data, status) {

            //Expects Status 403
            expect(status).to.equal(403);
            done();
        })
    });

    //Tests Delete Availability By Date
    it("Delete Availability By Date Test", function (done) {

        //Calls API
        globals.availability.deleteAvailabilityByDate('DELETE', '/availability/2016-01-05', globals.port, globals.host, global.testToken, function (data, status) {

            //Expects Status 200
            expect(status).to.equal(200);
            done();
        })
    });

    //Tests Delete Availability By Date For error
    it("Delete Availability By Date For Error Test", function (done) {

        //Calls API
        globals.availability.deleteAvailabilityByDate('DELETE', '/availability/2016-01-05', 8900, 'myhost', global.testToken, function (data, status) {

            //Expects Status NA
            expect(status).to.equal('NA');
            done();
        })
    });

    //Tests Delete Availability By Date with wrong token
    it("Delete Availability By Date with wrong token Test", function (done) {

        //Calls API
        globals.availability.deleteAvailabilityByDate('DELETE', '/availability/2016-01-05', globals.port, globals.host, 'global.testToken', function (data, status) {

            //Expects Status 401
            expect(status).to.equal(401);
            done();
        })
    });

    //Tests Delete Availability with invalid date
    it("Delete Availability with invalid date Test", function (done) {

        //Calls API
        globals.availability.deleteAvailabilityByDate('DELETE', '/availability/05-01-2016', globals.port, globals.host, global.testToken, function (data, status) {

            //Expects Status 403
            expect(status).to.equal(403);
            done();
        })
    });

    //Tests Delete Availability which is not exists on given date
    it("Delete Availability which is not exists on given date", function (done) {

        //Calls API
        globals.availability.deleteAvailabilityByDate('DELETE', '/availability/01-01-1990', globals.port, globals.host, global.testToken, function (data, status) {

            //Expects Status 403
            expect(status).to.equal(403);
            done();
        })
    });

    //Tests Post Availability Defaults
    it("Post Availability Defaults Test", function (done) {

        //Calls API
        globals.availability.postAvailabilityDefaults('POST', '/availability/defaults', globals.port, globals.host, global.testToken, requestAvailDefault, function (data, status) {

            //Expects Status 200
            expect(status).to.equal(200);
            done();
        })
    });

    //Tests Post Availability Defaults For Error
    it("Post Availability Defaults For Error Test", function (done) {

        //Calls API
        globals.availability.postAvailabilityDefaults('POST', '/availability/defaults', 8900, 'myhost', global.testToken, requestAvailDefault, function (data, status) {

            //Expects Status NA
            expect(status).to.equal('NA');
            done();
        })
    });

    //Tests Post Availability Defaults with wrong token
    it("Post Availability Defaults with wrong token Test", function (done) {

        //Calls API
        globals.availability.postAvailabilityDefaults('POST', '/availability/defaults', globals.port, globals.host, 'global.testToken', requestAvailDefault, function (data, status) {

            //Expects Status 401
            expect(status).to.equal(401);
            done();
        })
    });

    //Tests Post Availability Defaults with invalid day
    it("Post Availability Defaults with invalid day Test", function (done) {

        var requestAvailDefaultInvalidDay = '[  {"day": "amondaya","slots": ["P" ,"A" ,"E"] } ]'

        //Calls API
        globals.availability.postAvailabilityDefaults('POST', '/availability/defaults', globals.port, globals.host, global.testToken, requestAvailDefaultInvalidDay, function (data, status) {

            //Expects Status 403
            expect(status).to.equal(403);
            done();
        })
    });

    //Tests Post Availability Defaults with invalid slot
    it("Post Availability Defaults with invalid slot Test", function (done) {

        var requestAvailDefaultInvalidDaySlot = '[  {"day": "monday","slots": ["P" ,"Z" ,"E"] } ]'

        //Calls API
        globals.availability.postAvailabilityDefaults('POST', '/availability/defaults', globals.port, globals.host, global.testToken, requestAvailDefaultInvalidDaySlot, function (data, status) {

            //Expects Status 403
            expect(status).to.equal(403);
            done();
        })
    });

});