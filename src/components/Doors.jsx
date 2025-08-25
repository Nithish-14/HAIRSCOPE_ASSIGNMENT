import { motion } from "framer-motion";
import { GrYoga } from "react-icons/gr";
import { GoProjectSymlink } from "react-icons/go";
import { IoTimerOutline } from "react-icons/io5";

function Doors({ remaining, phase }) {
    const minutes = Math.floor(remaining / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);

  return (
    <div className="absolute top-20 left-0 right-0 bottom-20 flex z-10">
      {/* Left Door */}
      <motion.div
        className="w-1/2 h-full bg-transparent flex items-center backdrop-blur-sm border-2 border-[#0dd9d2]"
        initial={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%", opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <div>
        <div className="h-full pl-20 pt-10">
          <h1 className="text-white text-2xl font-bold uppercase mb-2">Java</h1>
          <p className="text-gray-400 text-sm mb-2">This Course is provisioned by <span className="text-white font-bold">Zicops Labs</span></p>
          <ul className="list-disc pl-5 flex items-center w-80 justify-between">
            <li className="text-white text-md font-light">Labs</li>
            <li className="text-white text-md  font-light">Excercises</li>
            <li className="text-white text-md font-light">Do it Yourself</li>
          </ul>
          <div className="pl-5 mt-5">
            <div className="flex items-center mb-5">
             <GrYoga className="text-7xl border border-[#0dd9d2] text-[#0dd9d2] mr-5" />
             <div>
                 <h1 className="text-white text-md font-extrabold tracking-wide">EXCERCISE</h1>
                 <p className="text-gray-400 text-sm"><span className="text-6xl text-[#0dd9d2] font-bold">9</span> completed out of 84</p>
             </div>
            </div>
            <div className="flex items-center mb-5">
             <GoProjectSymlink className="text-7xl border border-[#0dd9d2] mr-5 text-[#0dd9d2] mr-4" />
             <div>
                 <h1 className="text-white text-md font-extrabold tracking-wide">PROJECTS</h1>
                 <p className="text-gray-400 text-sm"><span className="text-6xl text-[#0dd9d2] font-bold">2</span> completed out of 84</p>
             </div>
            </div>
            <div className="flex items-center mb-5">
             <IoTimerOutline className="text-7xl border border-[#0dd9d2] mr-5 text-[#0dd9d2] mr-4" />
             <div>
                 <h1 className="text-white  text-md font-extrabold tracking-wide">TIME SPENT</h1>
                 <p className="text-gray-400 text-sm"><span className="text-6xl text-[#0dd9d2] font-bold">5</span> completed out of 84</p>
             </div>
            </div>
          </div>
        </div>
        </div>
      </motion.div>
      {/* Right Door */}
      <motion.div
        className="w-1/2 h-full bg-transparent backdrop-blur-sm border-2 border-[#0dd9d2]"
        initial={{ x: 0, opacity: 1 }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        
        <div className="flex flex-col items-center justify-center h-full ml-20">
        <div className="uppercase text-2xl text-white font-light">Allocated Time</div>
        <div className="font-mono text-6xl text-[#0dd9d2] mt-3 mb-3">
          {minutes}:{seconds.toString().padStart(2, "0")}
        </div>
        <div className="text-white font-light">
          {phase === "lab" ? "Counting down" : "Preserved"}
        </div>
      </div>
      </motion.div>
    </div>
  );
}

export default Doors;
