import Car from '../models/car';
import User from '../models/user';

export default {
    index: async (req, res, next) => {
        const cars = await Car.find({});
        res.status(200).json(cars);
    },

    newCar: async (req, res, next) => {
        const
            seller = await User.findById(req.value.body.seller),
            newCar = new Car(req.value.body);
        delete newCar.seller;

        const car = new Car(newCar);
        car.seller = seller;

        await newCar.save();
        seller.cars.push(newCar);
        await seller.save();
        res.status(201).json(car);
    },

    getCar: async (req, res, next) => {
        const
            { carId } = req.value.params,
            car = await Car.findById(carId);
        res.status(200).json(car);
    },

    replaceCar: async (req, res, next) => {
        const
            { carId } = req.value.params,
            newCar = req.value.body;
        await Car.findByIdAndUpdate(carId, newCar);
        res.status(200).json({ success: true});
    },

    updateCar: async (req, res, next) => {
        const
            { carId } = req.value.params,
            newCar = req.value.body;
        await Car.findByIdAndUpdate(carId, newCar);
        res.status(200).json({ success: true});
    },

    deleteCar: async (req, res, next) => {
        const
            { carId } = req.value.params,
            car = await Car.findById(carId);
        if(!car) {
            return res.status(200).json({ error: 'Car doesn\'t exist' });
        };
        const sellerId = car.seller,
            seller = await User.findById(sellerId);
        
        await car.remove();
        seller.cars.pull(car);
        await seller.save();
        res.status(200).json({ success: true });
    },
}