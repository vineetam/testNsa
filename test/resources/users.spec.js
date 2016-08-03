'use strict';

//Include modules required
var globals = require('../../global')
var nsa = require('../../nationalservicealliance')()
var https = require('https')
var chai = require('chai');
var expect = chai.expect
var global = require('../testGlobal.js')


//Describes test cases for Users API
describe('User Resource Test', function () {

    //Tests Get User Details 
    it("Get User Details Test", function (done) {

        //Calls API
        globals.users.getUsers('GET', '/users/22',globals.port,globals.host, global.testToken, function (data, status) {

            //Expects Status 200
            expect(status).to.equal(200);
            done();

        })


    });
    
    //Tests Get User Details For Error
    it("Get User Details For Error Test", function (done) {

        //Calls API
        globals.users.getUsers('GET', '/users/22',8900, 'myhost', global.testToken, function (data, status) {

            //Expects Status NA
            expect(status).to.equal('NA');
            done();

        })


    });

    //Tests Get User Details With Wrong ID
    it("Get User Details With Wrong ID Test", function (done) {

        //Calls API
        globals.users.getUsers('GET', '/users/23',globals.port,globals.host, global.testToken, function (data, status) {

            //Expects Status 401
            expect(status).to.equal(401);
            done();

        })


    });

    //Tests Get User Details With Wrong Token
    it("Get User Details With Wrong Token Test", function (done) {

        //Calls API
        globals.users.getUsers('GET', '/users/22',globals.port,globals.host, 'global.testToken', function (data, status) {

            //Expects Status 401
            expect(status).to.equal(401);
            done();

        })


    });


    //Tests Update User Details 
    it("Update User Details Test", function (done) {

        //Sets Request Data
        var requestData = JSON.stringify({
            "firstName": "John",
            "lastName": "Doe",
            "email": "john.doe@test.com"
        })

        //Calls API
        globals.users.postUsers('PUT', '/users/22',globals.port,globals.host, global.testToken, requestData, function (data, status) {

            //Expects Status 200
            expect(status).to.equal(200);
            done();

        })


    });
    
    //Tests Update User Details For Error
    it("Update User Details For Error Test", function (done) {

        //Sets Request Data
        var requestData = JSON.stringify({
            "firstName": "John",
            "lastName": "Doe",
            "email": "john.doe@test.com"
        })

        //Calls API
        globals.users.postUsers('PUT', '/users/22',8900, 'myhost', global.testToken, requestData, function (data, status) {

            //Expects Status NA
            expect(status).to.equal('NA');
            done();

        })


    });

    //Tests Update User Details Without Body
    it("Update User Details Without Body Test", function (done) {


        //Calls API
        globals.users.postUsers('PUT', '/users/22',globals.port,globals.host, global.testToken, '', function (data, status) {

            //Expects Status 403
            expect(status).to.equal(403);
            done();

        })


    });

    //Tests Update User Details With Wrong Token
    it("Update User Details Test With Wrong Token", function (done) {

        //Sets Request Data
        var requestData = JSON.stringify({
            "firstName": "John",
            "lastName": "Doe",
            "email": "john.doe@test.com"
        })

        //Calls API
        globals.users.postUsers('PUT', '/users/22',globals.port,globals.host, 'global.testToken', requestData, function (data, status) {

            //Expects Status 401
            expect(status).to.equal(401);
            done();

        })


    });

    //Tests Update User Details Duplicate
    it("Update User Details Duplicate Test", function (done) {

        //Sets Request Data
        var requestData = JSON.stringify({
            "firstName": "John",
            "lastName": "Doe",
            "email": "john.doe@test.com"
        })

        //Calls API
        globals.users.postUsers('PUT', '/users/22',globals.port,globals.host, global.testToken, requestData, function (data, status) {

            //Expects Status 403
            expect(status).to.equal(403);
            done();

        })


    });

    //Tests Update User Details With Invalid ID
    it("Update User Details Test With Invalid ID", function (done) {

        //Sets Request Data
        var requestData = JSON.stringify({
            "firstName": "John",
            "lastName": "Doe",
            "email": "john.doe@test.com"
        })

        //Calls API
        globals.users.postUsers('PUT', '/users/23',globals.port,globals.host, global.testToken, requestData, function (data, status) {

            //Expects Status 403
            expect(status).to.equal(403);
            done();

        })


    });

    //Tests Update User Details Without FirstName
    it("Update User Details Test Without FirstName", function (done) {

        //Sets Request Data
        var requestData = JSON.stringify({


            "lastName": "Doe",
            "email": "john.doe@test.com"
        })

        //Calls API
        globals.users.postUsers('PUT', '/users/22',globals.port,globals.host, global.testToken, requestData, function (data, status) {

            //Expects Status 403
            expect(status).to.equal(403);
            done();

        })
    })

    //Tests Update User Details Without LastName
    it("Update User Details Test Without LastName", function (done) {

        //Sets Request Data
        var requestData = JSON.stringify({

            "firstName": "John",

            "email": "john.doe@test.com"
        })

        //Calls API
        globals.users.postUsers('PUT', '/users/22',globals.port,globals.host, global.testToken, requestData, function (data, status) {

            //Expects Status 403
            expect(status).to.equal(403);
            done();

        })


    });

    //Tests Update User Details Without Email
    it("Update User Details Test Without Email", function (done) {

        //Sets Request Data
        var requestData = JSON.stringify({

            "firstName": "John",
            "lastName": "Doe",

        })

        //Calls API
        globals.users.postUsers('PUT', '/users/22',globals.port,globals.host, global.testToken, requestData, function (data, status) {

            //Expects Status 403
            expect(status).to.equal(403);
            done();

        })


    });


    //Tests Update User Details With Invalid Email
    it("Update User Details Test With Invalid Email", function (done) {

        //Sets Request Data
        var requestData = JSON.stringify({

            "firstName": "John",
            "lastName": "Doe",
            "email": "john.doetest.com"
        })

        //Calls API
        globals.users.postUsers('PUT', '/users/22',globals.port,globals.host, global.testToken, requestData, function (data, status) {

            //Expects Status 403
            expect(status).to.equal(403);
            done();

        })


    });


    //Tests Update User Password 
    it("Update User Password Test", function (done) {

        //Sets Request Data
        var requestData = JSON.stringify({
            "oldPassword": "is09nyc2",
            "newPassword": "is09nyc1"
        })

        //Calls API
        globals.users.putUserPassword('PUT', '/users/22/password',globals.port,globals.host, global.testToken, requestData, function (data, status) {

            //Expects Status 200
            expect(status).to.equal(200);
            done();

        })

    });
    
     //Tests Update User Password For Error
    it("Update User Password For Error Test", function (done) {

        //Sets Request Data
        var requestData = JSON.stringify({
            "oldPassword": "is09nyc2",
            "newPassword": "is09nyc1"
        })

        //Calls API
        globals.users.putUserPassword('PUT', '/users/22/password',8900, 'myhost', global.testToken, requestData, function (data, status) {

            //Expects Status NA
            expect(status).to.equal('NA');
            done();

        })

    });

    //Tests Update User Password Without Body
    it("Update User Password Without Body Test", function (done) {

        //Calls API
        globals.users.putUserPassword('PUT', '/users/22/password',globals.port,globals.host, global.testToken, '', function (data, status) {

            //Expects Status 403
            expect(status).to.equal(403);
            done();

        })

    });


    //Tests Update User Password With Wrong Token
    it("Update User Password Test With Wrong Token", function (done) {

        //Sets Request Data
        var requestData = JSON.stringify({
            "oldPassword": "is09nyc1",
            "newPassword": "is09nyc2"
        })

        //Calls API
        globals.users.putUserPassword('PUT', '/users/22/password',globals.port,globals.host, 'global.testToken', requestData, function (data, status) {

            //Expects Status 401
            expect(status).to.equal(401);
            done();

        })

    });

    //Tests Update User Password Duplicate
    it("Update User Password Duplicate Test", function (done) {

        //Sets Request Data
        var requestData = JSON.stringify({
            "oldPassword": "is09nyc2",
            "newPassword": "is09nyc1"
        })

        //Calls API
        globals.users.putUserPassword('PUT', '/users/22/password',globals.port,globals.host, global.testToken, requestData, function (data, status) {

            //Expects Status 403
            expect(status).to.equal(403);
            done();

        })

    });

    //Tests Update User Password With Invalid ID
    it("Update User Password Test With Invalid ID", function (done) {

        //Sets Request Data
        var requestData = JSON.stringify({
            "oldPassword": "is09nyc1",
            "newPassword": "is09nyc2"
        })

        //Calls API
        globals.users.putUserPassword('PUT', '/users/23/password',globals.port,globals.host, global.testToken, requestData, function (data, status) {

            //Expects Status 403
            expect(status).to.equal(403);
            done();

        })

    });

    //Tests Update User Password Without Old Password
    it("Update User Password Test Without Old Password", function (done) {

        //Sets Request Data
        var requestData = JSON.stringify({

            "newPassword": "is09nyc2"
        })

        //Calls API
        globals.users.putUserPassword('PUT', '/users/22/password',globals.port,globals.host,global.testToken, requestData, function (data, status) {

            //Expects Status 403
            expect(status).to.equal(403);
            done();

        })

    });

    //Tests Update User Password Without New Password
    it("Update User Password Test Without New Password", function (done) {

        //Sets Request Data
        var requestData = JSON.stringify({
            "oldPassword": "is09nyc1",

        })

        //Calls API
        globals.users.putUserPassword('PUT', '/users/22/password',globals.port,globals.host, global.testToken, requestData, function (data, status) {

            //Expects Status 403
            expect(status).to.equal(403);
            done();

        })

    });

    //Tests Update User Password With Same New Password as Old
    it("Update User Password Test With Same New Password as Old", function (done) {

        //Sets Request Data
        var requestData = JSON.stringify({
            "oldPassword": "is09nyc2",
            "newPassword": "is09nyc2"
        })

        //Calls API
        globals.users.putUserPassword('PUT', '/users/22/password',globals.port,globals.host, global.testToken, requestData, function (data, status) {

            //Expects Status 403
            expect(status).to.equal(403);
            done();

        })

    });

});
