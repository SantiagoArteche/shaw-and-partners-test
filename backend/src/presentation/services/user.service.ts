import { findByQuery } from "../config/validations";
import { User } from "../users/interfaces/user.interface";
import { fileData } from "./file.service";

const validQuery: string[] = ["name", "favorite_sport", "city", "country"];
export class UserService {
  constructor() {}

  async findAll(query: Partial<User>): Promise<User[]> {
    let data = fileData;
    if (!fileData.length)
      throw new Error(`Upload at least one file before search users!`);

    if (Object.keys(query).length) {
      data = findByQuery(data, query, validQuery);
    }

    return data;
  }
}
