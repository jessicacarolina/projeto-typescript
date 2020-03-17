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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dbConnection_1 = __importDefault(require("../../config/dbConnection"));
function insertPermission(nm_permission, cod_permission, ds_permission) {
    return __awaiter(this, void 0, void 0, function () {
        var conn, query, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dbConnection_1.default.connect()];
                case 1:
                    conn = _a.sent();
                    query = "\n        INSERT INTO tb_permission (nm_permission,cod_permission, ds_permission, fg_active)\n        VALUES($1, $2, $3, true);";
                    return [4 /*yield*/, conn.query(query, [
                            nm_permission,
                            cod_permission,
                            ds_permission,
                        ])];
                case 2:
                    result = _a.sent();
                    conn.release();
                    return [2 /*return*/, result.rows[0]];
            }
        });
    });
}
exports.insertPermission = insertPermission;
function verifyPermission(nm_permission, cod_permission) {
    return __awaiter(this, void 0, void 0, function () {
        var conn, query, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dbConnection_1.default.connect()];
                case 1:
                    conn = _a.sent();
                    query = "\n        SELECT *\n        FROM tb_permission\n        WHERE nm_permission = $1 AND cod_permission = $2;";
                    return [4 /*yield*/, conn.query(query, [nm_permission, cod_permission])];
                case 2:
                    result = _a.sent();
                    conn.release();
                    if (result.rowCount === 1)
                        return [2 /*return*/, true];
                    return [2 /*return*/, false];
            }
        });
    });
}
exports.verifyPermission = verifyPermission;
function getAllPermission() {
    return __awaiter(this, void 0, void 0, function () {
        var conn, query, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dbConnection_1.default.connect()];
                case 1:
                    conn = _a.sent();
                    query = "\n        SELECT id_permission, nm_permission, cod_permission\n        FROM tb_permission\n        WHERE fg_active = true";
                    return [4 /*yield*/, conn.query(query)];
                case 2:
                    result = _a.sent();
                    conn.release();
                    return [2 /*return*/, result.rows];
            }
        });
    });
}
exports.getAllPermission = getAllPermission;
function getPermission(id) {
    return __awaiter(this, void 0, void 0, function () {
        var conn, query, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dbConnection_1.default.connect()];
                case 1:
                    conn = _a.sent();
                    query = "\n        SELECT nm_permission, cod_permission\n        FROM tb_permission\n        WHERE fg_active = true AND id_permission = $1";
                    return [4 /*yield*/, conn.query(query, [id])];
                case 2:
                    result = _a.sent();
                    conn.release();
                    return [2 /*return*/, result.rows[0]];
            }
        });
    });
}
exports.getPermission = getPermission;
function updatePermission(nm_permission, cod_permission, ds_permission, id) {
    return __awaiter(this, void 0, void 0, function () {
        var conn, queryParte1, sets, values, k, queryParte2, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dbConnection_1.default.connect()];
                case 1:
                    conn = _a.sent();
                    queryParte1 = "\n    UPDATE tb_permission\n    SET ";
                    sets = [];
                    values = [id];
                    k = 2;
                    if (nm_permission !== undefined) {
                        sets.push("nm_permission = $" + k++);
                        values.push(nm_permission);
                    }
                    if (cod_permission !== undefined) {
                        sets.push("cod_permission = $" + k++);
                        values.push(cod_permission);
                    }
                    if (ds_permission !== undefined) {
                        sets.push("ds_permission = $" + k++);
                        values.push(ds_permission);
                    }
                    queryParte2 = "WHERE fg_active = true AND id_permission = $1";
                    return [4 /*yield*/, conn.query(queryParte1 + sets.join(', ') + queryParte2, values)];
                case 2:
                    result = _a.sent();
                    conn.release();
                    return [2 /*return*/, result.rows[0]];
            }
        });
    });
}
exports.updatePermission = updatePermission;
function verifyUpdatePermission(id) {
    return __awaiter(this, void 0, void 0, function () {
        var conn, query, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dbConnection_1.default.connect()];
                case 1:
                    conn = _a.sent();
                    query = "\n        SELECT *\n        FROM tb_permission\n        WHERE id_permission = $1;";
                    return [4 /*yield*/, conn.query(query, [id])];
                case 2:
                    result = _a.sent();
                    conn.release();
                    if (result.rowCount === 1)
                        return [2 /*return*/, true];
                    return [2 /*return*/, false];
            }
        });
    });
}
exports.verifyUpdatePermission = verifyUpdatePermission;
function deletePermission(id) {
    return __awaiter(this, void 0, void 0, function () {
        var conn, query, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dbConnection_1.default.connect()];
                case 1:
                    conn = _a.sent();
                    query = "\n    UPDATE tb_permission\n    SET fg_active = false\n    WHERE id_permission = $1";
                    return [4 /*yield*/, conn.query(query, [id])];
                case 2:
                    result = _a.sent();
                    conn.release();
                    return [2 /*return*/, result.rows[0]];
            }
        });
    });
}
exports.deletePermission = deletePermission;
