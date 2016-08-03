'use strict';

//Include global module
var globals = require('./global')

//Declare method and path
var method,path

//Parameterized Constructor takes token parameter
function NationalServiceAlliance(token) {

    if (!(this instanceof NationalServiceAlliance)) {
        return new NationalServiceAlliance(token);
    }

    this.setToken(token);
}

//Calling API Resources
NationalServiceAlliance.prototype = {


    //Sets Token globally
    setToken: function (token) {

        globals.token = token

    },

    //Welcome method

    welcome: function (success) {
        method = globals.nsaBasicMethod.welcome.method
        path = globals.nsaBasicMethod.welcome.path
        globals.nsaMethods.welcome(path, method, success)

    },

    //Users Method
    listUsers: function (id, success) {
        method = globals.nsaBasicMethod.listUsers.method
        path = globals.nsaBasicMethod.listUsers.path
        path = path + id

        globals.nsaMethods.getUsers(path, method, success)
    },

    updateUser: function (id, requestData, success) {
        method = globals.nsaBasicMethod.updateUser.method
        path = globals.nsaBasicMethod.updateUser.path
        path = path + id

        //send requestData always in json format
        globals.nsaMethods.postUsers(path, method, JSON.stringify(requestData), success)
    },

    updateUserPassword: function (id, requestData, success) {
        method = globals.nsaBasicMethod.updateUserPassword.method
        path = globals.nsaBasicMethod.updateUserPassword.path
        path = path + id + '/password'

        //send requestData always in json format
        globals.nsaMethods.putUserPassword(path, method, JSON.stringify(requestData), success)
    },


    //Authorizations Method
    login: function (username, password, success) {
        method = globals.nsaBasicMethod.login.method
        path = globals.nsaBasicMethod.login.path
        globals.nsaMethods.postAuthorizations(path, method, username, password, success)

    },

    refreshLogin: function (success) {
        method = globals.nsaBasicMethod.refreshLogin.method
        path = globals.nsaBasicMethod.refreshLogin.path
        globals.nsaMethods.postRefreshAuthorizations(path, method, success)
    },

    logout: function (success) {
        method = globals.nsaBasicMethod.logout.method
        path = globals.nsaBasicMethod.logout.path
        globals.nsaMethods.logout(path, method, success)
    },


    //Availability Methods
    listAvailability: function (success) {
        method = globals.nsaBasicMethod.listAvailability.method
        path = globals.nsaBasicMethod.listAvailability.path
        globals.nsaMethods.getAvailability(path, method, success)
    },

    listAvailabilityDefaults: function (success) {
        method = globals.nsaBasicMethod.listAvailabilityDefaults.method
        path = globals.nsaBasicMethod.listAvailabilityDefaults.path
        globals.nsaMethods.getAvailabilityDefaults(path, method, success)
    },

    addAvailability: function (requestData, success) {
        method = globals.nsaBasicMethod.updateAvailability.method
        path = globals.nsaBasicMethod.updateAvailability.path
        globals.nsaMethods.postAvailability(path, method, JSON.stringify(requestData), success)
    },

    updateAvailabilityByDate: function (date, requestData, success) {
        method = globals.nsaBasicMethod.updateAvailabilityByDate.method
        path = globals.nsaBasicMethod.updateAvailabilityByDate.path
        path = path + date

        //send requestData always in json format
        globals.nsaMethods.putAvailabilityByDate(path, method, JSON.stringify(requestData), success)
    },

    removeAvailabilityByDate: function (date, success) {
        method = globals.nsaBasicMethod.removeAvailabilityByDate.method
        path = globals.nsaBasicMethod.removeAvailabilityByDate.path
        path = path + date
        globals.nsaMethods.deleteAvailabilityByDate(path, method, success)
    },

    updateAvailabilityDefaults: function (requestData, success) {
        method = globals.nsaBasicMethod.updateAvailabilityDefaults.method
        path = globals.nsaBasicMethod.updateAvailabilityDefaults.path

        //send requestData always in json format
        globals.nsaMethods.postAvailabilityDefaults(path, method, JSON.stringify(requestData), success)
    },

    //Dispatches Methods
    getDispatches: function (queryString, success) {
        method = globals.nsaBasicMethod.listDispatches.method
        path = globals.nsaBasicMethod.listDispatches.path
        path = path + queryString
        globals.nsaMethods.getDispatches(path, method, success)
    },

    getDispatchesByDispatchNumber: function (dispatchNumber, success) {
        method = globals.nsaBasicMethod.listDispatchesByDispatchNumber.method
        path = globals.nsaBasicMethod.listDispatchesByDispatchNumber.path
        path = path + dispatchNumber
        globals.nsaMethods.getDispatchesByDispatchNumber(path, method, success)
    },

    updateDispatchesByDispatchNumber: function (dispatchNumber, requestData, success) {
        method = globals.nsaBasicMethod.updateDispatchesByDispatchNumber.method
        path = globals.nsaBasicMethod.updateDispatchesByDispatchNumber.path
        path = path + dispatchNumber

        //send requestData always in json format
        globals.nsaMethods.updateDispatchesByDispatchNumber(path, method, JSON.stringify(requestData), success)
    },

    updateDispatchesSchedules: function (dispatchNumber, requestData, success) {
        method = globals.nsaBasicMethod.updateDispatchesSchedules.method
        path = globals.nsaBasicMethod.updateDispatchesSchedules.path
        path = path + dispatchNumber + '/schedules'

        //send requestData always in json format
        globals.nsaMethods.updateDispatchesSchedules(path, method, JSON.stringify(requestData), success)
    },

    updateDispatchesCompletions: function (dispatchNumber, requestData, success) {
        method = globals.nsaBasicMethod.updateDispatchesCompletions.method
        path = globals.nsaBasicMethod.updateDispatchesCompletions.path
        path = path + dispatchNumber + '/completions/close'

        //send requestData always in json format
        globals.nsaMethods.updateDispatchesCompletions(path, method, JSON.stringify(requestData), success)
    },

    getDispatchesAttachments: function (dispatchNumber, success) {
        method = globals.nsaBasicMethod.listDispatchesAttachments.method
        path = globals.nsaBasicMethod.listDispatchesAttachments.path
        path = path + dispatchNumber + '/attachments'
        globals.nsaMethods.getDispatchesAttachments(path, method, success)
    },

    addDispatchesAttachments: function (dispatchNumber, requestData, success) {
        method = globals.nsaBasicMethod.updateDispatchesAttachments.method
        path = globals.nsaBasicMethod.updateDispatchesAttachments.path
        path = path + dispatchNumber + '/attachments'

        //send requestData always in json format
        globals.nsaMethods.addDispatchesAttachments(path, method, JSON.stringify(requestData), success)
    },

    //Payment Methods 
    listPayments: function (queryString, success) {
        method = globals.nsaBasicMethod.listPayments.method
        path = globals.nsaBasicMethod.listPayments.path
        path = path + queryString
        globals.nsaMethods.getPayments(path, method, success)
    },

    listPaymentsByBatchId: function (batchID, success) {
        method = globals.nsaBasicMethod.listPaymentsByBatchId.method
        path = globals.nsaBasicMethod.listPaymentsByBatchId.path
        path = path + batchID
        globals.nsaMethods.getPaymentsBatches(path, method, success)
    },

    listPaymentsByCallId: function (callID, success) {
        method = globals.nsaBasicMethod.listPaymentsByCallId.method
        path = globals.nsaBasicMethod.listPaymentsByCallId.path
        path = path + callID
        globals.nsaMethods.getPaymentsCalls(path, method, success)
    }

}

module.exports = NationalServiceAlliance;

// expose constructor as a named property 
module.exports.NationalServiceAlliance = NationalServiceAlliance;
