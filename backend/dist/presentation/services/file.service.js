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
exports.FileService = exports.fileData = void 0;
const csv_parser_1 = __importDefault(require("csv-parser"));
const fs_1 = __importDefault(require("fs"));
const validations_1 = require("../config/validations");
exports.fileData = [];
class FileService {
    constructor() {
        this.validType = "csv";
    }
    uploadFile(file) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, validations_1.fileValidation)(file, this.validType);
            const filePath = file.path;
            fs_1.default.createReadStream(filePath)
                .pipe((0, csv_parser_1.default)())
                .on("data", (row) => {
                exports.fileData.push(row);
            })
                .on("end", () => {
                fs_1.default.unlinkSync(filePath);
            });
            return "The file was uploaded successfully.";
        });
    }
}
exports.FileService = FileService;
