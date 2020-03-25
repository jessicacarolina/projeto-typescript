import { Router } from 'express';

import SessionController from '../app/controllers/SessionController';

const sesRoutes = Router();

sesRoutes.post('/session', SessionController.login);


export default sesRoutes;
