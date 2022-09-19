import { Router } from 'express';
import * as testController from '../Controllers/testController';
import schemaValidate from '../Middlewares/handleSchemasValidation';
import testSchema from '../Schemas/testSchema';
import validateToken from '../Middlewares/validateToken';

const testRouter = Router();

testRouter.post('/create/test', validateToken, schemaValidate(testSchema), testController.Create);
testRouter.get('/tests', validateToken, testController.GetAll);

export default testRouter;

// genericRouter.post('/create', GController);
// genericRouter.get('/read', GController);
// genericRouter.put('/update', GController);
// genericRouter.delete('/delete', GController);