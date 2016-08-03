'use strict';

// Include global module
var globals = require('./global')

//Handles https
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

//Calls methods from resources
module.exports = {

    welcome: function (path, method, success) {
        return globals.welcome.getWelcome(path, method,globals.port,globals.host, success)
    },

    //Users Methods
    getUsers: function (path, method, success) {
        return globals.users.getUsers(method, path,globals.port,globals.host, globals.token, success)
    },

    postUsers: function (path, method, requestData, success) {
        return globals.users.postUsers(method, path,globals.port,globals.host, globals.token, requestData, success)
    },

    putUserPassword: function (path, method, requestData, success) {
        return globals.users.putUserPassword(method, path,globals.port,globals.host, globals.token, requestData, success)
    },

    //Authorizations methods
    postAuthorizations: function (path, method, username, password, success) {
        return globals.authorizations.postAuthorizations(method, path,globals.port,globals.host, username, password, success)
    },

    postRefreshAuthorizations: function (path, method, success) {
        return globals.authorizations.postRefreshAuthorizations(method, path,globals.port,globals.host, globals.token, success)
    },

    logout: function (path, method, success) {
        return globals.authorizations.logout(method, path,globals.port,globals.host, globals.token, success)
    },

    //Availability Methods
    getAvailability: function (path, method, success) {
        return globals.availability.getAvailability(method, path,globals.port,globals.host, globals.token, success)
    },

    getAvailabilityDefaults: function (path, method, success) {
        return globals.availability.getAvailabilityDefaults(method, path,globals.port,globals.host, globals.token, success)
    },

    postAvailability: function (path, method, requestData, success) {
        return globals.availability.postAvailability(method, path,globals.port,globals.host, globals.token, requestData, success)
    },

    putAvailabilityByDate: function (path, method, requestData, success) {
        return globals.availability.putAvailabilityByDate(method, path, globals.port,globals.host,globals.token, requestData, success)
    },

    deleteAvailabilityByDate: function (path, method, success) {
        return globals.availability.deleteAvailabilityByDate(method, path,globals.port,globals.host, globals.token, success)
    },

    postAvailabilityDefaults: function (path, method, requestData, success) {
        return globals.availability.postAvailabilityDefaults(method, path,globals.port,globals.host, globals.token, requestData, success)
    },

    //Dispatches Methods
    getDispatches: function (path, method, success) {
        return globals.dispatches.getDispatches(method, path,globals.port,globals.host, globals.token, success)
    },

    getDispatchesByDispatchNumber: function (path, method, success) {
        return globals.dispatches.getDispatchesByDispatchNumber(method, path,globals.port,globals.host, globals.token, success)
    },

    updateDispatchesByDispatchNumber: function (path, method, requestData, success) {
        return globals.dispatches.updateDispatchesByDispatchNumber(method, path, globals.port,globals.host,globals.token, requestData, success)
    },

    updateDispatchesSchedules: function (path, method, requestData, success) {
        return globals.dispatches.updateDispatchesSchedules(method, path,globals.port,globals.host, globals.token, requestData, success)
    },

    updateDispatchesCompletions: function (path, method, requestData, success) {
        return globals.dispatches.updateDispatchesCompletions(method, path, globals.port,globals.host,globals.token, requestData, success)
    },

    getDispatchesAttachments: function (path, method, success) {
        return globals.dispatches.getDispatchesAttachments(method, path, globals.port,globals.host,globals.token, success)
    },

    addDispatchesAttachments: function (path, method, requestData, success) {
        return globals.dispatches.addDispatchesAttachments(method, path,globals.port,globals.host, globals.token, requestData, success)
    },

    //Payments Methods
    getPayments: function (path, method, success) {
        return globals.payments.getPayments(method, path,globals.port,globals.host, globals.token, success)
    },

    getPaymentsBatches: function (path, method, success) {
        return globals.payments.getPaymentsBatches(method, path,globals.port,globals.host, globals.token, success)
    },

    getPaymentsCalls: function (path, method, success) {
        return globals.payments.getPaymentsCalls(method, path, globals.port,globals.host,globals.token, success)
    }



}