import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleRegister(e) {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }
    const loginData = { username, email, password };
    localStorage.setItem("loginData", JSON.stringify(loginData));
    navigate("/")
  }

  return (

    <div className="container mt-5 w-50 h-75 p-5 border border-1 rounded "style={{ backgroundColor: "rgb(251, 219, 245)", color: "white" }}>
      <h3 className="text-center" style={{ color: "rgb(231, 18, 174)" }}>Register</h3>
      <form>
        <div className="mb-3 ">
          <label htmlFor="username" className="form-label" style={{ color: "rgb(231, 18, 174)" }}>Username</label>
          <input type="text" className="form-control" id="username" aria-describedby="usernameHelp" value={username}
            onChange={(e) => setUsername(e.target.value)} />

        </div>
        <div className="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label" style={{ color: "rgb(231, 18, 174)" }}>Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />

        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label" style={{ color: "rgb(231, 18, 174)" }}>Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button type="submit" className="btn  mt-2" onClick={handleRegister} style={{ backgroundColor: "rgb(231, 18, 174)" }}>Register</button>

      </form>
      <p className="text-center" style={{ color: "rgb(231, 18, 174)" }}>
        Already registered?{" "}
        <span
          style={{ color: "rgb(231, 18, 174)", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Login
        </span>
      </p>
    </div>

  )
}

export default Register
