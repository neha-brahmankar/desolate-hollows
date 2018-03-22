import User from '../models/user';
import Car from '../models/car';

export default {
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
    index: async (req, res, next) => {
        const users = await User.find({});
        res.status(200).json(users);
    },

    newUser: async (req, res, next) => {
        const
            newUser = new User(req.value.body),
            user = await newUser.save();
        res.status(201).json(user);
    },

    getUser: async (req, res, next) => {
        const
            { userId } = req.value.params,
            user = await User.findById(userId);
        res.status(200).json(user);
    },

    replaceUser: async (req, res, next) => {
        const
            { userId } = req.value.params,
            newUser = req.value.body;
        await User.findByIdAndUpdate(userId, newUser);
        res.status(200).json({ success: true});
    },

    updateUser: async (req, res, next) => {
        const
            { userId } = req.value.params,
            newUser = req.value.body;
        await User.findByIdAndUpdate(userId, newUser);
        res.status(200).json({ success: true});
    },

    getUserCars: async (req, res, next) => {
        const
            { userId } = req.value.params,
            user = await User.findById(userId).populate('cars');
        res.status(200).json(user.cars);
    },

    newUserCar: async (req, res, next) => {
        const
            { userId } = req.value.params,
            newCar = new Car(req.value.body),
            user = await User.findById(userId);
        newCar.seller = user;
        await newCar.save();
        user.cars.push(newCar);
        await user.save()
        res.status(200).json(newCar);
    },
}


/*
* We can interact with mongoose in 3 different ways
* 1) Callbacks
* 2) Promises
* 3 Async/Await (Promises)
*/