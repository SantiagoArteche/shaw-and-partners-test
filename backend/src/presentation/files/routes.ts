import { Router } from "express";
import { FilesController } from "./controller";
import { FileService } from "../services/file.service";
import multer from "multer";

export class FileRoutes {
  static get routes() {
    const router = Router();

    const upload = multer({ dest: "/" });

    const service = new FileService();

    const controller = new FilesController(service);

    router.post("/", upload.single("file"), controller.uploadCSV);

    return router;
  }
}
