'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressPromiseRouter = require('express-promise-router');

var _expressPromiseRouter2 = _interopRequireDefault(_expressPromiseRouter);

var _users = require('../controllers/users');

var _users2 = _interopRequireDefault(_users);

var _routerHelpers = require('../helpers/routerHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***** Routing for Users *****/
var router = (0, _expressPromiseRouter2.default)();
//Controllers

// const router = express.Router();

//Helpers


router.route('/').get(_users2.default.index).post((0, _routerHelpers.validateBody)(_routerHelpers.schemas.userSchema), _users2.default.newUser);

router.route('/:userId').get((0, _routerHelpers.validateParams)(_routerHelpers.schemas.idSchema, 'userId'), _users2.default.getUser).put([(0, _routerHelpers.validateParams)(_routerHelpers.schemas.idSchema, 'userId'), (0, _routerHelpers.validateBody)(_routerHelpers.schemas.userSchema)], _users2.default.replaceUser).patch([(0, _routerHelpers.validateParams)(_routerHelpers.schemas.idSchema, 'userId'), (0, _routerHelpers.validateBody)(_routerHelpers.schemas.userOptionalSchema)], _users2.default.updateUser);
// .delete();

router.route('/:userId/cars').get((0, _routerHelpers.validateParams)(_routerHelpers.schemas.idSchema, 'userId'), _users2.default.getUserCars).post((0, _routerHelpers.validateBody)(_routerHelpers.schemas.carSchema), _users2.default.newUserCar);

exports.default = router;

// router.get('/', (req,res,next) => {

// });
// router.post('/', (req,res,next) => {

// });
//# sourceMappingURL=users.js.map