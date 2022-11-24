import { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config({ path: '.env' });

import * as userRepository from '../repositories/userRepository';
import {
  conflictError,
  notFoundError,
  unauthorizedError
} from '../utils/errorUtils';

export type CreateUserData = Omit<User, 'id'>;

async function createUser(user: CreateUserData) {
  const existingUser = await userRepository.findUserByEmail(user.email);

  if (existingUser) {
    throw conflictError();
  }

  const SALT = 10;
  const hashedPassword = bcrypt.hashSync(user.password, SALT);
  await userRepository.insertUser({ ...user, password: hashedPassword });
}

async function login(login: CreateUserData) {
  const user = await getUserOrFail(login);
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

  return { token, user };
}

async function getUserOrFail(login: CreateUserData) {
  const user = await userRepository.findUserByEmail(login.email);
  if (!user) throw unauthorizedError('Invalid credentials');

  const isPasswordValid = bcrypt.compareSync(login.password, user.password);
  if (!isPasswordValid) throw unauthorizedError('Invalid credentials');

  return user;
}

async function findUserById(id: number) {
  const user = await userRepository.findById(id);
  if (!user) throw notFoundError('User not found');

  return user;
}

const userService = {
  createUser,
  login,
  findUserById
};

export default userService;
