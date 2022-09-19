import { faker } from "@faker-js/faker";
import prisma from "../../src/Config/db";

export function generateTest() {
	return {
		name: faker.random.word(),
		pdfUrl: faker.internet.url(),
		categoryId: 1,
		teacherDisciplineId: 1,
	};
}
export async function createTest() {
	const test = generateTest();

	const insertedTest = await prisma.test.create({
		data: test
	});

	return { test, insertedTest };
}