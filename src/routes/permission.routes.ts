import { Router } from 'express';

import PermissionController from '../app/controllers/PermissionController';

const perRoutes = Router();

perRoutes.post('/permission', PermissionController.insertPermission);
perRoutes.get('/permission', PermissionController.getAllPermission);
perRoutes.get('/permission/:id', PermissionController.getPermission);
perRoutes.put('/permission/:id', PermissionController.updatePermission);
perRoutes.delete('/permission/:id', PermissionController.deletePermission);

export default perRoutes;
