import { Request, Response } from 'express';
import valuesService from '../services/valuesService';
import prisma from "../config/database"


export async function values(req: Request, res: Response) {
  let {value1, value2} = req.body;
  console.log(req.body.value1)
  if(value1=="ABCD01234EF45000011112222"){
    value2 = 1;
  }
  if(value1=="ABCD01234EF45000011112223"){
    value2 = 2;
  }
  if(value1=="ABCD01234EF45000011112224"){
    value2 = 3;
  }
  if(value1=="ABCD01234EF45000011112225"){
    value2 = 4;
  }
  if(value1=="ABCD01234EF45000011112226"){
    value2 = 5;
  }
  if(value1=="ABCD01234EF45000011112227"){
    value2 = 6;
  }
  if(value1=="ABCD01234EF45000011112228"){
    value2 = 7;
  }
  if(value1=="ABCD01234EF45000011112229"){
    value2 = 8;
  }
  if(value1=="ABCD01234EF45000011112230"){
    value2 = 9;
  }
  if(value1=="ABCD01234EF45000011112231"){
    value2 = 10;
  }
  if(value1=="ABCD01234EF45000011112232"){
    value2 = 11;
  }
  if(value1=="ABCD01234EF45000011112233"){
    value2 = 12;
  }
  if(value1=="ABCD01234EF45000011112234"){
    value2 = 13;
  }
  if(value1=="ABCD01234EF45000011112235"){
    value2 = 14;
  }
  if(value1=="ABCD01234EF45000011112236"){
    value2 = 15;
  }
  if(value1=="ABCD01234EF45000011112237"){
    value2 = 16;
  }
  if(value1=="ABCD01234EF45000011112238"){
    value2 = 17;
  }
  res.status(200).send({value1,value2});
  
  async function getAll() {
  
    try{
      let RIFDReturn = await prisma.$queryRaw`select distinct(products.name) from products
      join "Values" on products.id = "Values".value2
      where "Values".value1 = ${value1}`

      return RIFDReturn;
    }
    catch(error){
      //throw error
      return res.status(500).send(value1)
    }
      
  }

  
  try {
    await prisma.$queryRaw`INSERT into "Values" (value1, value2) values (${value1}, ${value2});`;
    
    let retorno = await getAll()

    return res.status(201).send(retorno);
  }
  
  catch (error){
    return res.status(500).send(error);
  }
}

// export async function getAll(req: Request, res: Response) {
//   let {value1} = req.body;

//   try{
//     await prisma.$queryRaw`select distinct(products.name) from products
//     join "Values" on products.id = "Values".value2
//     where "Values".value1 = ${value1}`
//   }
//   catch(error){
//     return res.status(500).send(value1)
//   }
    
  
//   // const values = await valuesService.findAll();
//     // res.status(200).send(values);
// }