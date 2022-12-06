import * as rfidRepository from '../repositories/EPCRepository';

export async function findByCodigo(codigo:string) {
  const productReturn = await rfidRepository.getByEPC(codigo);
  return productReturn;
}
