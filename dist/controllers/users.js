'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

var _car = require('../models/car');

var _car2 = _interopRequireDefault(_car);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    /*
    * * * Callbacks
    index: (req,res,next) => {
        User.find({}, (error, users) => {
            if(error) next(error)
            res.status(200).json(users)
        });
    },
    newUser: (req,res,next) => {
        const newUser = new User(req.body);
        newUser.save((err, user) => {
            res.status(201).json({
                success: true,
                user
            })
        })
    },
     * * * Promises
    index: (req, res, next) => 
        User.find({})
            .then(users => res.status(200).json(users))
            .catch(error => next(error)),
     newUser: (req, res, next) => {
        const newUser = new User(req.body);
        newUser.save()
            .then(user => res.status(201).json({
                success: true,
                user
            }))
            .catch(error => next(error))
        }
    */

    /*Async/await
    index: async (req, res, next) => {
        try {
            const users = await User.find({});
            res.status(200).json(users);
        } catch (error) {
            next(error);
        }
    },
     newUser: async (req, res, next) => {
        const newUser = new User(req.body);
        try {
            const user = await newUser.save();
            res.status(201).json(user);
        } catch (error) {
            next(error)
        }
    },*/

    //Using express-promise-router no need of try-catch
    index: async function index(req, res, next) {
        var users = await _user2.default.find({});
        res.status(200).json(users);
    },

    newUser: async function newUser(req, res, next) {
        var newUser = new _user2.default(req.value.body),
            user = await newUser.save();
        res.status(201).json(user);
    },

    getUser: async function getUser(req, res, next) {
        var userId = req.value.params.userId,
            user = await _user2.default.findById(userId);

        res.status(200).json(user);
    },

    replaceUser: async function replaceUser(req, res, next) {
        var userId = req.value.params.userId,
            newUser = req.value.body;

        await _user2.default.findByIdAndUpdate(userId, newUser);
        res.status(200).json({ success: true });
    },

    updateUser: async function updateUser(req, res, next) {
        var userId = req.value.params.userId,
            newUser = req.value.body;

        await _user2.default.findByIdAndUpdate(userId, newUser);
        res.status(200).json({ success: true });
    },

    getUserCars: async function getUserCars(req, res, next) {
        var userId = req.value.params.userId,
            user = await _user2.default.findById(userId).populate('cars');

        res.status(200).json(user.cars);
    },

    newUserCar: async function newUserCar(req, res, next) {
        var userId = req.value.params.userId,
            newCar = new _car2.default(req.value.body),
            user = await _user2.default.findById(userId);

        newCar.seller = user;
        await newCar.save();
        user.cars.push(newCar);
        await user.save();
        res.status(200).json(newCar);
    }

    /*
    * We can interact with mongoose in 3 different ways
    * 1) Callbacks
    * 2) Promises
    * 3 Async/Await (Promises)
    */

};
//# sourceMappingURL=users.js.map