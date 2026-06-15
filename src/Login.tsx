import { useState } from "react";
import LoginRegister from "./components/LoginRegister";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="login-image">
      <div className="login-container">
        <LoginRegister
          isLoggedIn={isLoggedIn}
          onLogin={() => setIsLoggedIn(true)}
          onLogout={() => setIsLoggedIn(false)}
        />
      </div>
    </div>
  );
}

export default Login;