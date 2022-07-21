import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/config";

export default function HomePage() {
  const [currentUser, setCurrentUser] = useState(null);

  auth.onAuthStateChanged((user) => {
    setCurrentUser(user);
  });

  const [signIn, setSignIn] = useState(true);
  const [signOut, setSignOut] = useState(!signIn);
  return (
    <>
      <h1>Sign In and Sign Up</h1>
      <h2>Home Page</h2>

      {!signIn || signOut ? (
        <div currentUser={currentUser}>
          <p>
            Please sign in with an existing account, or you can create an accout
            for free
          </p>
          <button>
            <Link to="/sign-in">Sign in</Link>
          </button>
          <button>
            {" "}
            <Link to="/sign-up">Create Account</Link>
          </button>
        </div>
      ) : (
        <>
          <p>You are Signed In as: </p>
          <h1>User Name</h1>
          <button onClick={() => setSignOut(!signOut)}>Sign Out</button>
        </>
      )}
    </>
  );
}
