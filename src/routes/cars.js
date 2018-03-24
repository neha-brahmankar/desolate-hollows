/***** Routing for Cars *****/
// import express from 'express';
// const router = express.Router();
import expressRouter from 'express-promise-router';
const router = expressRouter();
//Controllers
import CarsController from '../controllers/cars';
//Helpers
import { validateParams, validateBody, schemas } from '../helpers/routerHelpers';

router.route('/')
    .get(CarsController.index)
    .post(validateBody(schemas.carSchema), CarsController.newCar);

router.route('/:carId')
    .get(validateParams(schemas.idSchema, 'carId'), CarsController.getCar)
    .put([validateParams(schemas.idSchema, 'carId'), validateBody(schemas.replaceCarSchema)],
        CarsController.replaceCar)
    .patch([validateParams(schemas.idSchema, 'carId'), validateBody(schemas.carOptionalSchema)],
        CarsController.updateCar)
    .delete(validateParams(schemas.idSchema, 'carId'), CarsController.deleteCar);

export default router;