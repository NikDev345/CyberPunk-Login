import { useState } from "react";
import "./LoginGlass.css";

export default function LoginGlass() {
  const [show, setShow] = useState(false);

  return (
    <div className="page">
      <div className="card">
        <h1>Welcome back</h1>
        <p>Sign in to continue</p>

        <div className="field">
          <label>Username</label>
          <input placeholder="nikhilrn" />
        </div>

        <div className="field">
          <label>Password</label>
          <div className="passwordWrap">
            <input
              type={show ? "text" : "password"}
              placeholder="••••••••"
            />
            <button onClick={() => setShow(!show)}>
              {show ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <button className="loginBtn">Sign In</button>
      </div>
    </div>
  );
}
