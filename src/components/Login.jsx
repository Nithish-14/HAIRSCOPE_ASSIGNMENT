import { useState } from "react";
import { GrFingerPrint } from "react-icons/gr";
import { motion } from "framer-motion";

const Login = ({ onLogin, lockout }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = onLogin(password);
    if (!success) {
      setError("Invalid credentials.");
    }
  };

  return (
    <motion.div
      className="relative z-10 flex flex-col items-center justify-center h-screen"
      initial={{ opacity: 1, scale: 1, rotate: 0 }}
      exit={{
        opacity: 0,
        scale: 0.2,
        rotate: 360,
        borderRadius: "50%",
        transition: { duration: 1, ease: "easeInOut" },
      }}
    >
      {lockout && (
        <p className="mb-4 rounded-lg bg-red-500/10 border border-red-500/30 p-3 text-sm text-red-200">
          Access locked. Time expired. Reset Demo
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-black border-2 border-white shadow-lg rounded-full p-20"
      >
        <GrFingerPrint className="text-6xl text-[#0dd9d2] mx-auto mb-4" />
        <p className="text-[#0dd9d2] mb-2">Enter Your Zicops Password</p>
        <input
          type="password"
          placeholder="Password"
          value={password}
          disabled={lockout}
          onChange={(e) => setPassword(e.target.value)}
          className="border bg-transparent rounded p-2 text-white placeholder-[#0dd9d2] border-[#0dd9d2]"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          disabled={lockout}
          className="bg-[#0dd9d2] text-black font-medium rounded-sm py-2 mt-2 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Enter Lab
        </button>
        <p className="text-[#adacac]">Hint: open</p>
      </form>
    </motion.div>
  );
};

export default Login;
