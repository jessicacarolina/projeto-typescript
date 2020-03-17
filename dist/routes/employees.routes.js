"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var EmployeeController_1 = __importDefault(require("../app/controllers/EmployeeController"));
var empRoutes = new express_1.Router();
empRoutes.post('/employee', EmployeeController_1.default.insertEmployee);
empRoutes.get('/employee', EmployeeController_1.default.getAllEmployee);
empRoutes.get('/employee/:id', EmployeeController_1.default.getEmployee);
empRoutes.delete('/employee/:id', EmployeeController_1.default.deleteEmployee);
empRoutes.put('/employee/:id', EmployeeController_1.default.updateEmployee);
empRoutes.post('/employee/:fk_employee/permissions/:fk_permission', EmployeeController_1.default.insertPermissionEmployee);
empRoutes.get('/employee/:id/permissions', EmployeeController_1.default.getPermissionEmployee);
empRoutes.delete('/employee/:fk_employee/permissions/:fk_permission', EmployeeController_1.default.deletePermissionEmployee);
exports.default = empRoutes;
