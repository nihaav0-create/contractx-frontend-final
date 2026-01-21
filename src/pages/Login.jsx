import { useState } from "react";
import { login } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const success = login(username.trim(), password.trim());

    if (success) {
      navigate("/");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="card" style={{ maxWidth: "400px", margin: "100px auto" }}>
      <h2>Login</h2>

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button onClick={handleLogin}>Login</button>

      <p style={{ marginTop: "10px", fontSize: "14px", opacity: 0.7 }}>
        Demo Login: <b>admin</b> / <b>1234</b>
      </p>
    </div>
  );
}
