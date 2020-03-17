"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var PermissionController_1 = __importDefault(require("../app/controllers/PermissionController"));
var perRoutes = new express_1.Router();
perRoutes.post('/permission', PermissionController_1.default.insertPermission);
perRoutes.get('/permission', PermissionController_1.default.getAllPermission);
perRoutes.get('/permission/:id', PermissionController_1.default.getPermission);
perRoutes.put('/permission/:id', PermissionController_1.default.updatePermission);
perRoutes.delete('/permission/:id', PermissionController_1.default.deletePermission);
exports.default = perRoutes;
