import { Router } from 'express';

import SessionController from '../app/controllers/SessionController';
import VerifyToken from '../utils';

const sesRoutes = Router();

sesRoutes.post('/session', SessionController.login);

sesRoutes.use(VerifyToken.validToken);

export default sesRoutes;
