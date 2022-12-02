import * as rfidRepository from '../repositories/rfidPurcRepository';

export async function findByCodigo(codigo:string) {
  const productReturn = await rfidRepository.getDisciplinaByCodigo(codigo);
  return productReturn
}
