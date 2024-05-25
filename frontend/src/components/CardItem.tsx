import { User } from "../interfaces/user.interface";

export const CardItem = ({ name, city, country, favorite_sport }: User) => {
  return (
    <div className=" py-10 px-2 min-h-[300px] border-[1px] border-black rounded-lg text-center flex flex-col justify-around capitalize">
      <h2>Name: {name}</h2>
      <p>City: {city}</p>
      <p>Country: {country}</p>
      <p>Favorite Sport: {favorite_sport}</p>
    </div>
  );
};
