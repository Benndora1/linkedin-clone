import React, { useState } from "react";
import "./Login.css";
import "firebase/compat/auth";
import { Dispatch } from "redux";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch(); 
 
  const loginToApp = (e) => {
    e.preventDefault();
  };

  const register = () => {
    if (!name) {
      return alert("Please enter the Name");
    }

    auth.createUserWithEmailAndPassword(email, password)
    .then((userAuth) => {
        userAuth.user.updateProfile({
            displayName: name,
            photoURL: profilePic
          })
        //   dispatching the user to the redux store 
            .then(() => {
                dispatch(login({
                    uid: userAuth.user.uid,
                    email: userAuth.user.email,
                    displayName: name,
                    photoUrl: profilePic,
                }));
            }).catch(error => alert(error.message));});
 
  };

  return (
    <div className="login">
      <img
        src="https://www.technipages.com/wp-content/uploads/2020/09/LinkedIn-Does-Not-Load-Images-fix-600x314.jpg"
        alt=""
      />
      <form>
        <input
          type="text"
          value={name}
          placeholder="Full Name( required if registering)"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={profilePic}
          placeholder="Profile pic URL(optional)"
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="" type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p className="">
        Not a Member? {""}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default class Login;
