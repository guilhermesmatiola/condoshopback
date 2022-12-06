"use strict";
exports.__esModule = true;
var express_1 = require("express");
var rfidPurcController_1 = require("../controllers/rfidPurcController");
var rfidRouter = (0, express_1.Router)();
rfidRouter.post('/rfidtag', rfidPurcController_1.getPorCodigo);
exports["default"] = rfidRouter;
