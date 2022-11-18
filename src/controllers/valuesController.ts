import { Request, Response } from 'express';
import valuesService from '../services/valuesService';
import prisma from "../config/database"


// export async function values(req: Request, res: Response) {
//   const values = req.body;
  
//   await valuesService.newValues(values);
//   res.status(201).send(values);
// }

// export async function getAll(req: Request, res: Response) {
//     const values = await valuesService.findAll();
//     res.status(200).send(values);
// }

export async function values(req: Request, res: Response) {
  let {value1, value2} = req.body;

  if(value1=="ABCD01234EF450000111112222"){
    value2 = 13;
  }
  if(value1=="banana"){
    value2 = 22;
  }
  
  
  try {
    await prisma.$queryRaw`INSERT into "Values" (value1, value2) values (${value1}, ${value2});`;

    return res.status(201).send("certo");
  }
  
  catch (error){
    return res.status(500).send(error);
  }
}

export async function getAll(req: Request, res: Response) {
    const values = await valuesService.findAll();
    res.status(200).send(values);
}