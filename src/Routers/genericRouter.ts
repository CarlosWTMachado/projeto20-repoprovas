import { Router } from 'express';
import {GController} from '../Controllers/genericController';

const genericRouter = Router();

genericRouter.post('/create', GController);
genericRouter.get('/read', GController);
genericRouter.put('/update', GController);
genericRouter.delete('/delete', GController);

export default genericRouter;

