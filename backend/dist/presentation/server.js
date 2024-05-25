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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const whiteList = new Set(["http://localhost:4000"]);
const corsOptions = {
    origin: function (origin, callback) {
        if (whiteList.has(origin) || !origin) {
            callback(null, true);
        }
        else {
            callback(new Error("Access denied"));
        }
    },
};
class Server {
    constructor(port, routes) {
        this.app = (0, express_1.default)();
        this.PORT = port;
        this.routes = routes;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            this.app.use(express_1.default.urlencoded({ extended: true }));
            this.app.use(express_1.default.json());
            this.app.use((0, cors_1.default)(corsOptions));
            this.app.use(this.routes);
            this.app.listen(this.PORT, () => console.log(`Server running on PORT ${this.PORT}`));
        });
    }
}
exports.Server = Server;
