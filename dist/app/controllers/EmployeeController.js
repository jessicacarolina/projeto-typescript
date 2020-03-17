"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("../models/Employee");
var utils_1 = require("../../utils");
var EmployeeController = /** @class */ (function () {
    function EmployeeController() {
    }
    EmployeeController.prototype.insertEmployee = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, fk_department, name, surname, cpf, email, salary, formatar, employeeExists, employee;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, fk_department = _a.fk_department, name = _a.name, surname = _a.surname, cpf = _a.cpf, email = _a.email, salary = _a.salary;
                        formatar = utils_1.formataCPF(cpf);
                        return [4 /*yield*/, Employee_1.verifyEmployee(formatar, fk_department)];
                    case 1:
                        employeeExists = _b.sent();
                        if (employeeExists) {
                            return [2 /*return*/, res.status(400).json({ error: 'Employee already exists.' })];
                        }
                        return [4 /*yield*/, Employee_1.insertEmployee(fk_department, name, surname, formatar, email, salary)];
                    case 2:
                        employee = _b.sent();
                        return [2 /*return*/, res.json({
                                message: 'User successfully registered!',
                                employee: employee,
                            })];
                }
            });
        });
    };
    EmployeeController.prototype.getAllEmployee = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var all;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Employee_1.getAllEmployee()];
                    case 1:
                        all = _a.sent();
                        return [2 /*return*/, res.json({ data: all })];
                }
            });
        });
    };
    EmployeeController.prototype.getEmployee = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, emp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, Employee_1.getEmployee(id)];
                    case 1:
                        emp = _a.sent();
                        if (emp) {
                            return [2 /*return*/, res.json({
                                    departamento: emp.fk_department,
                                    id: emp.id_employee,
                                    name: emp.name,
                                    sobrenome: emp.surname,
                                    cpf: emp.cpf,
                                    salário: emp.salary,
                                })];
                        }
                        return [2 /*return*/, res.json({ error: 'Employee does not found' })];
                }
            });
        });
    };
    EmployeeController.prototype.deleteEmployee = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, del;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, Employee_1.deleteEmployee(id)];
                    case 1:
                        del = _a.sent();
                        return [2 /*return*/, res.json({ data: { message: 'Employee deleted', del: del } })];
                }
            });
        });
    };
    EmployeeController.prototype.insertPermissionEmployee = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, fk_employee, fk_permission, hasPermission, permission;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.params, fk_employee = _a.fk_employee, fk_permission = _a.fk_permission;
                        return [4 /*yield*/, Employee_1.verifyPermission(fk_permission)];
                    case 1:
                        hasPermission = _b.sent();
                        if (!hasPermission) {
                            return [2 /*return*/, res
                                    .status(400)
                                    .json({ error: 'Permission does not exists.' })];
                        }
                        return [4 /*yield*/, Employee_1.insertPermissionEmployee(fk_employee, fk_permission)];
                    case 2:
                        permission = _b.sent();
                        return [2 /*return*/, res.json({
                                data: {
                                    mensagem: 'Permission granted successfully!',
                                    permission: permission,
                                },
                            })];
                }
            });
        });
    };
    EmployeeController.prototype.getPermissionEmployee = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, getPer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, Employee_1.getPermissionEmployee(id)];
                    case 1:
                        getPer = _a.sent();
                        if (getPer) {
                            return [2 /*return*/, res.json({
                                    data: {
                                        permissão: getPer.nm_permission,
                                    },
                                })];
                        }
                        return [2 /*return*/, res.json({ error: 'Employee does not have permissions' })];
                }
            });
        });
    };
    EmployeeController.prototype.deletePermissionEmployee = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, fk_employee, fk_permission, delPermission;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.params, fk_employee = _a.fk_employee, fk_permission = _a.fk_permission;
                        return [4 /*yield*/, Employee_1.deletePermissionEmployee(fk_employee, fk_permission)];
                    case 1:
                        delPermission = _b.sent();
                        return [2 /*return*/, res.json({
                                data: { message: 'Permission deleted', delPermission: delPermission },
                            })];
                }
            });
        });
    };
    EmployeeController.prototype.updateEmployee = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, upEmployee, _a, name, surname, cpf, email, salary, formatar, updateEmp;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, Employee_1.verifyUpdateEmployee(id)];
                    case 1:
                        upEmployee = _b.sent();
                        if (!upEmployee) {
                            return [2 /*return*/, res.status(400).json({ error: 'Employee does not exists.' })];
                        }
                        _a = req.body, name = _a.name, surname = _a.surname, cpf = _a.cpf, email = _a.email, salary = _a.salary;
                        formatar = utils_1.formataCPF(cpf);
                        return [4 /*yield*/, Employee_1.updateEmployee(name, surname, formatar, email, salary, id)];
                    case 2:
                        updateEmp = _b.sent();
                        return [2 /*return*/, res.json({
                                data: {
                                    message: 'User updated successfully',
                                    updateEmp: updateEmp,
                                },
                            })];
                }
            });
        });
    };
    return EmployeeController;
}());
exports.default = new EmployeeController();
