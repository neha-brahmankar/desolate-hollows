'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _car = require('../models/car');

var _car2 = _interopRequireDefault(_car);

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    index: async function index(req, res, next) {
        var cars = await _car2.default.find({});
        res.status(200).json(cars);
    },

    newCar: async function newCar(req, res, next) {
        var seller = await _user2.default.findById(req.value.body.seller),
            newCar = new _car2.default(req.value.body);
        delete newCar.seller;

        var car = new _car2.default(newCar);
        car.seller = seller;

        await newCar.save();
        seller.cars.push(newCar);
        await seller.save();
        res.status(201).json(car);
    },

    getCar: async function getCar(req, res, next) {
        var carId = req.value.params.carId,
            car = await _car2.default.findById(carId);

        res.status(200).json(car);
    },

    replaceCar: async function replaceCar(req, res, next) {
        var carId = req.value.params.carId,
            newCar = req.value.body;

        await _car2.default.findByIdAndUpdate(carId, newCar);
        res.status(200).json({ success: true });
    },

    updateCar: async function updateCar(req, res, next) {
        var carId = req.value.params.carId,
            newCar = req.value.body;

        await _car2.default.findByIdAndUpdate(carId, newCar);
        res.status(200).json({ success: true });
    },

    deleteCar: async function deleteCar(req, res, next) {
        var carId = req.value.params.carId,
            car = await _car2.default.findById(carId);

        if (!car) {
            return res.status(200).json({ error: 'Car doesn\'t exist' });
        };
        var sellerId = car.seller,
            seller = await _user2.default.findById(sellerId);

        await car.remove();
        seller.cars.pull(car);
        await seller.save();
        res.status(200).json({ success: true });
    }
};
//# sourceMappingURL=cars.js.map