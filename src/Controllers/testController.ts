import { Request, Response } from 'express';
import * as testService from '../Services/testService';

export async function Create(req: Request, res: Response) {
	const test = req.body;
	await testService.Create(test);
	return res.sendStatus(201);
}

export async function GetAll(req: Request, res: Response) {
	const groupBy = req.query.groupBy || '';
	const tests = await testService.GetAll(groupBy.toString());
	return res.status(200).send(tests);
}