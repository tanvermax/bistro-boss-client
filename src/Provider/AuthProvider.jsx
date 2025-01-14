import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import Swal from "sweetalert2";
import useAxiospublic from "../Hooks/useAxiospublic";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const axiosPublic = useAxiospublic();


  const createnewuser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateuserprofile = async (updateData) => {
    await updateProfile(auth.currentUser, updateData);
    setUser({ ...auth.currentUser });
  };
  const googleprovier = new GoogleAuthProvider();

  const handlegooglelogin = () => {
    signInWithPopup(auth, googleprovier).then((ress) => {
      setUser(ress.user);
    
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
      });
      return ress.user;
    })
    .catch((error) => {
      console.error("Google login error:", error);
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
      });
      throw error; // Rethrow the error for the caller to handle
    });
  };
  const loginuser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logoutuser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      if (currentuser) {
        setUser(currentuser);
        console.log("currentuser : ", currentuser.email); // Safe to access currentuser.email
        console.log("currentuser : ", currentuser.displayName);
        const userinfo = {email : currentuser.email}
        axiosPublic.post('/jwt',userinfo)
        .then(res=>{
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
          }
        })
      } else {
        localStorage.removeItem("access-token");
        setUser(null); // Ensure user is null when not authenticated
      }
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const auhtinfo = {
    user,
    loading,
    createnewuser,
    loginuser,
    handlegooglelogin,
    logoutuser,
    updateuserprofile,
  };

  return (
    <AuthContext.Provider value={auhtinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
