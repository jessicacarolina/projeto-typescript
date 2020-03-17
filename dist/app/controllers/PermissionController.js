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
var Permission_1 = require("../models/Permission");
var PermissionController = /** @class */ (function () {
    function PermissionController() {
    }
    PermissionController.prototype.insertPermission = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, nm_permission, cod_permission, ds_permission, permissionExists, permission;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, nm_permission = _a.nm_permission, cod_permission = _a.cod_permission, ds_permission = _a.ds_permission;
                        return [4 /*yield*/, Permission_1.verifyPermission(nm_permission, cod_permission)];
                    case 1:
                        permissionExists = _b.sent();
                        if (!permissionExists) {
                            return [2 /*return*/, res
                                    .status(400)
                                    .json({ error: 'Permission already exists.' })];
                        }
                        return [4 /*yield*/, Permission_1.insertPermission(nm_permission, cod_permission, ds_permission)];
                    case 2:
                        permission = _b.sent();
                        return [2 /*return*/, res.json({
                                data: {
                                    mensagem: 'Permission successfully registered!',
                                    permission: permission,
                                },
                            })];
                }
            });
        });
    };
    PermissionController.prototype.getAllPermission = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var all;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Permission_1.getAllPermission()];
                    case 1:
                        all = _a.sent();
                        return [2 /*return*/, res.json({ data: all })];
                }
            });
        });
    };
    PermissionController.prototype.getPermission = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, per;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, Permission_1.getPermission(id)];
                    case 1:
                        per = _a.sent();
                        if (per) {
                            return [2 /*return*/, res.json({
                                    data: per,
                                })];
                        }
                        return [2 /*return*/, res.json({ error: 'Permission does not found' })];
                }
            });
        });
    };
    PermissionController.prototype.updatePermission = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, getUpdate, _a, nm_permission, cod_permission, ds_permission, update;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, Permission_1.verifyUpdatePermission(id)];
                    case 1:
                        getUpdate = _b.sent();
                        if (!getUpdate) {
                            return [2 /*return*/, res
                                    .status(400)
                                    .json({ error: 'Permission does not exists.' })];
                        }
                        _a = req.body, nm_permission = _a.nm_permission, cod_permission = _a.cod_permission, ds_permission = _a.ds_permission;
                        return [4 /*yield*/, Permission_1.updatePermission(nm_permission, cod_permission, ds_permission, id)];
                    case 2:
                        update = _b.sent();
                        return [2 /*return*/, res.json({
                                data: {
                                    message: 'Permission updated successfully',
                                    update: update,
                                },
                            })];
                }
            });
        });
    };
    PermissionController.prototype.deletePermission = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, del;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, Permission_1.deletePermission(id)];
                    case 1:
                        del = _a.sent();
                        return [2 /*return*/, res.json({
                                data: {
                                    mensagem: 'Permission successfully deleted!',
                                },
                                del: del,
                            })];
                }
            });
        });
    };
    return PermissionController;
}());
exports.default = new PermissionController();
