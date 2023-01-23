import {
  getAuth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.initial";

initializeAuthentication();
const UseFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState({});
  const auth = getAuth();

  //email password sign in
  const emailPassSignIn = (email, passWord, navigate, name) => {
    //console.log(email, passWord, name, userInfo);
    createUserWithEmailAndPassword(auth, email, passWord)
      .then((result) => {
        setUser(result.user);
        //console.log(user);
        const userInformation = {
          email: email,
          userName: name,
        };
        fetch(`http://localhost:5000/user`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInformation),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.status === "success") {
              navigate("/home");
            }
          });
      })
      .catch((error) => {
        setError(error.message);
        alert(error.message);
      });
  };

  // email password login
  const emailPassLogIn = (email, password, navigate) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        console.log(user);
        navigate("/home");
      })
      .catch((error) => {
        setError(error.message);
        alert(error.message);
      });
  };

  //logout
  const Logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser("");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return {
    user,
    Logout,
    emailPassSignIn,
    emailPassLogIn,
  };
};
export default UseFirebase;
