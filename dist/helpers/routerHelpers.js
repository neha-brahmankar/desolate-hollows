'use strict';

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    validateParams: function validateParams(schema, name) {
        return function (req, res, next) {
            var result = _joi2.default.validate({ param: req['params'][name] }, schema);
            if (result.error) {
                return res.status(400).json(result.error);
            } else {
                if (!req.value) req.value = {};
                if (!req.value['params']) req.value['params'] = {};
                req.value['params'][name] = result.value.param;
                next();
            }
        };
    },

    validateBody: function validateBody(schema) {
        return function (req, res, next) {
            var result = _joi2.default.validate(req.body, schema);
            if (result.error) {
                return res.status(400).json(result.error);
            } else {
                if (!req.value) req.value = {};
                if (!req.value['body']) req.value['body'] = {};
                req.value['body'] = result.value;
                next();
            }
        };
    },

    schemas: {
        idSchema: _joi2.default.object().keys({
            param: _joi2.default.string().regex(/^[0-9a-fA-F]{24}$/).required()
        }),
        userSchema: _joi2.default.object().keys({
            firstName: _joi2.default.string().required(),
            lastName: _joi2.default.strict().required(),
            email: _joi2.default.string().email().required()
        }),
        userOptionalSchema: _joi2.default.object().keys({
            firstName: _joi2.default.string(),
            lastName: _joi2.default.strict(),
            email: _joi2.default.string().email()
        }),
        userCarSchema: _joi2.default.object().keys({
            make: _joi2.default.string().required(),
            model: _joi2.default.strict().required(),
            year: _joi2.default.number().required()
        }),
        carSchema: _joi2.default.object().keys({
            make: _joi2.default.string().required(),
            model: _joi2.default.strict().required(),
            year: _joi2.default.number().required(),
            seller: _joi2.default.string().regex(/^[0-9a-fA-F]{24}$/).required()
        }),
        replaceCarSchema: _joi2.default.object().keys({
            make: _joi2.default.string().required(),
            model: _joi2.default.strict().required(),
            year: _joi2.default.number().required()
        }),
        carOptionalSchema: _joi2.default.object().keys({
            make: _joi2.default.string(),
            model: _joi2.default.strict(),
            year: _joi2.default.number()
        })
    }
};
//# sourceMappingURL=routerHelpers.js.map