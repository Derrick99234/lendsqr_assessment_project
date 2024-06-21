import React, { useState } from "react";
import logo from "../assets/Group.svg";
import pablo from "../assets/loginImg.svg";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
function Login() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in both fields");
      return;
    }

    // Navigate to Dashboard
    navigate("/dashboard");
    console.log("Email:", email);
    console.log("Password:", password);
  };
  return (
    <section className="login_section">
      <div>
        <img src={logo} alt="" className="logo" />
        <img src={pablo} alt="" className="loginImg" />
      </div>
      <form onSubmit={handleLogin} className="loginForm">
        <h2>Welcome!</h2>
        <p>Enter details to login.</p>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="rel">
          <Input
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span onClick={() => setIsPasswordVisible((prev) => !prev)}>
            {isPasswordVisible ? "Hide" : "Show"}
          </span>
        </div>
        <span>Forgot PASSWORD?</span>
        <button type="submit">LOG IN</button>
        {error && <p className="error">{error}</p>}
      </form>
    </section>
  );
}

export default Login;
