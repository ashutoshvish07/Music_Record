import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};
  return (
    <div>
    <h1>Login Page</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label> UserName</label>
          <input type="email" placeholder="enter email" 
            value={email} onChange={(e)=>setemail(e.target.value)}
          />
        </div>
        <div>
          <label> Password</label>
          <input type="password" placeholder="enter password" 
            value={password} onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
