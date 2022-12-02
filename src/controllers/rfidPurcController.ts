import { Request, Response } from 'express';
import {findByCodigo} from '../services/rfidPurcService';

export async function getPorCodigo(req: Request, res: Response) {
	let {codigo} = req.body;
	const retorno = await findByCodigo(codigo);
	res.status(200).send(retorno)
}
