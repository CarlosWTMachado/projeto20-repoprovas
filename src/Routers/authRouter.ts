import { Router } from 'express';
import * as authController from '../Controllers/authController';
import schemaValidate from '../Middlewares/handleSchemasValidation';
import authSchema from '../Schemas/authSchema';

const authRouter = Router();

authRouter.post('/signup', schemaValidate(authSchema), authController.SignUp);
authRouter.post('/signin', schemaValidate(authSchema), authController.SignIn);

export default authRouter;
