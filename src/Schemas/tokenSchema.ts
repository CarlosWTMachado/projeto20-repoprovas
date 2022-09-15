import joi from 'joi';

const tokenSchema = joi.object({
	'authorization': joi.string().pattern(/^Bearer */).required(),
});

export default tokenSchema;