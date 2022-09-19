import * as teacherRepository from "../Repositories/teacherRepository";

export async function findAllTeacherToTests() {
	const data = await teacherRepository.findAllTeachersToTests();
	return data;
}