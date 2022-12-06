import { Request, Response } from 'express';
import {findByCodigo} from '../services/EPCService';

export async function getProductByCode(req: Request, res: Response) {
	let {codigo} = req.body;
	const retorno = await findByCodigo(codigo);
	res.status(200).send(retorno)
}
