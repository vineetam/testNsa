'use strict';

// Include global module
var globals = require('../global')

module.exports = {

    //Welcome method request
    getWelcome: function (path, method, port, host, success) {

        //Sets options for request
        var options = {
            hostname: host,
            port: port,
            path: path,
            method: method
        };

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

