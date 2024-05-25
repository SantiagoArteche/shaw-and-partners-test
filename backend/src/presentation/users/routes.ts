import { Router } from "express";
import { UserController } from "./controller";
import { UserService } from "../services/user.service";

export class UserRoutes {
  static get routes() {
    const router = Router();

    const service = new UserService();

    const controller = new UserController(service);

    router.get("/", controller.getUsers);

    return router;
  }
}
