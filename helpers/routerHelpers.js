import Joi from 'joi';

module.exports = {
    validateParams: (schema, name) => (req, res, next) => {
        const result = Joi.validate({ param: req['params'][name] }, schema);
        if (result.error) {
            return res.status(400).json(result.error)
        } else {
            if(!req.value) req.value = {};
            if(!req.value['params']) req.value['params'] = {};
            req.value['params'][name] = result.value.param;
            next();
        }
    },

    validateBody: (schema) => (req, res, next) => {
        const result = Joi.validate(req.body, schema);
        if (result.error) {
            return res.status(400).json(result.error)
        } else {
            if(!req.value) req.value = {};
            if(!req.value['body']) req.value['body'] = {};
            req.value['body'] = result.value;
            next();
        }
    },

    schemas: {
        idSchema: Joi.object().keys({
            param: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
        }),
        userSchema: Joi.object().keys({
            firstName: Joi.string().required(),
            lastName: Joi.strict().required(),
            email: Joi.string().email().required(),
        }),
        userOptionalSchema: Joi.object().keys({
            firstName: Joi.string(),
            lastName: Joi.strict(),
            email: Joi.string().email(),
        }),
        carSchema: Joi.object().keys({
            make: Joi.string().required(),
            model: Joi.strict().required(),
            year: Joi.number().required(),
        }),
    }
}