## Installation

`npm install nationalservicealliance`


## API Overview

Every resource method is accessed via `nationalservicealliance` instance:

```js
var nsa = require('nationalservicealliance')({token});
// nsa.{ METHOD_NAME }
```

Note : token is an optional value passed with `nsa` instance.

Every method accepts a callback as the last argument:

```js
  nsa.updateUser(22,{
                 "firstName": "John",
                 "lastName": "Doe",
                 "email": "john.doe@test.com"
             },function(data,status){
          data; // json body returned by API
          status; // status code returned by API
         })
```

## Available resources & methods

*Where you see `params` it is a JSON object, e.g. `{ "oldPassword": "old_password" }`*

### Authorizations API
- login(username,password)
- refreshLogin()
- logout()

### Users API
- listUsers(userID)
- updateUser(userID,[params])
- updateUserPassword(userID,[params])

### Availability API
- listAvailability(qryStringAvailaibility)
- listAvailabilityDefaults()
- addAvailability([params])
- updateAvailabilityByDate(date,[params])
- removeAvailabilityByDate(date)
- updateAvailabilityDefaults([params])

### Dispatches API
- getDispatches(queryStringListDispatches)
- getDispatchesByDispatchNumber(dispatchNumber)
- updateDispatchesByDispatchNumber(dispatchNumber, [params])
- updateDispatchesSchedules(dispatchNumber, [params])
- updateDispatchesCompletions(dispatchNumber, [params])
- getDispatchesAttachments(dispatchNumber)
- updateDispatchesAttachments(dispatchNumber,[params])

### Payments API
- listPayments(qryStringPayments)
- listPaymentsByBatchId(batchID)
- listPaymentsByCallId(callID)


