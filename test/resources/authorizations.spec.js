'use strict';

//Include modules required
var globals = require('../../global')
var nsa = require('../../nationalservicealliance')()
var https = require('https')
var chai = require('chai');
var expect = chai.expect
var global = require('../testGlobal.js')

//Describes test cases for Authorizations API
describe('Authorizations Resource Test', function () {

    //Test POST Authorizations 
    it("POST Authorizations Test", function (done) {

        //Calls API
        globals.authorizations.postAuthorizations('POST', '/authorizations', globals.port, globals.host, 'johns', 'is09nyc1', function (data, status) {

            //Expects Status 200
            expect(status).to.equal(200);
            done();

        })


    });
    
    //Test POST Authorizations for error 
    it("POST Authorizations for error  Test", function (done) {

        //Calls API
        globals.authorizations.postAuthorizations('POST', '/authorizations', 8900, 'myhost', 'johns', 'is09nyc1', function (data, status) {

            //Expects Status NA
            expect(status).to.equal('NA');
            done();

        })


    });

    //Test POST Authorizations With Wrong UserName
    it("POST Authorizations With Wrong UserName Test", function (done) {

        //Calls API
        globals.authorizations.postAuthorizations('POST', '/authorizations', globals.port, globals.host, 'cvbfg', 'is09nyc1', function (data, status) {

            //Expects Status 401
            expect(status).to.equal(401);
            done();

        })


    });

    //Test POST Authorizations Refresh
    it("POST Authorizations Refresh Test", function (done) {

        //Calls API
        globals.authorizations.postRefreshAuthorizations('POST', '/authorizations/refresh', globals.port, globals.host, global.testRefreshToken, function (data, status) {

            //Expects Status 200
            expect(status).to.equal(200);
            done();

        })


    });
    
     //Test POST Authorizations Refresh for error
    it("POST Authorizations Refresh For Error Test", function (done) {

        //Calls API
        globals.authorizations.postRefreshAuthorizations('POST', '/authorizations/refresh', 8900, 'myhost', global.testRefreshToken, function (data, status) {

            //Expects Status NA
            expect(status).to.equal('NA');
            done();

        })


    });

    //Test POST Authorizations Refresh With Wrong Token
    it("POST Authorizations Refresh With Wrong Token Test", function (done) {

        //Calls API
        globals.authorizations.postRefreshAuthorizations('POST', '/authorizations/refresh', globals.port, globals.host, 'global.testRefreshToken', function (data, status) {

            //Expects Status 401
            expect(status).to.equal(401);
            done();

        })


    });

    //Test DELETE Logout 
    it("DELETE Logout Test", function (done) {

        //Calls API
        globals.authorizations.logout('DELETE', '/logout', globals.port, globals.host, global.testRefreshToken, function (data, status) {

            //Expects Status 200
            expect(status).to.equal(200);
            done();

        })
    })
    
     //Test DELETE Logout For error
    it("DELETE Logout For Error Test", function (done) {

        //Calls API
        globals.authorizations.logout('DELETE', '/logout', 8900, 'myhost', global.testRefreshToken, function (data, status) {

            //Expects Status NA
            expect(status).to.equal('NA');
            done();

        })
    })


    //Test DELETE Logout With Non Existing Token
    it("DELETE Logout With Non Existing Token Test", function (done) {

        //Calls API
        globals.authorizations.logout('DELETE', '/logout', globals.port, globals.host, global.testRefreshToken, function (data, status) {

            //Expects Status 500
            expect(status).to.equal(500);
            done();

        })


    });


    //Test DELETE Logout With Invalid Token
    it("DELETE Logout With Invalid Token Test", function (done) {

        //Calls API
        globals.authorizations.logout('DELETE', '/logout', globals.port, globals.host, 'global.testRefreshToken', function (data, status) {

            //Expects Status 500
            expect(status).to.equal(500);
            done();

        })


    });

})