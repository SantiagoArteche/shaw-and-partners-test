import { fileData } from "../services/file.service";
import { User } from "../users/interfaces/user.interface";

export const fileValidation = (
  file: Express.Multer.File,
  validType: string
) => {
  if (!file) throw new Error(`Insert a file!!`);

  const fileType = file.mimetype.split("/")[1];

  if (fileType !== validType)
    throw new Error(`File extension must be ${validType}`);
};

export const findByQuery = (
  arrayUsers: typeof fileData,
  query: Partial<User>,
  validQuery: string[]
): User[] => {
  const { name, city, country, favorite_sport } = query;

  const queryKeys = Object.keys(query);

  const valid: string | undefined = queryKeys.find((query) => {
    return validQuery.includes(query);
  });

  if (!valid)
    throw new Error(`Invalid query/s, the app just admit [${validQuery}]`);

  if (name)
    arrayUsers = arrayUsers.filter(
      (user) => user.name.toLowerCase() === name.toString().toLowerCase()
    );

  if (city)
    arrayUsers = arrayUsers.filter(
      (user) => user.city.toLowerCase() === city.toString().toLowerCase()
    );

  if (country)
    arrayUsers = arrayUsers.filter(
      (user) => user.country.toLowerCase() === country.toString().toLowerCase()
    );

  if (favorite_sport)
    arrayUsers = arrayUsers.filter(
      (user) =>
        user.favorite_sport!.toLowerCase() ===
        favorite_sport.toString().toLowerCase()
    );

  if (!arrayUsers.length) throw new Error(`User not found`);

  return arrayUsers;
};
