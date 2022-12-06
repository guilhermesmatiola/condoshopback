"use strict";
exports.__esModule = true;
function validateSchema(schema) {
    return function (req, res, next) {
        var error = schema.validate(req.body).error;
        if (error) {
            return res.status(422).send({
                error: error.message
            });
        }
        next();
    };
}
exports["default"] = validateSchema;
