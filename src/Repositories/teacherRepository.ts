import prisma from '../Config/db';

export async function findAllTeachersToTests() {
	return await prisma.teacher.findMany({
		select: {
			id: true,
			name: true,
			teachersDisciplines: {
				select: {
					tests: {
						select: {
							id: true,
							name: true,
							pdfUrl: true,
						},
						orderBy: { id: 'asc' }
					},
					disciplines: {
						select: {
							id: true,
							name: true
						}
					}
				}
			}
		}
	});
	// term.findMany({
	// 	select: {
	// 		id: true,
	// 		number: true,
	// 		disciplines: {
	// 			select: {
	// 				id: true,
	// 				name: true,
	// 				teachersDisciplines: {
	// 					select: {
	// 						teachers: {
	// 							select: {
	// 								id: true,
	// 								name: true
	// 							}
	// 						},
	// 						tests: {
	// 							select: {
	// 								id: true,
	// 								name: true,
	// 								pdfUrl: true,
	// 							},
	// 							orderBy: { id: 'asc' }
	// 						}
	// 					}
	// 				}
	// 			}, orderBy: { id: 'asc' }
	// 		}
	// 	},
	// 	orderBy: { id: 'asc' }
	// });
}