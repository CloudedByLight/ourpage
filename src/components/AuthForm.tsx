import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function AuthForm() {
  const { user, login, signup, authError } = useAuth();
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Redirect on successful auth
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (isLogin) {
      await login(email, password);
    } else {
      await signup(email, password);
    }
    setLoading(false);
  };

  const toggleMode = (mode: boolean) => {
    setEmail("");
    setPassword("");
    setIsLogin(mode);
  };

  return (
    <div>
      <div>
        <button onClick={() => toggleMode(true)}>Login</button>
        <button onClick={() => toggleMode(false)}>Sign Up</button>
      </div>

      <form onSubmit={handleSubmit}>
        <h2>{isLogin ? "Log In" : "Create Account"}</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Please wait…" : isLogin ? "Login" : "Create Account"}
        </button>

        {authError && <p>{authError}</p>}
      </form>
    </div>
  );
}
