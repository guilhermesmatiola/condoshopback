import { Router } from 'express';
import {getPorCodigo} from '../controllers/rfidPurcController';

const rfidRouter = Router();

rfidRouter.post('/rfidtag', getPorCodigo)

export default rfidRouter;