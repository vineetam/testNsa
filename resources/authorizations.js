'use strict';

// Include global module
var globals = require('../global')

//Declare token
var token

module.exports = {

    //Login method request
    postAuthorizations: function (method, path, port, host, username, password, success) {

        //Define basic authorization
       var auth = username + ':' + password

        // //Sets options for request
        var options = {
            host: host,
            port: port,
            path: path,
            method: method,
            auth: auth
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

    //Refresh login method request
    postRefreshAuthorizations: function (method, path, port, host, refreshToken, success) {

        //Define token authorization
        token = 'token ' + refreshToken

        //Sets options for request
        var options = {
            host: host,
            port: port,
            path: path,
            method: method,
            headers: {
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

    //Refresh login method request
    logout: function (method, path, port, host, refreshToken, success) {

        //Define token authorization
        token = 'token ' + refreshToken

        //Sets options for request
        var options = {
            host: host,
            port: port,
            path: path,
            method: method,
            headers: {
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
                success(body, JSON.parse(response.statusCode));

            });

        });

        request.end();
    }

}