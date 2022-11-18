import prisma from './../config/database';
import { Values } from '@prisma/client';

export type TValues = Omit<Values, "id">

export async function findAll() {
  return await prisma.values.findMany();
}

export async function insert(data:TValues) {
  await prisma.values.create({data});  
}