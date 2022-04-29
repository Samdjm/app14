import { useState } from "react";
import LoginForm from "../../container/LoginForm/LoginForm";
import SignUpForm from "../../container/SignUpForm/SignUpForm";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);

  function toggleLogin() {
    setIsLogin(!isLogin);
  }

  return (
    <div>
      {isLogin ? <LoginForm /> : <SignUpForm />}
      <p
        style={{
          cursor: "pointer",
          textDecoration: "underline",
          color: "royalblue",
        }}
        onClick={toggleLogin}
      >
        {isLogin
          ? "Pas encore membre? Inscrivez-vous!"
          : "Deja membre? Connectez-vous!"}
      </p>
    </div>
  );
}
