import { Request, Response } from "express";
import { FileService } from "../services/file.service";

export class FilesController {
  constructor(private readonly fileService: FileService) {}

  uploadCSV = async (request: Request, response: Response) => {
    const file = request.file;

    this.fileService
      .uploadFile(file!)
      .then((uploaded) => response.send({ message: uploaded }))
      .catch((error) =>
        response
          .status(500)
          .send({ message: error.message ? error.message : error })
      );
  };
}
