import mongoose from "mongoose";
import { Schema } from "mongoose";

const deviceSchema = new Schema({
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

const Device = mongoose.model("Device", deviceSchema);
export default Device;