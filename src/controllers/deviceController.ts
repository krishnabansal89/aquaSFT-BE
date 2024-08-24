import { Request, Response } from 'express';
import Device from '../models/deviceModel';
const deviceController = {
    updateDevice: async (req: Request, res: Response) => {
        try {
            const { flow , pressure } = req.query;
            console.log(flow, pressure);
            const device = new Device({ flowrate: flow, pressure: pressure });
            await device.save();
            res.status(200).json({ message: 'Device updated' });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}


export default deviceController;