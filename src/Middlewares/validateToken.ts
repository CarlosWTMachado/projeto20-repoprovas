import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import tokenSchema from '../Schemas/tokenSchema';
import VerifyToken from '../Utils/verifyToken';
import Error from '../Error/error';

export default function schemaValidateToken(req: Request, res: Response, next: NextFunction) {
	const { authorization } = req.headers;
	const validate = tokenSchema.validate({ authorization });
	if (validate.error) throw new Error('Unauthorized', 'Invalid token');
	const token = authorization ? authorization.replace('Bearer ', '') : '';
	const data = VerifyToken(token);
	res.locals.tokenData = data;
	next();
}