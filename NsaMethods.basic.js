'use strict';

var globals = require('./global')

//Calls nsaMethod and passes API path and method
module.exports = {

    //Welcome method
    welcome: nsaMethod({
        method: 'GET',
        path: '/'
    }),

    //Authorizations Methods
    login: nsaMethod({
        method: 'POST',
        path: '/authorizations'
    }),

    refreshLogin: nsaMethod({
        method: 'POST',
        path: '/authorizations/refresh'
    }),

    logout: nsaMethod({
        method: 'DELETE',
        path: '/logout'
    }),

    //Users Methods
    listUsers: nsaMethod({
        method: 'GET',
        path: '/users/'
    }),

    updateUser: nsaMethod({
        method: 'PUT',
        path: '/users/'
    }),

    updateUserPassword: nsaMethod({
        method: 'PUT',
        path: '/users/'
    }),

    //Dispatches Methods
    listDispatches: nsaMethod({
        method: 'GET',
        path: '/dispatches'
    }),

    listDispatchesByDispatchNumber: nsaMethod({
        method: 'GET',
        path: '/dispatches/'
    }),

    updateDispatchesByDispatchNumber: nsaMethod({
        method: 'PATCH',
        path: '/dispatches/'
    }),

    listDispatchesAttachments: nsaMethod({
        method: 'GET',
        path: '/dispatches/'
    }),

    updateDispatchesAttachments: nsaMethod({
        method: 'POST',
        path: '/dispatches/'
    }),

    updateDispatchesCompletions: nsaMethod({
        method: 'POST',
        path: '/dispatches/'
    }),

    updateDispatchesSchedules: nsaMethod({
        method: 'POST',
        path: '/dispatches/'
    }),

    //Availability Methods
    listAvailability: nsaMethod({
        method: 'GET',
        path: '/availability'
    }),

    updateAvailability: nsaMethod({
        method: 'POST',
        path: '/availability'
    }),

    updateAvailabilityByDate: nsaMethod({
        method: 'PUT',
        path: '/availability/'
    }),

    removeAvailabilityByDate: nsaMethod({
        method: 'DELETE',
        path: '/availability/'
    }),

    listAvailabilityDefaults: nsaMethod({
        method: 'GET',
        path: '/availability/defaults'
    }),

    updateAvailabilityDefaults: nsaMethod({
        method: 'POST',
        path: '/availability/defaults'
    }),


    //Payments Methods
    listPayments: nsaMethod({
        method: 'GET',
        path: '/payments'
    }),

    listPaymentsByBatchId: nsaMethod({
        method: 'GET',
        path: '/payments/batches/'
    }),

    listPaymentsByCallId: nsaMethod({
        method: 'GET',
        path: '/payments/calls/'
    }),

}

/**
 * Create an API method from the declared url.
 *
 * @param [url.method='GET'] Request Method (POST, GET, DELETE, PUT, PATCH)
 * @param [url.path=''] 
 */
function nsaMethod(url) {

    return {
        method: url.method,
        path: url.path
    }
}

exports.nsaMethod = nsaMethod