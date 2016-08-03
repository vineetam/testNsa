/**
 * Module dependencies.
 */
var express = require('express'),
    http = require('http'),
    path = require('path');

var app = express();

//App Configuration
app.configure(function() {
    app.set('port', process.env.PORT || 8080);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(require('stylus').middleware(__dirname + '/public'));
    app.use(express.static(path.join(__dirname, 'public')));

});

app.configure('development', function() {
    app.use(express.errorHandler());
});

//GET http://localhost:8080
app.get('/', function(req, res) {
    res.render('index', {
        title: 'Login'
    });
});

//--------------Authorizations Method Started --------------

//Calls POST /authorizations
app.post('/', function(req, res) {

    var nsa = require('./nationalservicealliance')()

    //Call API
    nsa.login(req.body.txtuserid, req.body.txtpassword, function(data, statusCode) {

        //Writing response
        //res.write("You have successfully logged in");

        var datasend = new Object();
        datasend.statusCode = statusCode;
        datasend.data = data;
        if (statusCode == 200) {
            global.token = data.jwt;
            global.refreshToken = data.refreshToken;
        }

        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(datasend));

        res.end();

    });

});


//Calls DELETE /logout Method
app.get('/logout', function(req, res) {

    var nsa = require('./nationalservicealliance')(global.refreshToken)

    //Call API
    nsa.logout(function(data, statusCode) {

        //callback values returned
        global.token = '';

        var datasend = new Object();
        datasend.statusCode = statusCode;
        datasend.data = data;

        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(datasend));

        res.end();

    })

});


//Calls POST /authorizations/refresh Method
app.get('/refresh', function(req, res) {

    var nsa = require('./nationalservicealliance')(global.refreshToken)

    //Call API
    nsa.refreshLogin(function(data, statusCode) {

        if (statusCode == 200) {
            global.token = data.jwt;
            global.refreshToken = data.refreshToken;

            var datasend = new Object();
            datasend.statusCode = statusCode;
            datasend.data = data;

            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify(datasend));

            res.end();

        }


    })

});

//--------------Authorizations Method Ended --------------


//--------------Users Method Started --------------

app.get('/usershtml', function(req, res) {
    res.render('users', {
        title: 'Users'
    });
})

app.get('/home', function(req, res) {
    res.render('home', {
        title: 'Home'
    });
})

//Calls Get users/userid
app.post('/users', function(req, res) {

    var nsa = require('./nationalservicealliance')(global.token)

    //Call API
    nsa.listUsers(req.body.userid, function(data, statusCode) {

        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(data));
        res.end();
    })

});

//Calls PUT users/userid
app.post('/updateUser', function(req, res) {

    var nsa = require('./nationalservicealliance')(global.token)

    //Call API
    nsa.updateUser(req.body.userid, JSON.parse(req.body.jsonData), function(data, statusCode) {

        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(data));
        res.end();

    })

});

//Calls PUT users/userid/password
app.post('/updateUserPass', function(req, res) {

    var nsa = require('./nationalservicealliance')(global.token)

    //Call API
    nsa.updateUserPassword(req.body.userid, JSON.parse(req.body.jsonData), function(data, statusCode) {

        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(data));
        res.end();
    })
});

//--------------Users Method Ended --------------

//--------------Availability Method Started --------------

//Render availability
app.get('/availabilityhtml', function(req, res) {
    res.render('availability', {
        title: 'Availability'
    });
});

//Render availability defaults
app.get('/availabilitydefaulthtml', function(req, res) {
    res.render('availabilitydefault', {
        title: 'Availability Defaults'
    });
});

//Calls GET /availability
app.get('/availability', function(req, res) {

    var nsa = require('./nationalservicealliance')(global.token)

    //Call API
    nsa.listAvailability(function(data, statusCode) {

        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(data));
        res.end();

    })

});


//Calls GET /availability/defaults
app.get('/defAvailability', function(req, res) {

    var nsa = require('./nationalservicealliance')(global.token)

    //Call API
    nsa.listAvailabilityDefaults(function(data, statusCode) {

        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(data));
        res.end();

    })

});


//Calls PUT /availability
app.post('/addAvailability', function(req, res) {

    var nsa = require('./nationalservicealliance')(global.token)

    //Call API
    nsa.addAvailability(JSON.parse(req.body.jsonData), function(data, statusCode) {

        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(data));
        res.end();

    })

});


//Calls PUT /availability/date
app.post('/updateAvailabilityByDate', function(req, res) {

    var nsa = require('./nationalservicealliance')(global.token)

    //Call API
    nsa.updateAvailabilityByDate(req.body.availabilityDate, JSON.parse(req.body.jsonData), function(data, statusCode) {

        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(data));
        res.end();

    })

});


