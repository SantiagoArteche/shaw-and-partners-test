import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { User } from "./interfaces/user.interface";

export class UserController {
  constructor(private readonly userService: UserService) {}

  getUsers = (request: Request, response: Response) => {
    const { query } = request;

    this.userService
      .findAll(query as Partial<User>)
      .then((users) => response.status(200).send(users))
      .catch((error) =>
        response
          .status(500)
          .send({ message: error.message ? error.message : error })
      );
  };
}
