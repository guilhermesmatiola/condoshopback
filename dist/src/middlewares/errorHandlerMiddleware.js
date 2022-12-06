"use strict";
exports.__esModule = true;
exports.handleErrorsMiddleware = void 0;
var errorUtils_1 = require("../utils/errorUtils");
function handleErrorsMiddleware(err, req, res, next) {
    console.log('Ops! An error occured!', err);
    if ((0, errorUtils_1.isAppError)(err)) {
        var statusCode = (0, errorUtils_1.errorTypeToStatusCode)(err.type);
        return res.status(statusCode).send(err.message);
    }
    res.sendStatus(500);
}
exports.handleErrorsMiddleware = handleErrorsMiddleware;
