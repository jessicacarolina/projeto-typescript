import { Router } from 'express';

import EmployeeController from '../app/controllers/EmployeeController';
import VerifyToken from '../utils';

const empRoutes = Router();

empRoutes.post('/employee', EmployeeController.insertEmployee);

empRoutes.get('/employee', EmployeeController.getAllEmployee);

empRoutes.get('/employee/:id', EmployeeController.getEmployee);
empRoutes.delete('/employee/:id', VerifyToken.validToken, EmployeeController.deleteEmployee);
empRoutes.put('/employee/:id', VerifyToken.validToken, EmployeeController.updateEmployee);
empRoutes.post(
    '/employee/:fk_employee/permissions/:fk_permission', VerifyToken.validToken,
    EmployeeController.insertPermissionEmployee
);
empRoutes.get(
    '/employee/:id/permissions', VerifyToken.validToken,
    EmployeeController.getPermissionEmployee
);
empRoutes.delete(
    '/employee/:fk_employee/permissions/:fk_permission', VerifyToken.validToken,
    EmployeeController.deletePermissionEmployee
);
export default empRoutes;
