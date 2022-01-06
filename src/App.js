import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Login from "./Login";
import { selectUser, login, logout} from "./features/userSlice";
import { auth } from "./Firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  //persisting the logged in user
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))

        // user is logged in
      } else {

        // user is logged out
        dispatch(logout());
      }

    })
  })

  return (
    <div className="app">
      <Header />

      {/* if there is no user we wanna render a login page  */}

      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar />
          <Feed />
        </div>
      )}
    </div>
  );
}

export default App;
