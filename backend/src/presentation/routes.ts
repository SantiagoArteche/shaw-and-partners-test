import { Router } from "express";
import { FileRoutes } from "./files/routes";
import { UserRoutes } from "./users/routes";

export class AppRoutes {
  static get routes() {
    const router = Router();

    router.use("/api/files", FileRoutes.routes);
    router.use("/api/users", UserRoutes.routes);

    return router;
  }
}
