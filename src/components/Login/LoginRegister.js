import React, { useCallback } from "react";
import app from "../../assets/database/base";
import { motion } from "framer-motion";
import { withRouter } from "react-router";
const RegisterForm = ({ history }) => {
  const handleSignUp = useCallback(
    async (e) => {
      e.preventDefault();
      const { email, password } = e.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (err) {
        alert(err);
      }
    },
    [history]
  );
  return (
    <form onSubmit={handleSignUp}>
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
        <button type="submit">Register </button>
        <button type="submit">Register with google</button>
        <button type="submit">Register with facebook</button>
      </motion.div>
    </form>
  );
};
export default withRouter(RegisterForm);
