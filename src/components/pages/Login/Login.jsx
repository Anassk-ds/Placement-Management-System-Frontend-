import { useState } from "react";
import { Link } from "react-router-dom";
import Dashboard from "../../Dashboard/Dashboard";
import "./Login.css";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  function handleLogin() {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      setEmail("");
      setPassword("");
      setShowPassword(false);
      return;
    }

    setLoading(true);

    setTimeout(() => {
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email.");
        setLoading(false);
        return;
      }

      if (!passwordPattern.test(password)) {
        alert(
          "Password should contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character."
        );
        setLoading(false);
        return;
      }

      if (email !== "admin@gmail.com" || password !== "Admin@123") {
        alert("Invalid Email or Password");
        setLoading(false);
        return;
      }

      alert("Login Successful!");

      setIsLoggedIn(true);
      setLoading(false);
    }, 2000);
  }

  return (
    <div className="login-container">
      {!isLoggedIn ? (
        <>
          <h1>Placement Management Login</h1>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            disabled={loading}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            disabled={loading}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide Password" : "Show Password"}
          </button>

          <button
            type="button"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="register-text">
            Don't have an account?
            <Link to="/Register"> Register</Link>
          </p>
        </>
      ) : (
        <>
          <h2>Welcome Back!</h2>

          <button onClick={handleLogin}>Logout</button>

          <Dashboard />
        </>
      )}
    </div>
  );
}

export default Login;