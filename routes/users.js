/***** Routing for Users *****/
import express from 'express';
// const router = express.Router();
import expressRouter from 'express-promise-router';
const router = expressRouter();
//Controllers
import UsersController from '../controllers/users';
//Helpers
import { validateParams, validateBody, schemas } from '../helpers/routerHelpers';

router.route('/')
    .get(UsersController.index)
    .post(validateBody(schemas.userSchema), UsersController.newUser);

router.route('/:userId')
    .get(validateParams(schemas.idSchema, 'userId'), UsersController.getUser)
    .put([validateParams(schemas.idSchema, 'userId'), validateBody(schemas.userSchema)],
        UsersController.replaceUser)
    .patch([validateParams(schemas.idSchema, 'userId'), validateBody(schemas.userOptionalSchema)],
        UsersController.updateUser)
    // .delete();

router.route('/:userId/cars')
    .get(validateParams(schemas.idSchema, 'userId'), UsersController.getUserCars)
    .post(validateBody(schemas.carSchema), UsersController.newUserCar)

export default router;

// router.get('/', (req,res,next) => {

// });
// router.post('/', (req,res,next) => {

// });