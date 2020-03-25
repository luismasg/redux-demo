import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// opcion 1
import { wipeUsers, fetchThunk } from "./actions/";

// opcion 2
// import { wipeUsers, fetchThunk } from "./reducers/user";

function App(props) {
  const user = useSelector(s => s.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchThunk());
  }, [dispatch]);

  const monos = user.map(item => (
    <p style={{ padding: 10, border: "1px solid blue", textAlign: "center" }}>
      {item.username}
    </p>
  ));
  const onDelete = () => {
    dispatch(wipeUsers());
  };

  // console.log(actions);
  return (
    <div className="App">
      <h1>user:</h1>
      {monos}
      <hr />
      <button onClick={onDelete}>borrar</button>
    </div>
  );
}

export default App;
