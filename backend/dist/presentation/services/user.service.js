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
exports.UserService = void 0;
const validations_1 = require("../config/validations");
const file_service_1 = require("./file.service");
const validQuery = ["name", "favorite_sport", "city", "country"];
class UserService {
    constructor() { }
    findAll(query) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = file_service_1.fileData;
            if (!file_service_1.fileData.length)
                throw new Error(`Upload at least one file before search users!`);
            if (Object.keys(query).length) {
                data = (0, validations_1.findByQuery)(data, query, validQuery);
            }
            return data;
        });
    }
}
exports.UserService = UserService;
