import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import { AuthProvider } from "./assets/database/Auth";
import PrivateRoute from "./assets/database/PrivateRoute";
import "./styles/main.scss";
import MainPage from "./routes/MainPage";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Route exact path="/login" component={Login} />
          <PrivateRoute path="/" component={MainPage} />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
