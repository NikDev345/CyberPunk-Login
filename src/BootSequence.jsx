import { useEffect, useState } from "react";
import "./BootSequence.css";

const lines = [
  "Initializing neural core...",
  "Loading security modules...",
  "Establishing encrypted channel...",
  "System ready."
];

export default function BootSequence() {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    if (index < lines.length) {
      const timer = setTimeout(() => {
        setDisplay((prev) => [...prev, lines[index]]);
        setIndex((i) => i + 1);
      }, 900);

      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <div className="boot-screen">
      <pre>
        {display.map((line, i) => (
          <div key={i} className="boot-line">
            {line}
          </div>
        ))}
        <span className="cursor">▮</span>
      </pre>
    </div>
  );
}
