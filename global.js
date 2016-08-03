'use strict';

//Declare global variables for user defined modules 
exports.nsaMethods = require('./NsaMethods')
exports.nsaBasicMethod = require('./NsaMethods.basic')

//Declare global variables for user defined modules under resource
exports.welcome = require('./resources/welcome')
exports.authorizations = require('./resources/authorizations')
exports.users = require('./resources/users')
exports.availability = require('./resources/availability')
exports.dispatches = require('./resources/dispatches')
exports.payments = require('./resources/payments')

//Declare global variables for system defined modules 
exports.https = require('https')

//Declare global variables for default host and port of APIs 
exports.host = 'localhost'
exports.port = 8000

//Declare default token value
exports.token = ''

//Exception handling string
exports.errStatusCode= 'NA'
exports.errBody = 'Error in Connectivity'





