import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Login from "./Login";
import { auth } from "./Firebase";
import { useDispatch } from "react-redux";
import { selectUser, login, logout } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user is logged in
        dispatch(
          login({
            email: userAuth.email,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        // user is logged out;
        dispatch(logout());
      }
    });
  }, []);

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
