"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var departaments_routes_1 = __importDefault(require("./routes/departaments.routes"));
var employees_routes_1 = __importDefault(require("./routes/employees.routes"));
var permission_routes_1 = __importDefault(require("./routes/permission.routes"));
var App = /** @class */ (function () {
    function App() {
        this.server = express_1.default();
        this.middlewares();
        this.routes();
    }
    App.prototype.middlewares = function () {
        this.server.use(express_1.default.json());
    };
    App.prototype.routes = function () {
        this.server.use(departaments_routes_1.default);
        this.server.use(employees_routes_1.default);
        this.server.use(permission_routes_1.default);
    };
    return App;
}());
exports.default = new App().server;
