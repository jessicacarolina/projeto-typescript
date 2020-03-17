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
var Department_1 = require("../models/Department");
var DepartmentController = /** @class */ (function () {
    function DepartmentController() {
    }
    DepartmentController.prototype.insertDepartment = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, nm_department, ds_department, departExists, department;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, nm_department = _a.nm_department, ds_department = _a.ds_department;
                        return [4 /*yield*/, Department_1.verifyDepartment(nm_department)];
                    case 1:
                        departExists = _b.sent();
                        if (departExists) {
                            return [2 /*return*/, res
                                    .status(400)
                                    .json({ error: 'Department already exists.' })];
                        }
                        return [4 /*yield*/, Department_1.insertDepartment(nm_department, ds_department)];
                    case 2:
                        department = _b.sent();
                        return [2 /*return*/, res.json({
                                data: {
                                    message: 'The department has been successfully registered!',
                                    department: department,
                                },
                            })];
                }
            });
        });
    };
    DepartmentController.prototype.getDepartment = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, dep;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, Department_1.getDepartment(id)];
                    case 1:
                        dep = _a.sent();
                        if (dep) {
                            return [2 /*return*/, res.json({
                                    id: dep.id_department,
                                    name: dep.nm_department,
                                    description: dep.ds_department,
                                })];
                        }
                        return [2 /*return*/, res.json({ error: 'Department does not found' })];
                }
            });
        });
    };
    DepartmentController.prototype.getAllDepartment = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var all;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Department_1.getAllDepartment()];
                    case 1:
                        all = _a.sent();
                        return [2 /*return*/, res.json({ data: all })];
                }
            });
        });
    };
    DepartmentController.prototype.deleteDepartment = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, del;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, Department_1.deleteDepartment(id)];
                    case 1:
                        del = _a.sent();
                        return [2 /*return*/, res.json({ message: 'Department deleted', del: del })];
                }
            });
        });
    };
    DepartmentController.prototype.updateDepartment = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, getUpdate, _a, nm_department, ds_department, update;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, Department_1.verifyUpdateDepartment(id)];
                    case 1:
                        getUpdate = _b.sent();
                        if (!getUpdate) {
                            return [2 /*return*/, res
                                    .status(400)
                                    .json({ error: 'Department does not exists.' })];
                        }
                        _a = req.body, nm_department = _a.nm_department, ds_department = _a.ds_department;
                        return [4 /*yield*/, Department_1.updateDepartment(nm_department, ds_department, id)];
                    case 2:
                        update = _b.sent();
                        return [2 /*return*/, res.json({
                                message: 'Department updated successfully',
                                update: update,
                            })];
                }
            });
        });
    };
    DepartmentController.prototype.getAllEmployees = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, verify, allEmployees;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, Department_1.verifyUpdateDepartment(id)];
                    case 1:
                        verify = _a.sent();
                        if (!verify) {
                            return [2 /*return*/, res.status(400).json({ error: 'Department does not found' })];
                        }
                        return [4 /*yield*/, Department_1.getAllEmployees(id)];
                    case 2:
                        allEmployees = _a.sent();
                        return [2 /*return*/, res.json(allEmployees)];
                }
            });
        });
    };
    return DepartmentController;
}());
exports.default = new DepartmentController();
