import prisma from '../Config/db';

export async function findAllTermToTests() {
	return await prisma.term.findMany({
		select: {
			id: true,
			number: true,
			disciplines: {
				select: {
					id: true,
					name: true,
					teachersDisciplines: {
						select: {
							teachers: {
								select: {
									id: true,
									name: true
								}
							},
							tests: {
								select: {
									id: true,
									name: true,
									pdfUrl: true,
								},
								orderBy: { id: 'asc' }
							}
						}
					}
				}, orderBy: { id: 'asc' }
			}
		},
		orderBy: { id: 'asc' }
	});
}