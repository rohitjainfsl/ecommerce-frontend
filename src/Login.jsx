import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleRegistration(e) {
    e.preventDefault();
    axios
      .post("http://localhost:8080/register", {
        name,
        email,
        username,
        password,
      })
      .then((response) => {
        if (response.status === 200 && response.statusText === "OK") {
          console.log("Registration Successful");
          setName("")
          setEmail("")
          setUsername("")
          setPassword("")
        }
        if(response.status === 401 && response.statusText === "Username is taken"){
            console.log("Nahi hoga")
        }
      })
      .catch((err) => console.log(err));
  }

  function handleLogin(e) {
    e.preventDefault();
    axios.post("http://localhost:8080/login", {
        username, password
    }).then((response)=>{
        console.log(response)
    })
  }

  return (
    <>
      <h3>Login</h3>
      <form action="" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <h3>Register</h3>
      <form action="" onSubmit={handleRegistration}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Choose A Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Create a strong Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default Login;
