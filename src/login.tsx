import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import GoogleSvg from "./Components/navbar/Svg/GoogleSvg";
import AppleSvg from "./Components/navbar/Svg/AppleSvg";
function Login() {
  const saveData = () => {
    const user = { email: email , password : password };
    localStorage.setItem('user', JSON.stringify(user));
  };
  const [name, setName] = useState('');
  // Récupérer le nom depuis localStorage au chargement du composant
  useEffect(() => {
    const savedName = localStorage.getItem('name');
    if (savedName) {
      setName(savedName);
    }
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate("/dashboard");
  };
  return (
    <div className="login-container">
      <div className="login-screen">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="logo-profil">
            <img
              src="src/img/jpeg/hu-jiarui-Luhg-tamGfA-unsplash.jpg"
              alt="Logo"
              className="logo"
            />
          </div>
          <input
            type="email"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="Connecte" type="submit" onClick={saveData}>
            Se connecter
          </button>
          <button className="btn-login">
            <GoogleSvg />
            <p>Continue avec Google</p>
          </button>
          {/* <div className="line-or-line">
            <span></span>or<span></span>
          </div> */}
          <button className="apple-login">
            <AppleSvg />
            <p> Continue avec Apple </p>
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
