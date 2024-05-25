"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    constructor(userService) {
        this.userService = userService;
        this.getUsers = (request, response) => {
            const { query } = request;
            this.userService
                .findAll(query)
                .then((users) => response.status(200).send(users))
                .catch((error) => response
                .status(500)
                .send({ message: error.message ? error.message : error }));
        };
    }
}
exports.UserController = UserController;
