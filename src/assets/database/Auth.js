import React, { useEffect, useState } from "react";
import app from "./base";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    app.auth().onAuthStateChanged((data) => {
      setCurrentUser(data);
      setPending(false);
    });
  }, []);
  if (pending) {
    return <h1 className="Loading">Loading...</h1>;
  }
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
