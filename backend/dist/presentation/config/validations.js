"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findByQuery = exports.fileValidation = void 0;
const fileValidation = (file, validType) => {
    if (!file)
        throw new Error(`Insert a file!!`);
    const fileType = file.mimetype.split("/")[1];
    if (fileType !== validType)
        throw new Error(`File extension must be ${validType}`);
};
exports.fileValidation = fileValidation;
const findByQuery = (arrayUsers, query, validQuery) => {
    const { name, city, country, favorite_sport } = query;
    const queryKeys = Object.keys(query);
    const valid = queryKeys.find((query) => {
        return validQuery.includes(query);
    });
    if (!valid)
        throw new Error(`Invalid query/s, the app just admit [${validQuery}]`);
    if (name)
        arrayUsers = arrayUsers.filter((user) => user.name.toLowerCase() === name.toString().toLowerCase());
    if (city)
        arrayUsers = arrayUsers.filter((user) => user.city.toLowerCase() === city.toString().toLowerCase());
    if (country)
        arrayUsers = arrayUsers.filter((user) => user.country.toLowerCase() === country.toString().toLowerCase());
    if (favorite_sport)
        arrayUsers = arrayUsers.filter((user) => user.favorite_sport.toLowerCase() ===
            favorite_sport.toString().toLowerCase());
    if (!arrayUsers.length)
        throw new Error(`User not found`);
    return arrayUsers;
};
exports.findByQuery = findByQuery;
