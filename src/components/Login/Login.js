import React, { useState } from "react";
import LoginImg from "../../assets/images/Login.svg";
import { motion } from "framer-motion";
import RegisterForm from "./LoginRegister";
import LoginForm from "./LoginLogin";

function Login() {
  const [login, setLogin] = useState(true);

  return (
    <>
      <div className="Login-Main-Container">
        <motion.section
          className="section-Login-Main"
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <motion.header
            className="section-Login-Header"
            initial={{ x: "-50vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 1, type: "spring" }}
          >
            <h4>Learning App 2.0</h4>
          </motion.header>
          <main className="section-Login-Content">
            <header className="section-Login-Content-Info">
              <h2 onClick={() => setLogin(!login)}>
                {login ? "Login" : "Register"}
              </h2>
            </header>
            <article className="section-Login-Content-Form">
              {login ? <LoginForm /> : <RegisterForm />}
            </article>
          </main>
        </motion.section>
        <motion.div
          className="Login-ImgContainer"
          initial={{ opacity: 0, y: "100vh" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5, type: "spring" }}
        >
          <img src={LoginImg} alt="login Img" />
        </motion.div>
      </div>
    </>
  );
}

export default Login;
