export const WIPE_USERS = "WIPE_USERS";
export const FETCH_USERS = "FETCH_USERS ";

export const fetchThunk = () => dispatch => {
  dispatch({ type: "pending" });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(json => dispatch({ type: FETCH_USERS, payload: json }));
};
export const wipeUsers = () => {
  return { type: WIPE_USERS };
};
