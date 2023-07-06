import { useState } from "react";
import { auth } from "../../firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { FcGoogle } from "react-icons/Fc";
import GoogleButton from "react-google-button";
import { RiLogoutCircleLine } from "react-icons/Ri";
import { IconContext } from "react-icons";

const Login = () => {
  const [user, setUser] = useState(0);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    // signInWithRedirect(auth, provider);
  };

  const logOut = () => {
    if (confirm("Konfirmasi untuk logout") == true) {
      signOut(auth);
    }
    // signOut(auth);
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(1);
    } else {
      setUser(0);
    }
  });
  return (
    <>
      {user != 0 ? (
        <button
          type="button"
          onClick={logOut}
          className="text-red-600 hover:bg-red-700 hover:text-white font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2  dark:text-blue-500 dark:hover:text-white"
        >
          <IconContext.Provider
            value={{
              size: "22px",
              className: "",
            }}
          >
            <RiLogoutCircleLine />
          </IconContext.Provider>
          <span className="sr-only">SignOut</span>
        </button>
      ) : (
        <button
          type="button"
          onClick={googleSignIn}
          title="Login"
          className="text-blue-700   hover:bg-blue-700 hover:text-white font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2  dark:text-blue-500 dark:hover:text-white"
        >
          <IconContext.Provider
            value={{
              color: "#5CCFEE",
              size: "22px",
              className: "",
            }}
          >
            <span className="md:mr-1 sm:mr-2 truncate font-medium  text-sm text-white">
              Log In
            </span>
            <FcGoogle />
          </IconContext.Provider>
          <span className="sr-only">Google SignIn</span>
        </button>
      )}
    </>
  );
};

export default Login;
