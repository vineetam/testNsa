'use strict';

// Include global module
var globals = require('../global')

module.exports = {

  //List availability method request
  getAvailability: function (method, path, port, host, token, success) {

    //Define Bearer authorization
    token = 'Bearer ' + token

    //Sets options for request
    var options = {
      host: host,
      port: port,
      path: path,
      method: method,
      headers:
      {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
    }

    //Sets request
    var request = globals.https.request(options, function (response) { });


    //Handles Host and Port Connectivity Exception
    request.on('error', function (error) {

      success(globals.errBody, globals.errStatusCode)

      return

    });

    //Fetches response body
    request.on('response', function (response) {

      var body = '';

      response.on('data', function (chunk) {
        body += chunk;
      });

      response.on('end', function () {

        //Callback method
        success(JSON.parse(body), JSON.parse(response.statusCode));
      });

    });

    request.end();
  },

  //List availability method request
  getAvailabilityDefaults: function (method, path, port, host, token, success) {

    //Define Bearer authorization
    token = 'Bearer ' + token

    //Sets options for request
    var options = {
      host: host,
      port: port,
      path: path,
      method: method,
      headers:
      {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
    }

    //Sets request
    var request = globals.https.request(options, function (response) { });

    //Handles Host and Port Connectivity Exception
    request.on('error', function (error) {

      success(globals.errBody, globals.errStatusCode)

      return

    });

    //Fetches response body
    request.on('response', function (response) {

      var body = '';

      response.on('data', function (chunk) {
        body += chunk;
      });

      response.on('end', function () {

        //Callback method
        success(JSON.parse(body), JSON.parse(response.statusCode));
      });

    });

    request.end();
  },


  //Update availability request
  postAvailability: function (method, path, port, host, token, requestData, success) {

    //Define bearer authorization
    token = 'Bearer ' + token

    //Sets options for request
    var options = {
      host: host,
      port: port,
      path: path,
      method: method,
      json: true,
      headers:
      {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
    }

    //Sets request
    var request = globals.https.request(options, function (response) { });

    //Handles Host and Port Connectivity Exception
    request.on('error', function (error) {

      success(globals.errBody, globals.errStatusCode)

      return

    });

    //Fetches response body
    request.write(requestData)

    request.on('response', function (response) {

      var body = '';

      response.on('data', function (chunk) {
        body += chunk;
      });

      response.on('end', function () {

        //Callback method
        success(JSON.parse(body), JSON.parse(response.statusCode));
      });

    });

    request.end();
  },

  //Update availability by date request
  putAvailabilityByDate: function (method, path, port, host, token, requestData, success) {

    //Define bearer authorization
    token = 'Bearer ' + token

    //Sets options for request
    var options = {
      host: host,
      port: port,
      path: path,
      method: method,
      json: true,
      headers:
      {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
    }

    //Sets request
    var request = globals.https.request(options, function (response) { });

    //Handles Host and Port Connectivity Exception
    request.on('error', function (error) {

      success(globals.errBody, globals.errStatusCode)

      return

    });

    //Fetches response body
    request.write(requestData)

    request.on('response', function (response) {

      var body = '';

      response.on('data', function (chunk) {
        body += chunk;
      });

      response.on('end', function () {

        //Callback method
        success(JSON.parse(body), JSON.parse(response.statusCode));
      });

    });

    request.end();
  },

  //Remove availability by date request
  deleteAvailabilityByDate: function (method, path, port, host, token, success) {

    //Define bearer authorization
    token = 'Bearer ' + token

    //Sets options for request
    var options = {
      host: host,
      port: port,
      path: path,
      method: method,
      json: true,
      headers:
      {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
    }

    //Sets request
    var request = globals.https.request(options, function (response) { });

    //Handles Host and Port Connectivity Exception
    request.on('error', function (error) {

      success(globals.errBody, globals.errStatusCode)

      return

    });

    //Fetches response body
    request.on('response', function (response) {

      var body = '';

      response.on('data', function (chunk) {
        body += chunk;
      });

      response.on('end', function () {

        //Callback method
        success(JSON.parse(body), JSON.parse(response.statusCode));
      });

    });

    request.end();
  },

  //Update availability defaults request
  postAvailabilityDefaults: function (method, path, port, host, token, requestData, success) {

    //Define bearer authorization
    token = 'Bearer ' + token

    //Sets options for request
    var options = {
      host: host,
      port: port,
      path: path,
      method: method,
      // json: true,
      headers:
      {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
    }

    //Sets request
    var request = globals.https.request(options, function (response) { });

    //Handles Host and Port Connectivity Exception
    request.on('error', function (error) {

      success(globals.errBody, globals.errStatusCode)

      return

    });

    //Fetches response body
    request.write(requestData)

    request.on('response', function (response) {

      var body = '';

      response.on('data', function (chunk) {
        body += chunk;
      });

      response.on('end', function () {

        //Callback method
        success(JSON.parse(body), JSON.parse(response.statusCode));
      });

    });

    request.end();
  }

}