import React, { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config'
import axios from "axios";

// Creating a new context for authentication
export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();



// Defining the AuthProvider component
const AuthProvider = ({ children }) => {
  // Using the useState hook to manage the user state with an initial value of "joy"
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Creating an object with authentication information
  
  //create an account
  const createUser = (email, password)  => {
    return createUserWithEmailAndPassword(auth, email, password)

  }

  //sign with google account
  const signUpWithGmail = () => {
    return signInWithPopup(auth, googleProvider)
  }

  //login to email & password
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //logout login
     
    const logOut = () => {
        signOut(auth)
    }

    const deleteUser = async () => {
      try {
        await auth.currentUser.delete();
    
        // Optionally, perform additional cleanup in Firebase, e.g., remove user data from Firestore
        // await firestore.collection('users').doc(auth.currentUser.uid).delete();
      } catch (error) {
        console.error(error);
        throw new Error('Error deleting user from Firebase');
      }
    };

    //update Profile
    const updateUserProfile = (name, photoURL) => {
      return updateProfile(auth.currentUser, {
        displayName: name, 
        photoURL: photoURL
      })
    }

    

    //check signed-in user

    useEffect( () =>{
      const unsubscribe = onAuthStateChanged(auth, currentUser =>{
          // console.log(currentUser);
          setUser(currentUser);
          if(currentUser){
              const userInfo ={email: currentUser.email}
              axios.post('https://codehacker-mern.onrender.com/jwt', userInfo)
                .then( (response) => {
                  // console.log(response.data.token);
                  if(response.data.token){
                      localStorage.setItem("access-token", response.data.token)
                  }
                })
          } else{
             localStorage.removeItem("access-token")
          }
         
          setLoading(false);
      });

      return () =>{
          return unsubscribe();
      }
  }, [])
   

  const authInfo = {
    user,
    createUser,
    signUpWithGmail,
    login,
    logOut,
    updateUserProfile,
    deleteUser,
    loading



  };

  // Providing the authentication information to the components wrapped in this context
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

// Exporting the AuthProvider component as the default export
export default AuthProvider;
