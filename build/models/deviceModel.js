"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var mongoose_2 = require("mongoose");
var deviceSchema = new mongoose_2.Schema({
    flowrate: {
        type: Number,
        required: true,
    },
    pressure: {
        type: Number,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});
var Device = mongoose_1.default.model("Device", deviceSchema);
exports.default = Device;
