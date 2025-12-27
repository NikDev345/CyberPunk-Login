import { useEffect, useState } from "react";
import CyberLogin from "./CyberLogin";
import BootSequence from "./BootSequence";

export default function App() {
  const [bootDone, setBootDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBootDone(true);
    }, 4200); // boot duration

    return () => clearTimeout(timer);
  }, []);

  return bootDone ? <CyberLogin /> : <BootSequence />;
}
