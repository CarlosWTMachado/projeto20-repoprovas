import app from '../src/app';
import supertest from 'supertest';
import prisma from '../src/Config/db';
import { generateUser, createUser } from './factories/userFactory';

beforeEach(async () => {
	await prisma.$executeRaw`TRUNCATE TABLE users`;
});

afterAll(async () => {
	await prisma.$disconnect();
});

describe('Test POST /signup', () => {
	it('Return 201, register new user correctly', async () => {
		const body = generateUser();

		const result = await supertest(app).post("/signup").send(body);

		expect(result.status).toEqual(201);
	});

	it('Return 409, try register user alredy registred', async () => {
		const { user: body } = await createUser();

		const result = await supertest(app).post("/signup").send(body);

		expect(result.status).toEqual(409);
	});
});

describe('Test POST /signin', () => {
	it('Return 200, user login correctly', async () => {
		const { user: body } = await createUser();

		const result = await supertest(app).post("/signin").send(body);

		expect(result.status).toEqual(200);
	});

	it('Return 404, try login user not registred', async () => {
		const body = generateUser();

		const result = await supertest(app).post("/signin").send(body);

		expect(result.status).toEqual(404);
	});
});