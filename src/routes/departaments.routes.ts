import { Router } from 'express';

import DepartmentController from '../app/controllers/DepartmentController';

const depRoutes = Router();

depRoutes.post('/departments', DepartmentController.insertDepartment);
depRoutes.get('/departments/:id', DepartmentController.getDepartment);
depRoutes.get('/departments', DepartmentController.getAllDepartment);
depRoutes.put('/departments/:id', DepartmentController.updateDepartment);
depRoutes.delete('/departments/:id', DepartmentController.deleteDepartment);
depRoutes.get(
    '/departments/:id/employees',
    DepartmentController.getAllEmployees
);

export default depRoutes;
