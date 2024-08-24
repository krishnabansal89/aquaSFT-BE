"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var deviceController_1 = __importDefault(require("../controllers/deviceController"));
var router = express_1.default.Router();
router.get('/device', deviceController_1.default.updateDevice);
// You can require and use your routes here ;)
exports.default = router;
