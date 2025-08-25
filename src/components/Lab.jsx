import { motion } from "framer-motion";
import Header from "./Header";
import labImage from '../assets/Screenshot 2025-08-25 152749.png'

function Lab({ onExit, remaining, phase }) {
  return (
    <div className="w-full h-full text-white relative p-10">
      {<Header remaining={remaining} phase={phase} />}
      {phase === "lab" && (
        <div className={`text-right mt-5 ${phase === "login" ? 'invisible' : 'block'}`}>
        <button
          onClick={onExit}
          className="px-6 py-2 bg-[#0dd9d2] hover:bg-[#5ab9b6] text-black font-medium rounded-sm p-2 shadow-md"
        >
          Exit Lab
        </button>
        </div>
      )} 
      <img
        src={labImage}
        className="inset-0 w-full object-cover z-0 mt-2"
        alt="Lab Background"
      />
    </div>
  );
}

export default Lab;
