import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Login from "./components/Login";
import Doors from "./components/Doors";
import Lab from "./components/Lab";
import Header from "./components/Header";
import { saveState, loadState, clearState } from "./utils/storage";

const CREDENTIALS = { password: "open" };
const ALLOCATED_MS = 5 * 60 * 1000; // 5 minutes

function App() {
  const [step, setStep] = useState("login"); // login | lab
  const [remaining, setRemaining] = useState(
    loadState("remaining", ALLOCATED_MS)
  );
  const [lockout, setLockout] = useState(loadState("lockout", false));

  // countdown
  useEffect(() => {
    if (step === "lab" && !lockout) {
      const id = setInterval(() => {
        setRemaining((prev) => {
          if (prev <= 1000) {
            clearInterval(id);
            setLockout(true);
            saveState("lockout", true);
            setStep("login");
            return 0;
          }
          const newTime = prev - 1000;
          saveState("remaining", newTime);
          return newTime;
        });
      }, 1000);
      return () => clearInterval(id);
    }
  }, [step, lockout]);

  const handleLogin = (p) => {
    if (lockout) return false;
    if (p === CREDENTIALS.password) {
      setStep("lab");
      return true;
    }
    return false;
  };

  const goBackToLogin = () => {
  setStep("login");
};

  const resetDemo = () => {
    clearState("remaining");
    clearState("lockout");
    setRemaining(ALLOCATED_MS);
    setLockout(false);
    setStep("login");
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-black overflow-hidden">
      {/* Lab Component */}
      <div className="absolute inset-0 z-0">
          <Lab onExit={goBackToLogin} remaining={remaining} phase={step} />
      </div>

      {/* Doors */}
      <AnimatePresence>
        {step === "login" && <Doors key="doors" remaining={remaining} phase={step} />}
      </AnimatePresence>

      {/* Login animation overlay */}
      <AnimatePresence>
        {step === "login" && (
          <Login key="login" onLogin={handleLogin} lockout={lockout} />
        )}
      </AnimatePresence>

      {/* Reset button */}
      {step === "login" && <button
        onClick={resetDemo}
        className="absolute bottom-6 bg-[#0dd9d2] text-black font-medium rounded-sm p-2 z-20"
      >
        Reset Demo
      </button>}

      
    </div>
  );
}

export default App;
