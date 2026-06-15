import { useState } from "react";

interface LoginProps {
  isLoggedIn: boolean;
  onLogin: () => void;
  onLogout: () => void;
}

function LoginRegister({ isLoggedIn, onLogin, onLogout }: LoginProps) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const isFormValid =
    username.trim() !== "" &&
    email.trim() !== "" &&
    password.trim() !== "";

  return (
    <div>
      <h1>Login Page</h1>

      {!isLoggedIn && (
        <div className="form-container">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={onLogin}
            disabled={!isFormValid} 
          >
            Login
          </button>
        </div>
      )}

      {isLoggedIn && (
        <div>
          <p>Welcome, {username || "User"}!</p>
          <button onClick={onLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default LoginRegister;