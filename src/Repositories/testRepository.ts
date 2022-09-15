import prisma from '../Config/db';
import { CreateTest } from '../Types/testType';

export async function create(test: CreateTest) {
	return await prisma.test.create({
		data: test
	});
}

export async function findAll() {
	return await prisma.test.findMany({
		orderBy: { id: 'asc' }
	});
}