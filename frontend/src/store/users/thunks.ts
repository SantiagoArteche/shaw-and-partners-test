import Swal from "sweetalert2";
import { getUsers } from "./slice/users-slice";

export const getAllUsers = (filterBy?: string) => {
  return async (
    dispatch: (arg0: { payload: unknown; type: "user/getUsers" }) => void
  ) => {
    try {
      if (!filterBy) {
        const response = await fetch(`http://localhost:3000/api/users`).then(
          (res) => res.json()
        );

        if (response) {
          const users = await response;

          dispatch(getUsers(users));
        }
      } else {
        const response = await fetch(
          `http://localhost:3000/api/users?name=${filterBy.trim()}`
        ).then((res) => res.json());

        if (response.length) {
          const users = await response;

          dispatch(getUsers(users));
        } else {
          Swal.fire(
            response.message + "!",
            `User by name ${filterBy} not found`,
            "error"
          );
        }
      }
    } catch (error) {
      console.error(`Failed to fetch users`, error);
    }
  };
};
