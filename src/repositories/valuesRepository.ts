import prisma from './../config/database';
import { Values } from '@prisma/client';
import { Products } from '@prisma/client';

export type TValues = Omit<Values, "id">

export async function findAll() {
  return await prisma.values.findMany();
}

export async function insert(data:TValues) {
  await prisma.values.create({data});  
}

export async function getByRFID(data:Products) {
  return await prisma.$queryRaw`select distinct(products.name) from products
  join "Values" on products.id = "Values".value2
  where "Values".value1 = ${1}`
}