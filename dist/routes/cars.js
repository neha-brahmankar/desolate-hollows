'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _expressPromiseRouter = require('express-promise-router');

var _expressPromiseRouter2 = _interopRequireDefault(_expressPromiseRouter);

var _cars = require('../controllers/cars');

var _cars2 = _interopRequireDefault(_cars);

var _routerHelpers = require('../helpers/routerHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _expressPromiseRouter2.default)();
//Controllers
/***** Routing for Cars *****/
// import express from 'express';
// const router = express.Router();

//Helpers


router.route('/').get(_cars2.default.index).post((0, _routerHelpers.validateBody)(_routerHelpers.schemas.carSchema), _cars2.default.newCar);

router.route('/:carId').get((0, _routerHelpers.validateParams)(_routerHelpers.schemas.idSchema, 'carId'), _cars2.default.getCar).put([(0, _routerHelpers.validateParams)(_routerHelpers.schemas.idSchema, 'carId'), (0, _routerHelpers.validateBody)(_routerHelpers.schemas.replaceCarSchema)], _cars2.default.replaceCar).patch([(0, _routerHelpers.validateParams)(_routerHelpers.schemas.idSchema, 'carId'), (0, _routerHelpers.validateBody)(_routerHelpers.schemas.carOptionalSchema)], _cars2.default.updateCar).delete((0, _routerHelpers.validateParams)(_routerHelpers.schemas.idSchema, 'carId'), _cars2.default.deleteCar);

exports.default = router;
//# sourceMappingURL=cars.js.map