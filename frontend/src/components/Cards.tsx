/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { v4 as uuid } from "uuid";
import { UseAppDispatch, useAppSelector } from "../store/store";
import { getAllUsers } from "../store/users/thunks";
import { CardItem } from "./CardItem";
import { User } from "../interfaces/user.interface";

export const Cards = () => {
  const { users, filterBy } = useAppSelector((state) => state.users);
  const dispatch = UseAppDispatch();

  async function getUsers() {
    const users = await dispatch(getAllUsers(filterBy));
    return users;
  }

  useEffect(() => {
    getUsers();
  }, [filterBy]);

  if (!users.length) {
    return (
      <div className="flex justify-center items-center w-full">
        <h1 className="text-5xl text-center mt-10">
          Upload a CSV file to read his data!
        </h1>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-10 md:px-12 lg:px-14 grid  sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  gap-20  my-10">
      {users.length &&
        users.map(({ name, city, country, favorite_sport }: User) => (
          <CardItem
            key={uuid()}
            city={city}
            country={country}
            name={name}
            favorite_sport={favorite_sport}
          />
        ))}
    </div>
  );
};
