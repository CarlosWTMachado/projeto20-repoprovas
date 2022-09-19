import prisma from '../Config/db';

export async function findByDisciplineId(disciplineId: number) {
	return await prisma.teacherDiscipline.findMany({
		where: { disciplineId }
	});
}