import { Router } from 'express';
import * as authController from '../Controllers/authController';
import schemaValidate from '../Middlewares/handleSchemasValidation';
import authSchema from '../Schemas/authRouter';

const authRouter = Router();

authRouter.post('/signup', schemaValidate(authSchema), authController.SignUp);
authRouter.post('/signin', schemaValidate(authSchema), authController.SignIn);

export default authRouter;

// genericRouter.post('/create', GController);
// genericRouter.get('/read', GController);
// genericRouter.put('/update', GController);
// genericRouter.delete('/delete', GController);