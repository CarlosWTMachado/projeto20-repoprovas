import prisma from '../src/Config/db';

async function main() {
	const terms = [];
	for (let i = 1; i <= 6; i++) {
		const term = await prisma.term.upsert({
			where: { number: i },
			update: {},
			create: { number: i }
		});
		terms.push(term);
	}

	const newCategories = [
		{
			name: 'Projeto'
		},
		{
			name: 'Prática'
		},
		{
			name: 'Recuperação'
		},
	];
	const categories = await Promise.all(newCategories.map(async (category) => {
		return await prisma.category.upsert({
			where: { name: category.name },
			update: {},
			create: { name: category.name }
		});
	}));

	const newTeachers = [
		{
			name: 'Diego Pinho'
		},
		{
			name: 'Bruna Hamori'
		},
	];
	const teachers = await Promise.all(newTeachers.map(async (teacher) => {
		return await prisma.teacher.upsert({
			where: { name: teacher.name },
			update: {},
			create: { name: teacher.name }
		});
	}));

	const newDisciplines = [
		{
			name: 'HTML e CSS',
			termId: terms[0].number
		},
		{
			name: 'JavaScript',
			termId: terms[1].number
		},
		{
			name: 'React',
			termId: terms[2].number
		},
		{
			name: 'Humildade',
			termId: terms[0].number
		},
		{
			name: 'Planejamento',
			termId: terms[1].number
		},
		{
			name: 'Autoconfiança',
			termId: terms[2].number
		},
	];
	const disciplines = await Promise.all(newDisciplines.map(async (discipline) => {
		return await prisma.discipline.upsert({
			where: { name: discipline.name },
			update: {},
			create: {
				name: discipline.name,
				termId: discipline.termId
			}
		});
	}));

	const NewTeachersDisciplines = [
		{
			teacherId: teachers[0].id,
			disciplineId: disciplines[0].id
		},
		{
			teacherId: teachers[0].id,
			disciplineId: disciplines[1].id
		},
		{
			teacherId: teachers[0].id,
			disciplineId: disciplines[2].id
		},
		{
			teacherId: teachers[1].id,
			disciplineId: disciplines[3].id
		},
		{
			teacherId: teachers[1].id,
			disciplineId: disciplines[4].id
		},
		{
			teacherId: teachers[1].id,
			disciplineId: disciplines[5].id
		},
	];
	const teachersDisciplines = await Promise.all(NewTeachersDisciplines.map(async (teacherDiscipline) => {
		return await prisma.teacherDiscipline.upsert({
			where: {
				teacherId_disciplineId: {
					teacherId: teacherDiscipline.teacherId,
					disciplineId: teacherDiscipline.disciplineId
				}
			},
			update: {},
			create: {
				teacherId: teacherDiscipline.teacherId,
				disciplineId: teacherDiscipline.disciplineId
			}
		});
	}));
}

main()
	.catch(e => {
		console.log(e);
		process.exit(1);
	})
	.finally(() => {
		prisma.$disconnect();
	});