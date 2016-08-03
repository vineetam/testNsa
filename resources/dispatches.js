'use strict';

// Include global module
var globals = require('../global')

module.exports = {

    //List Dispatches method request
    getDispatches: function (method, path, port, host, token, success) {

        //Define Bearer authorization
        token = 'Bearer ' + token

        //Sets options for request
        var options = {
            host: host,
            port: port,
            path: path,
            method: method,
            json: true,
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

    //List Dispatches by Dispatch Number method request
    getDispatchesByDispatchNumber: function (method, path, port, host, token, success) {

        //Define Bearer authorization
        token = 'Bearer ' + token

        //Sets options for request
        var options = {
            host: host,
            port: port,
            path: path,
            method: method,
            json: true,
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

    //Update Dispatch by Dispatch Number method request
    updateDispatchesByDispatchNumber: function (method, path, port, host, token, requestData, success) {

        //Define Bearer authorization
        token = 'Bearer ' + token

        //Sets options for request
        var options = {
            host: host,
            port: port,
            path: path,
            method: method,
            json: true,
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

        //Sets request body
        request.write(requestData)

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

    //Update Dispatch Schedule by date method request
    updateDispatchesSchedules: function (method, path, port, host, token, requestData, success) {

        //Define Bearer authorization
        token = 'Bearer ' + token

        //Sets options for request
        var options = {
            host: host,
            port: port,
            path: path,
            method: method,
            json: true,
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

        //Sets request body
        request.write(requestData)

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

    //Update Dispatch Completions method request
    updateDispatchesCompletions: function (method, path, port, host, token, requestData, success) {

        //Define Bearer authorization
        token = 'Bearer ' + token

        //Sets options for request
        var options = {
            host: host,
            port: port,
            path: path,
            method: method,
            json: true,
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

        //Sets request body
        request.write(requestData)

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
    },

    //List Dispatches Attachment by Dispatch Number method request
    getDispatchesAttachments: function (method, path, port, host, token, success) {

        //Define Bearer authorization
        token = 'Bearer ' + token

        //Sets options for request
        var options = {
            host: host,
            port: port,
            path: path,
            method: method,
            json: true,
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

    //Add Dispatches Attachment by Dispatch Number method request
    addDispatchesAttachments: function (method, path, port, host, token, requestData, success) {

        //Define Bearer authorization
        token = 'Bearer ' + token

        //Sets options for request
        var options = {
            host: host,
            port: port,
            path: path,
            method: method,
            json: true,
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

        //Sets request body
        request.write(requestData)

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
    }

}