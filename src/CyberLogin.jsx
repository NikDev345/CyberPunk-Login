import { useEffect, useState } from "react";
import MatrixRain from "./MatrixRain";
import "./CyberLogin.css";

export default function CyberLogin() {
  const fullText = "NIKHIL_RN";

  const [display, setDisplay] = useState("");
  const [show, setShow] = useState(false);
  const [scan, setScan] = useState(false);

  // auth states: idle | authenticating | granted | denied
  const [authState, setAuthState] = useState("idle");
  const [systemText, setSystemText] = useState("");

  /* ───────── Typing Glitch (runs once) ───────── */
  useEffect(() => {
    let i = 0;
    const glitchChars = "!@#$%^&*";

    const interval = setInterval(() => {
      if (i < fullText.length) {
        setDisplay(
          fullText.slice(0, i) +
            glitchChars[Math.floor(Math.random() * glitchChars.length)]
        );
        i++;
      } else {
        setDisplay(fullText);
        clearInterval(interval);
      }
    }, 90);

    return () => clearInterval(interval);
  }, []);

  /* ───────── Show / Hide Password ───────── */
  const handleShow = () => {
    setShow((prev) => !prev);
    setScan(true);
    setTimeout(() => setScan(false), 600);
  };

  /* ───────── Authentication Flow ───────── */
  const handleEnter = () => {
    if (authState !== "idle") return;

    setAuthState("authenticating");
    setSystemText("AUTHENTICATING…");

    setTimeout(() => {
      setSystemText("VERIFYING IDENTITY…");
    }, 1200);

    setTimeout(() => {
      // simulate success / failure
      const success = Math.random() > 0.4;

      if (success) {
        setAuthState("granted");
        setSystemText("ACCESS GRANTED");
      } else {
        setAuthState("denied");
        setSystemText("ACCESS DENIED");
      }
    }, 2400);

    // reset after denial
    setTimeout(() => {
      if (authState === "denied") {
        setAuthState("idle");
        setSystemText("");
        setShow(false);
      }
    }, 4200);
  };

  return (
    <div className="cyber-page">
      <MatrixRain />

      <div
        className={`cyber-card 
          ${scan ? "scan" : ""} 
          ${authState}`}
      >
        <h1>ACCESS MODE</h1>
        <p>Neural authentication required</p>

        <div className="field">
          <label>USER ID</label>
          <input value={display} readOnly disabled />
        </div>

        <div className="field">
          <label>PASSWORD</label>
          <div className="password-wrap">
            <input
              type={show ? "text" : "password"}
              placeholder="••••••••"
              disabled={authState !== "idle"}
            />
            <button
              onClick={handleShow}
              disabled={authState !== "idle"}
            >
              {show ? "HIDE" : "SHOW"}
            </button>
            <span className="scanline" />
          </div>
        </div>

        {systemText && (
          <div className="system-text">{systemText}</div>
        )}

        <button
          className="enter-btn"
          onClick={handleEnter}
          disabled={authState !== "idle"}
        >
          ENTER SYSTEM
        </button>
      </div>
    </div>
  );
}
