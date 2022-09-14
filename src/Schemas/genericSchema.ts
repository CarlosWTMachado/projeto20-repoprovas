import joi from 'joi';

const genericSchema = joi.object({
	'a': joi.required()
});

export default genericSchema;

