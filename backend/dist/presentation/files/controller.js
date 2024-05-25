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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesController = void 0;
class FilesController {
    constructor(fileService) {
        this.fileService = fileService;
        this.uploadCSV = (request, response) => __awaiter(this, void 0, void 0, function* () {
            const file = request.file;
            this.fileService
                .uploadFile(file)
                .then((uploaded) => response.send({ message: uploaded }))
                .catch((error) => response
                .status(500)
                .send({ message: error.message ? error.message : error }));
        });
    }
}
exports.FilesController = FilesController;
