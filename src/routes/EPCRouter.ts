import { Router } from 'express';
import { getProductByCode } from '../controllers/EPCController';

const rfidRouter = Router();

rfidRouter.post('/rfidtag', getProductByCode)

export default rfidRouter;