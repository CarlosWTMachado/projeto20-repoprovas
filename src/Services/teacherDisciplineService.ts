import * as teacherDisciplineRepository from '../Repositories/teacherDisciplineRepository';

export async function GetByDisciplineId(disciplineId: number) {
	return await teacherDisciplineRepository.findByDisciplineId(disciplineId);
}