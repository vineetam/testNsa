'use strict';

//Include modules required
var globals = require('../../global')
var nationalservicealliance = require('../../nationalservicealliance')
var https = require('https')
var chai = require('chai');
var expect = chai.expect

//Describes test cases for Welcome API
describe('Welcome Resource', function () {

  //Tests Get Welcome
  it("Get Welcome Test", function (done) {

    //Calls API
    globals.welcome.getWelcome('/', 'GET', globals.port,globals.host,function (data, status) {

      //Expects Status 200
      expect(status).to.equal(200)
      done()
    })
  })

//Tests Get Welcome For Error
  it("Get Welcome For Error Test", function (done) {

    //Calls API
    globals.welcome.getWelcome('/', 'GET', 8900, 'myhost',function (data, status) {

      //Expects Status NA
      expect(status).to.equal('NA')
      done()
    })
  })

});
