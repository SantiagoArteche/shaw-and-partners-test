import csv from "csv-parser";
import fs from "fs";
import { fileValidation } from "../config/validations";
import { User } from "../users/interfaces/user.interface";

export const fileData: User[] = [];

export class FileService {
  private validType = "csv";

  public async uploadFile(file: Express.Multer.File): Promise<string> {
    fileValidation(file, this.validType);

    const filePath = file.path;

    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (row: any) => {
        fileData.push(row);
      })
      .on("end", () => {
        fs.unlinkSync(filePath);
      });

    return "The file was uploaded successfully.";
  }
}
