'use strict';

//Include modules required
var globals = require('../../global')
var nsa = require('../../nationalservicealliance')()
var https = require('https')
var chai = require('chai');
var expect = chai.expect
var global = require('../testGlobal.js')

//Describes test cases for Dispatches API
describe('Dispatches Resource Test', function () {

    //Test Get Dispatches 
    it("Get Dispatches Test", function (done) {

        //Calls API
        globals.dispatches.getDispatches('GET', '/dispatches', globals.port,globals.host,global.testToken, function (data, status) {

            //Expects Status 200
            expect(status).to.equal(200);
            done();

        })


    });
    
    //Test Get Dispatches For Error
    it("Get Dispatches For Error Test", function (done) {

        //Calls API
        globals.dispatches.getDispatches('GET', '/dispatches',8900, 'myhost',global.testToken, function (data, status) {

            //Expects Status NA
            expect(status).to.equal('NA');
            done();

        })


    });

    //Test Get Dispatches With Wrong Token
    it("Get Dispatches With Wrong Token Test", function (done) {

        //Calls API
        globals.dispatches.getDispatches('GET', '/dispatches',globals.port,globals.host, 'global.testToken', function (data, status) {

            //Expects Status 401
            expect(status).to.equal(401);
            done();

        })


    });

    //Tests Get Dispatches By Dispatch Number 
    it("Get Dispatches By Dispatch Number Test", function (done) {

        //Calls API
        globals.dispatches.getDispatchesByDispatchNumber('GET', '/dispatches/NYC201509256146',globals.port,globals.host, global.testToken, function (data, status) {

            //Expects Status 200
            expect(status).to.equal(200);
            done();

        })


    });
    
    //Tests Get Dispatches By Dispatch Number For Error
    it("Get Dispatches By Dispatch Number For Error Test", function (done) {

        //Calls API
        globals.dispatches.getDispatchesByDispatchNumber('GET', '/dispatches/NYC201509256146',8900, 'myhost', global.testToken, function (data, status) {

            //Expects Status NA
            expect(status).to.equal('NA');
            done();

        })


    });

    //Tests Get Dispatches By Dispatch Number With Wrong Token
    it("Get Dispatches By Dispatch Number With Wrong Token Test", function (done) {

        //Calls API
        globals.dispatches.getDispatchesByDispatchNumber('GET', '/dispatches/NYC201509256146',globals.port,globals.host, 'global.testToken', function (data, status) {

            //Expects Status 401
            expect(status).to.equal(401);
            done();

        })


    });

    //Tests Get Dispatches By Invalid Dispatch Number 
    it("Get Dispatches By Invalid Dispatch Number Test", function (done) {

        //Calls API
        globals.dispatches.getDispatchesByDispatchNumber('GET', '/dispatches/NYC20150925614',globals.port,globals.host, global.testToken, function (data, status) {

            //Expects Status 403
            expect(status).to.equal(403);
            done();

        })


    });

    //Tests Get Dispatches Attachments 
    it("Get Dispatches Attachments Test", function (done) {

        //Calls API
        globals.dispatches.getDispatchesAttachments('GET', '/dispatches/NYC201509256146/attachments',globals.port,globals.host, global.testToken, function (data, status) {

            //Expects Status 200
            expect(status).to.equal(200);
            done();

        })


    });
    
    //Tests Get Dispatches Attachments For Error
    it("Get Dispatches Attachments For Error Test", function (done) {

        //Calls API
        globals.dispatches.getDispatchesAttachments('GET', '/dispatches/NYC201509256146/attachments',8900, 'myhost', global.testToken, function (data, status) {

            //Expects Status NA
            expect(status).to.equal('NA');
            done();

        })


    });

    //Tests Get Dispatches Attachments With Wrong Token
    it("Get Dispatches Attachments With Wrong Token Test", function (done) {

        //Calls API
        globals.dispatches.getDispatchesAttachments('GET', '/dispatches/NYC201509256146/attachments',globals.port,globals.host, 'global.testToken', function (data, status) {

            //Expects Status 401
            expect(status).to.equal(401);
            done();

        })


    });

    //Tests Get Dispatches Attachments With Invalid DispatchNumber 
    it("Get Dispatches Attachments With Invalid DispatchNumber Test", function (done) {

        //Calls API
        globals.dispatches.getDispatchesAttachments('GET', '/dispatches/NYC20150925614/attachments',globals.port,globals.host, global.testToken, function (data, status) {

            //Expects Status 403
            expect(status).to.equal(403);
            done();

        })


    });

    //Tests Update Dispatches By Dispatch Number 
    it("Update Dispatches By Dispatch Number Test", function (done) {

        //Sets request data
        var requestData = JSON.stringify({
            "serial": "serial124",
            "notes": "Replaced part"
        })

        //Calls API
        globals.dispatches.updateDispatchesByDispatchNumber('PATCH', '/dispatches/NYC201509256146',globals.port,globals.host, global.testToken, requestData, function (data, status) {

            //Expects Status 200
            expect(status).to.equal(200);
            done();

        })

    });
    
    //Tests Update Dispatches By Dispatch Number For Error
    it("Update Dispatches By Dispatch Number For Error Test", function (done) {

        //Sets request data
        var requestData = JSON.stringify({
            "serial": "serial124",
            "notes": "Replaced part"
        })

        //Calls API
        globals.dispatches.updateDispatchesByDispatchNumber('PATCH', '/dispatches/NYC201509256146',8900, 'myhost', global.testToken, requestData, function (data, status) {

            //Expects Status NA
            expect(status).to.equal('NA');
            done();

        })

    });

    //Tests Update Dispatches By Dispatch Number Without Body
    it("Update Dispatches By Dispatch Number Without Body Test", function (done) {

        //Calls API
        globals.dispatches.updateDispatchesByDispatchNumber('PATCH', '/dispatches/NYC201509256146',globals.port,globals.host, global.testToken, '', function (data, status) {

            //Expects Status 403
            expect(status).to.equal(403);
            done();

        })

    });

    //Tests Update Dispatches By Dispatch Number Without Serial
    it("Update Dispatches By Dispatch Number Without Serial Test", function (done) {

        //Sets request data
        var requestData = JSON.stringify({

            "notes": "Replaced part"
        })

        //Calls API
        globals.dispatches.updateDispatchesByDispatchNumber('PATCH', '/dispatches/NYC201509256146',globals.port,globals.host, global.testToken, requestData, function (data, status) {

            //Expects Status 200
            expect(status).to.equal(200);
            done();

        })

    });

    //Tests Update Dispatches By Dispatch Number Without Notes
    it("Update Dispatches By Dispatch Number Test", function (done) {

        //Sets request data
        var requestData = JSON.stringify({
            "serial": "serial124"

        })

        //Calls API
        globals.dispatches.updateDispatchesByDispatchNumber('PATCH', '/dispatches/NYC201509256146',globals.port,globals.host, global.testToken, requestData, function (data, status) {

            //Expects Status 200
            expect(status).to.equal(200);
            done();

        })

    });

    //Tests Update Dispatches By Dispatch Number With Wrong Token
    it("Update Dispatches By Dispatch Number With Wrong Token Test", function (done) {

        //Sets request data
        var requestData = JSON.stringify({
            "serial": "serial124",
            "notes": "Replaced part"
        })

        //Calls API
        globals.dispatches.updateDispatchesByDispatchNumber('PATCH', '/dispatches/NYC201509256146', globals.port,globals.host,'global.testToken', requestData, function (data, status) {

            //Expects Status 401
            expect(status).to.equal(401);
            done();

        })

    });

    //Tests Update Dispatches By Invalid Dispatch Number 
    it("Update Dispatches By Invalid Dispatch Number Test", function (done) {

        //Sets request data
        var requestData = JSON.stringify({
            "serial": "serial124",
            "notes": "Replaced part"
        })

        //Calls API
        globals.dispatches.updateDispatchesByDispatchNumber('PATCH', '/dispatches/NYC20150925614',globals.port,globals.host, global.testToken, requestData, function (data, status) {

            //Expects Status 403
            expect(status).to.equal(403);
            done();

        })

    });

    //Tests Update Dispatches Schedules
    it("Update Dispatches Schedules Test", function (done) {

        //Sets request data
        var requestData = JSON.stringify({
            "newDate": "2016-06-14",
            "timeSlot": "A",
            "reason": 1,
            "notes": "Customer did not answer. Waited for 10 minutes"
        })

        //Calls API
        globals.dispatches.updateDispatchesSchedules('POST', '/dispatches/NYC201509256146/schedules',globals.port,globals.host, global.testToken, requestData, function (data, status) {

            //Expects Status 200
            expect(status).to.equal(200);
            done();

        })
    })
    
     //Tests Update Dispatches Schedules For Error
    it("Update Dispatches Schedules For Error Test", function (done) {

        //Sets request data
        var requestData = JSON.stringify({
            "newDate": "2016-06-14",
            "timeSlot": "A",
            "reason": 1,
            "notes": "Customer did not answer. Waited for 10 minutes"
        })

        //Calls API
        globals.dispatches.updateDispatchesSchedules('POST', '/dispatches/NYC201509256146/schedules',8900, 'myhost', global.testToken, requestData, function (data, status) {

            //Expects Status NA
            expect(status).to.equal('NA');
            done();

        })
    })

    //Tests Update Dispatches Schedules Without Body
    it("Update Dispatches Schedules Without Body Test", function (done) {

        //Calls API
        globals.dispatches.updateDispatchesSchedules('POST', '/dispatches/NYC201509256146/schedules',globals.port,globals.host, global.testToken, '', function (data, status) {

            //Expects Status 403
            expect(status).to.equal(403);
            done();

        })
    })

    //Tests Update Dispatches Schedules Without newDate
    it("Update Dispatches Schedules Without newDate Test", function (done) {

        //Sets request data
        var requestData = JSON.stringify({

            "timeSlot": "A",
            "reason": 1,
            "notes": "Customer did not answer. Waited for 10 minutes"
        })

        //Calls API
        globals.dispatches.updateDispatchesSchedules('POST', '/dispatches/NYC201509256146/schedules',globals.port,globals.host, global.testToken, requestData, function (data, status) {

            //Expects Status 403
            expect(status).to.equal(403);
            done();

        })
    })

    //Tests Update Dispatches Schedules Without Timeslot
    it("Update Dispatches Schedules  Without Timeslot Test", function (done) {

        //Sets request data
        var requestData = JSON.stringify({
            "newDate": "2016-06-14",

            "reason": 1,
            "notes": "Customer did not answer. Waited for 10 minutes"
        })

        //Calls API
        globals.dispatches.updateDispatchesSchedules('POST', '/dispatches/NYC201509256146/schedules',globals.port,globals.host, global.testToken, requestData, function (data, status) {

            //Expects Status 403
            expect(status).to.equal(403);
            done();

        })
    })

    //Tests Update Dispatches Schedules Without reason
    it("Update Dispatches Schedules Without Reason Test", function (done) {

        //Sets request data
        var requestData = JSON.stringify({
            "newDate": "2016-06-14",
            "timeSlot": "A",

            "notes": "Customer did not answer. Waited for 10 minutes"
        })

        //Calls API
        globals.dispatches.updateDispatchesSchedules('POST', '/dispatches/NYC201509256146/schedules',globals.port,globals.host, global.testToken, requestData, function (data, status) {

            //Expects Status 403
            expect(status).to.equal(403);
            done();

        })
    })

    //Tests Update Dispatches Schedules Without notes
    it("Update Dispatches Schedules Without Notes Test", function (done) {

        //Sets request data
        var requestData = JSON.stringify({
            "newDate": "2016-06-14",
            "timeSlot": "A",
            "reason": 1

        })

        //Calls API
        globals.dispatches.updateDispatchesSchedules('POST', '/dispatches/NYC201509256146/schedules',globals.port,globals.host, global.testToken, requestData, function (data, status) {

            //Expects Status 200
            expect(status).to.equal(200);
            done();

        })
    })

    //Tests Update Dispatches Schedules With Wrong Token
    it("Update Dispatches Schedules With Wrong Token Test", function (done) {

        //Sets request data
        var requestData = JSON.stringify({
            "newDate": "2016-06-14",
            "timeSlot": "A",
            "reason": 1,
            "notes": "Customer did not answer. Waited for 10 minutes"
        })

        //Calls API
        globals.dispatches.updateDispatchesSchedules('POST', '/dispatches/NYC201509256146/schedules', globals.port,globals.host,'global.testToken', requestData, function (data, status) {

            //Expects Status 401
            expect(status).to.equal(401);
            done();

        })
    })

    //Tests Update Dispatches Schedules With Invalid Dispatch Number
    it("Update Dispatches Schedules With Invalid Dispatch Number Test", function (done) {

        //Sets request data
        var requestData = JSON.stringify({
            "newDate": "2016-06-14",
            "timeSlot": "A",
            "reason": 1,
            "notes": "Customer did not answer. Waited for 10 minutes"
        })

        //Calls API
        globals.dispatches.updateDispatchesSchedules('POST', '/dispatches/NYC20150925614/schedules',globals.port,globals.host, global.testToken, requestData, function (data, status) {

            //Expects Status 403
            expect(status).to.equal(403);
            done();

        })
    })

    //Tests Update Dispatches Completions
    it("Update Dispatches Completions Test", function (done) {

        //Sets request data
        var requestData = JSON.stringify({
            "runDate": "2016-07-07",
            "serialNumber": "06861",
            "statusCode": "CP",
            "servicePerformed": "open the equpment and replace the screen.",
            "notes": "doing good job",
            "repairCode": "PTEL",
            "Action": "closeBill",
            "repairSuccessful": true
        })

        //Calls API
        globals.dispatches.updateDispatchesCompletions('POST', '/dispatches/NYC201509256146/completions/close',globals.port,globals.host, global.testToken, requestData, function (data, status) {

            //Expects Status 200
            expect(status).to.equal(200);
            done();

        })

    });
    
     //Tests Update Dispatches Completions For Error
    it("Update Dispatches Completions For Error Test", function (done) {

        //Sets request data
        var requestData = JSON.stringify({
            "runDate": "2016-07-07",
            "serialNumber": "06861",
            "statusCode": "CP",
            "servicePerformed": "open the equpment and replace the screen.",
            "notes": "doing good job",
            "repairCode": "PTEL",
            "Action": "closeBill",
            "repairSuccessful": true
        })

        //Calls API
        globals.dispatches.updateDispatchesCompletions('POST', '/dispatches/NYC201509256146/completions/close',8900, 'myhost', global.testToken, requestData, function (data, status) {

            //Expects Status NA
            expect(status).to.equal('NA');
            done();

        })

    });

    //Tests Update Dispatches Completions Without Body
    it("Update Dispatches Completions Without Body Test", function (done) {

        //Calls API
        globals.dispatches.updateDispatchesCompletions('POST', '/dispatches/NYC201509256146/completions/close',globals.port,globals.host, global.testToken, '', function (data, status) {

            //Expects Status 403
            expect(status).to.equal(403);
            done();

        })

    });

    //Tests Update Dispatches Completions With Wrong Token
    it("Update Dispatches Completions With Wrong Token Test", function (done) {

        //Sets request data
        var requestData = JSON.stringify({
            "runDate": "2016-07-07",
            "serialNumber": "06861",
            "statusCode": "CP",
            "servicePerformed": "open the equpment and replace the screen.",
            "notes": "doing good job",
            "repairCode": "PTEL",
            "Action": "closeBill",
            "repairSuccessful": true
        })

        //Calls API
        globals.dispatches.updateDispatchesCompletions('POST', '/dispatches/NYC201509256146/completions/close',globals.port,globals.host, 'global.testToken', requestData, function (data, status) {

            //Expects Status 401
            expect(status).to.equal(401);
            done();

        })

    });

    //Tests Update Dispatches Completions With Invalid DispatchNumber
    it("Update Dispatches Completions With Invalid DispatchNumber Test", function (done) {

        //Sets request data
        var requestData = JSON.stringify({
            "runDate": "2016-07-07",
            "serialNumber": "06861",
            "statusCode": "CP",
            "servicePerformed": "open the equpment and replace the screen.",
            "notes": "doing good job",
            "repairCode": "PTEL",
            "Action": "closeBill",
            "repairSuccessful": true
        })

        //Calls API
        globals.dispatches.updateDispatchesCompletions('POST', '/dispatches/NYC20150925614/completions/close',globals.port,globals.host, global.testToken, requestData, function (data, status) {

            //Expects Status 403
            expect(status).to.equal(403);
            done();

        })

    });

    //Tests Add Dispatches Attachments
    it("Add Dispatches Attachments Test", function (done) {

        //Sets request data
        var requestData = JSON.stringify([
            {
                "attachmentTypeID": "1",
                "extension": ".jpg"
            },
            {
                "attachmentTypeID": "2",
                "extension": ".txt"
            }

        ])

        //Calls API
        globals.dispatches.addDispatchesAttachments('POST', '/dispatches/NYC201509256146/attachments',globals.port,globals.host, global.testToken, requestData, function (data, status) {

            //Expects Status 200
            expect(status).to.equal(200);
            done();

        })

    });
    
     //Tests Add Dispatches Attachments For Error
    it("Add Dispatches Attachments For Error Test", function (done) {

        //Sets request data
        var requestData = JSON.stringify([
            {
                "attachmentTypeID": "1",
                "extension": ".jpg"
            },
            {
                "attachmentTypeID": "2",
                "extension": ".txt"
            }

        ])

        //Calls API
        globals.dispatches.addDispatchesAttachments('POST', '/dispatches/NYC201509256146/attachments',8900, 'myhost', global.testToken, requestData, function (data, status) {

            //Expects Status NA
            expect(status).to.equal('NA');
            done();

        })

    });


    //Tests Add Dispatches Attachments Without Body
    it("Add Dispatches Attachments Without Body Test", function (done) {

        //Calls API
        globals.dispatches.addDispatchesAttachments('POST', '/dispatches/NYC201509256146/attachments',globals.port,globals.host, global.testToken, '', function (data, status) {

            //Expects Status 403
            expect(status).to.equal(403);
            done();

        })

    });

    //Tests Add Dispatches Attachments Without AttachmentID
    it("Add Dispatches Attachments Without AttachmentID Test", function (done) {

        //Sets request data
        var requestData = JSON.stringify([
            {

                "extension": ".jpg"
            },
            {
                "attachmentTypeID": "2",
                "extension": ".txt"
            }

        ])

        //Calls API
        globals.dispatches.addDispatchesAttachments('POST', '/dispatches/NYC201509256146/attachments',globals.port,globals.host, global.testToken, requestData, function (data, status) {

            //Expects Status 403
            expect(status).to.equal(403);
            done();

        })

    });

    //Tests Add Dispatches Attachments Without Extension
    it("Add Dispatches Attachments Without Extension Test", function (done) {

        //Sets request data
        var requestData = JSON.stringify([
            {
                "attachmentTypeID": "1",

            },
            {
                "attachmentTypeID": "2",
                "extension": ".txt"
            }

        ])

        //Calls API
        globals.dispatches.addDispatchesAttachments('POST', '/dispatches/NYC201509256146/attachments',globals.port,globals.host, global.testToken, requestData, function (data, status) {

            //Expects Status 403
            expect(status).to.equal(403);
            done();

        })

    });

    //Tests Add Dispatches Attachments With Wrong DispatchNumber
    it("Add Dispatches Attachments With Wrong DispatchNumber Test", function (done) {

        //Sets request data
        var requestData = JSON.stringify([
            {
                "attachmentTypeID": "1",
                "extension": ".jpg"
            },
            {
                "attachmentTypeID": "2",
                "extension": ".txt"
            }

        ])

        //Calls API
        globals.dispatches.addDispatchesAttachments('POST', '/dispatches/NYC20150925614/attachments', globals.port,globals.host,global.testToken, requestData, function (data, status) {

            //Expects Status 403
            expect(status).to.equal(403);
            done();

        })

    });


    //Tests Add Dispatches Attachments With Wrong Token
    it("Add Dispatches Attachments With Wrong Token Test", function (done) {

        //Sets request data
        var requestData = JSON.stringify([
            {
                "attachmentTypeID": "1",
                "extension": ".jpg"
            },
            {
                "attachmentTypeID": "2",
                "extension": ".txt"
            }

        ])

        //Calls API
        globals.dispatches.addDispatchesAttachments('POST', '/dispatches/NYC201509256146/attachments',globals.port,globals.host, 'global.testToken', requestData, function (data, status) {

            //Expects Status 401
            expect(status).to.equal(401);
            done();

        })

    });



});

