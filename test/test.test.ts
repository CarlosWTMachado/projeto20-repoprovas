import app from '../src/app';
import supertest from 'supertest';
import prisma from '../src/Config/db';
import { createUser } from './factories/userFactory';
import { generateTest, createTest } from './factories/testFactory';

let authorization = { Authorization: '' };

beforeAll(async () => {
	const { user } = await createUser();
	const { text: token } = await supertest(app).post("/signin").send(user);
	authorization.Authorization = `Bearer ${token}`;
})

beforeEach(async () => {
	await prisma.$executeRaw`TRUNCATE TABLE tests`;
});

afterAll(async () => {
	await prisma.$disconnect();
});

describe('Test POST /create/test', () => {
	it('Return 201, create new test correctly', async () => {
		const body = generateTest();

		const result = await supertest(app).post("/create/test")
			.send(body)
			.set(authorization);

		expect(result.status).toEqual(201);
	});
});

describe('Test GET /tests', () => {
	it('Return 200, get tests correctly', async () => {
		await createTest();

		const result = await supertest(app).get("/tests")
			.set(authorization);

		expect(result.status).toEqual(200);
		expect(result.body).toBeInstanceOf(Array);
	});

	it('Return 200, get tests grouped by term', async () => {
		const result = await supertest(app).get("/tests")
			.set(authorization)
			.query({ groupBy: 'term' });

		expect(result.status).toEqual(200);
		expect(result.body).toBeInstanceOf(Array);
		expect(result.body).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					id: expect.any(Number),
					number: expect.any(Number),
					disciplines: expect.any(Array)
				})
			])
		);
	});

	it('Return 200, get tests grouped by teacher', async () => {
		const result = await supertest(app).get("/tests")
			.set(authorization)
			.query({ groupBy: 'teacher' });

		expect(result.status).toEqual(200);
		expect(result.body).toBeInstanceOf(Array);
		expect(result.body).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					id: expect.any(Number),
					name: expect.any(String),
					teachersDisciplines: expect.any(Array)
				})
			])
		);
	});
});