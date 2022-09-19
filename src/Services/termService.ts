import * as termRepository from "../Repositories/termRepository";

export async function findAllTermToTests() {
	const data = await termRepository.findAllTermToTests();
	return data;
}