"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const file_service_1 = require("../services/file.service");
const multer_1 = __importDefault(require("multer"));
class FileRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const upload = (0, multer_1.default)({ dest: "/" });
        const service = new file_service_1.FileService();
        const controller = new controller_1.FilesController(service);
        router.post("/", upload.single("file"), controller.uploadCSV);
        return router;
    }
}
exports.FileRoutes = FileRoutes;
