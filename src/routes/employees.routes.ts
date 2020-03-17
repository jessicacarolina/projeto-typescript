import { Router } from 'express';

import EmployeeController from '../app/controllers/EmployeeController';

const empRoutes = Router();

empRoutes.post('/employee', EmployeeController.insertEmployee);
empRoutes.get('/employee', EmployeeController.getAllEmployee);
empRoutes.get('/employee/:id', EmployeeController.getEmployee);
empRoutes.delete('/employee/:id', EmployeeController.deleteEmployee);
empRoutes.put('/employee/:id', EmployeeController.updateEmployee);
empRoutes.post(
    '/employee/:fk_employee/permissions/:fk_permission',
    EmployeeController.insertPermissionEmployee
);
empRoutes.get(
    '/employee/:id/permissions',
    EmployeeController.getPermissionEmployee
);
empRoutes.delete(
    '/employee/:fk_employee/permissions/:fk_permission',
    EmployeeController.deletePermissionEmployee
);
export default empRoutes;
