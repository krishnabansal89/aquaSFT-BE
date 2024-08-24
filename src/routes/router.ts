import express from "express";
import deviceController from "../controllers/deviceController";
const router = express.Router();
router.get('/device', deviceController.updateDevice);
// You can require and use your routes here ;)


export default router;