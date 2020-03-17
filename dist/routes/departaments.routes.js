"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var DepartmentController_1 = __importDefault(require("../app/controllers/DepartmentController"));
var depRoutes = new express_1.Router();
depRoutes.post('/departments', DepartmentController_1.default.insertDepartment);
depRoutes.get('/departments/:id', DepartmentController_1.default.getDepartment);
depRoutes.get('/departments', DepartmentController_1.default.getAllDepartment);
depRoutes.put('/departments/:id', DepartmentController_1.default.updateDepartment);
depRoutes.delete('/departments/:id', DepartmentController_1.default.deleteDepartment);
depRoutes.get('/departments/:id/employees', DepartmentController_1.default.getAllEmployees);
exports.default = depRoutes;
