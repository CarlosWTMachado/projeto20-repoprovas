import { Request, Response } from 'express';
import * as authService from '../Services/authService';

export async function SignUp(req: Request, res: Response) {
	const user = req.body;
	await authService.SignUp(user);
	return res.sendStatus(201);
}

export async function SignIn(req: Request, res: Response) {
	const { email, password } = req.body;
	const token = await authService.SignIn(email, password);
	return res.status(200).send(token);
}