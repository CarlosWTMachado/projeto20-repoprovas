import { Request, Response } from 'express';
import * as genericService from '../Services/genericService';

export async function GController(req: Request, res: Response){
	return res.sendStatus(200);
}

