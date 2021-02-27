import React, { useCallback, useContext } from "react";
import app from "../../assets/database/base";
import { motion } from "framer-motion";
import { Redirect, withRouter } from "react-router";
import { AuthContext } from "../../assets/database/Auth";

const LoginForm = ({ history }) => {
  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();
      const { email, password } = e.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (err) {
        alert(err);
      }
    },
    [history]
  );
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }
  return (
    <form onSubmit={handleLogin}>
      <label>
        <span>Login</span>
        <input type="email" required name="email" />
      </label>
      <label>
        <span>password</span>
        <input type="password" required name="password" />
      </label>

      <motion.div
        className="btn-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.25, staggerChildren: 1 }}
      >
        <button type="submit">Log In</button>
        <button type="submit" disabled>
          Log in with google
        </button>
        <button type="submit" disabled>
          Log in with facebook
        </button>
      </motion.div>
    </form>
  );
};

export default withRouter(LoginForm);
