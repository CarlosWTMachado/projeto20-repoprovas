import prisma from '../Config/db';

export async function find() {
	return await prisma.discipline.findMany({
		orderBy: { termId: 'asc' }
	});
}