//Calls DELETE /availability/date
app.post('/removeAvailability', function(req, res) {

    var nsa = require('./nationalservicealliance')(global.token)

    //Call API
    nsa.removeAvailabilityByDate(req.body.availabilityDate, function(data, statusCode) {

        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(data));
        res.end();

    })

});


//Calls POST /availability/defaults
app.post('/updateAvailabilityDef', function(req, res) {

    var nsa = require('./nationalservicealliance')(global.token)

    //Call API
    nsa.updateAvailabilityDefaults(JSON.parse(req.body.jsonData), function(data, statusCode) {

        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(data));
        res.end();

    })

});


//----------------Availability Methods Ended--------------



//----------------Dispatches Methods Started--------------

//Render dispatches
app.get('/dispatcheshtml', function(req, res) {
    res.render('dispatches', {
        title: 'Dispatches'
    });
});

//Calls GET /dispatches
app.post('/dispatches', function(req, res) {

    var nsa = require('./nationalservicealliance')(global.token)

    //Call API
    nsa.getDispatches(req.body.status, function(data, statusCode) {

        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(data));
        res.end();
    })

});


//Calls GET dispatches/dispatchNumber
app.post('/getDispatchesByDispatchNumber', function(req, res) {

    var nsa = require('./nationalservicealliance')(global.token)

    //Call API
    nsa.getDispatchesByDispatchNumber(req.body.dispatchNumber, function(data, statusCode) {

        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(data));
        res.end();
    })

});


//Calls PATCH /dispatches/dispatchNumber
app.post('/updateDispatchesByDispatchNumber', function(req, res) {

    var nsa = require('./nationalservicealliance')(global.token)

    //Call API
    nsa.updateDispatchesByDispatchNumber(req.body.dispatchNumber, JSON.parse(req.body.jsonData), function(data, statusCode) {

        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(data));
        res.end();

    })

});


//Calls PUT /dispatches/schedules
app.post('/updateDispatchesSchedules', function(req, res) {

    var nsa = require('./nationalservicealliance')(global.token)

    //Call API
    nsa.updateDispatchesSchedules(req.body.dispatchNumber, JSON.parse(req.body.jsonData), function(data, statusCode) {

        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(data));
        res.end();

    })

});

//Calls POST /dispatches/Completions
app.post('/updateDispatchesCompletions', function(req, res) {

    var nsa = require('./nationalservicealliance')(global.token)

    //Call API
    nsa.updateDispatchesCompletions(req.body.dispatchNumber, JSON.parse(req.body.jsonData), function(data, statusCode) {

        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(data));
        res.end();

    })

});

//Render dispatches
app.get('/dispatchesattachmenthtml', function(req, res) {
    res.render('dispatchesattachment', {
        title: 'Dispatches Attachments'
    });
});


//Calls GET /dispatches/Attachments
app.post('/getDispatchesAttachments', function(req, res) {

    var nsa = require('./nationalservicealliance')(global.token)

    //Call users/22/password
    nsa.getDispatchesAttachments(req.body.dispatchNumber, function(data, statusCode) {

        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(data));
        res.end();

    })

});

//Calls POST /dispatches/Attachments
app.post('/addDispatchesAttachments', function(req, res) {

    var nsa = require('./nationalservicealliance')(global.token)

    //Call addDispatchesAttachments
    nsa.addDispatchesAttachments(req.body.dispatchNumber, JSON.parse(req.body.jsonData), function(data, statusCode) {

        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(data));
        res.end();

    })

});

//----------------Dispatches Methods Ended--------------


//----------------Payments Methods Started--------------

//Render payments
app.get('/paymenthtml', function(req, res) {
    res.render('payment', {
        title: 'Payments'
    });
});

//Calls GET /payments
app.get('/listPayments', function(req, res) {

    var nsa = require('./nationalservicealliance')(global.token)

    //Call users/22/password
    nsa.listPayments("", function(data, statusCode) {

        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(data));
        res.end();
    })

});


//Calls GET /payments/batchid
app.post('/listPaymentsByBatchId', function(req, res) {

    var nsa = require('./nationalservicealliance')(global.token)

    //Call users/22/password
    nsa.listPaymentsByBatchId(req.body.batchid, function(data, statusCode) {

        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(data));
        res.end();

    })

});


//Calls GET /payments/callID
app.post('/listPaymentsByCallId', function(req, res) {

    var nsa = require('./nationalservicealliance')(global.token)

    //Call users/22/password
    nsa.listPaymentsByCallId(req.body.callid, function(data, statusCode) {

        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(data));
        res.end();
    })

});


//----------------Payments Methods Ended--------------

//Creating server
http.createServer(app).listen(app.get('port'), function() {
    console.log("Express server listening on port " + app.get('port'));
});