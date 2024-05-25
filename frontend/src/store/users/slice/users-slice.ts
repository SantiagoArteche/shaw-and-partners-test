import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    filterBy: "",
  },
  reducers: {
    getUsers(state, { payload }) {
      state.users = payload;
    },
    filterUsers(state, { payload }) {
      state.filterBy = payload;
    },
  },
});

export const { getUsers, filterUsers } = userSlice.actions;
