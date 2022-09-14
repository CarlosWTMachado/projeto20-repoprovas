import Joi from 'joi';
import {Request, Response, NextFunction} from 'express';

export default function schemaValidate (schema: Joi.ObjectSchema) {
	return (req: Request, res: Response, next: NextFunction) => {
		const validate = schema.validate(req.body);
		if(validate.error) {
			throw {
				type: 'BadRequest',
				message: `Data validation: ${
					validate.error.details.map((v:any) => v.message)
				}`
			}
		}
		next();
	}
}
