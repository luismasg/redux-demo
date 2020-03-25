import { WIPE_USERS, FETCH_USERS } from "../actions";
const initialState = [];
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_USERS:
      return payload;
    case WIPE_USERS:
      return initialState;
    default:
      return state;
  }
};

// opcion 2

// import { createSlice } from "@reduxjs/toolkit";
// const userSlice = createSlice({
//   reducers: {
//     fetchUsers: (s, action) => action.payload,
//     wipeUsers: (state, payload) => []
//   },
//   name: "users",
//   initialState: []
// });
// export default userSlice.reducer;
// export const { wipeUsers, fetchUsers } = userSlice.actions;
// export const fetchThunk = () => dispatch => {
//   dispatch({ type: "pending" });
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(json => dispatch(fetchUsers(json)));
// };
