import * as testRepository from '../Repositories/testRepository';
import * as termService from './termService';
import * as teacherService from './teacherService';
import { find } from '../Repositories/disciplineRepository';
import { CreateTest } from '../Types/testType';
import Error from '../Error/error';

export async function Create(test: CreateTest) {
	await testRepository.create(test);
	return;
}

export async function GetAll(groupBy: string) {
	let tests = null;
	switch (groupBy) {
		case 'term':
			tests = await termService.findAllTermToTests();
			break;
		case 'teacher':
			tests = await teacherService.findAllTeacherToTests();
			break;
		default:
			tests = await testRepository.findAll();
			break;
	}
	return tests;
}