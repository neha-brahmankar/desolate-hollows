'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _users = require('./routes/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// mongoose.connect('mongodb://localhost/apiproject')
_mongoose2.default.connect('mongodb://nehab:N3ha%40123@ds219879.mlab.com:19879/apiproject');

//Register express app


//Import Routes
//Import packages/dependencies
var app = (0, _express2.default)();

//Configure Middleware
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());

//Configure Routes
app.use('/users', _users2.default);

//Catch 404 error and forward to error handler function
app.use(function (req, res, next) {
    var err = new Error('Access point not Found');
    err.status = 404;
    next(err);
});

//Error Handler
app.use(function (err, req, res, next) {
    var error = app.get('env') === 'development' ? err : {};
    var status = err.status || 500;

    //Response client
    res.status(status).json({
        error: {
            message: error.message
        }
    });

    //Response ourselves
    console.log('Error', err);
});

//Start server
var port = process.env.PORT || 5000;

app.listen(port, function () {
    return console.log('Server listening on ' + port);
});
//# sourceMappingURL=index.js.map