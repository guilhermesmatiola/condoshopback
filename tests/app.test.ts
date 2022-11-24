import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';
import supertest from 'supertest';
import app from './../src/app';

import prisma from './../src/config/database';

beforeEach(async () => {
  await prisma.user.deleteMany(); // remove all previous users
});

const APP = supertest(app);

describe('user tests suite', () => {
  it('creates a user', async () => {
    const user = __createUserInfo();
    const response = await APP.post('/signup').send(user);
    expect(response.statusCode).toBe(201);
  });

  it('login valid user', async () => {
    const userInfo = __createUserInfo();
    const user = await __createUser(userInfo);
    const response = await APP.post('/signin').send({
      email: user.email,
      password: userInfo.password
    });
    const token = response.body;
    expect(token).not.toBeNull();
  });
});

function __createUserInfo() {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    image: faker.internet.url(),
    password: faker.internet.password(),
    city: ['Torre 1', 'Torre 2'][Math.floor(Math.random() * (2 - 0 + 1))]
  };
}

async function __createUser(userInfo) {
  const user = await prisma.user.create({
    data: { ...userInfo, password: bcrypt.hashSync(userInfo.password, 10) }
  });

  return user;
}

afterAll(async () => {
  await prisma.$disconnect();
});
