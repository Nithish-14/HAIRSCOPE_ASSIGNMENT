import { motion } from "framer-motion";
import Header from "./Header";

function Lab({ onExit, remaining, phase }) {
  const labs = [
    { name: "React JS", logo: "/logos/react.png" },
    { name: "C++", logo: "https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/1ac69ce5fbc389725f16f989fa53c62d6e1b4883/programming%20languages/c%2B%2B.svg" },
    { name: "Angular", logo: "/logos/angular.png" },
    { name: "Tailwind CSS", logo: "/logos/tailwind.png" },
    { name: "GraphQL", logo: "/logos/graphql.png" },
    { name: "Node.js", logo: "https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/1ac69ce5fbc389725f16f989fa53c62d6e1b4883/frameworks/nodejs.svg" },
    { name: "TensorFlow", logo: "/logos/tensorflow.png" },
    { name: "HTML5", logo: "/https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/1ac69ce5fbc389725f16f989fa53c62d6e1b4883/social%20icons/html5.svg" },
    { name: "Python", logo: "https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/1ac69ce5fbc389725f16f989fa53c62d6e1b4883/programming%20languages/python.svg" },
    { name: "PHP", logo: "https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/1ac69ce5fbc389725f16f989fa53c62d6e1b4883/social%20icons/php.svg" },
    { name: "Java", logo: "https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/1ac69ce5fbc389725f16f989fa53c62d6e1b4883/programming%20languages/java.svg" },
  ];

  return (
    <div className="w-full h-full text-white relative p-10">
      <Header remaining={remaining} phase={phase} />

      {phase === "lab" && (
        <div className="text-right mt-5">
          <button
            onClick={onExit}
            className="px-6 py-2 bg-[#0dd9d2] hover:bg-[#5ab9b6] text-black font-medium rounded-sm shadow-md"
          >
            Exit Lab
          </button>
        </div>
      )}
      <div className="mt-6 flex w-full bg-black border border-cyan-500">
        
        <div className="w-1/4 flex flex-col items-center justify-center space-y-6 border-r border-cyan-500 p-4">
          <select className="bg-black border border-cyan-500 px-3 py-2 rounded">
            <option>Programming</option>
            <option>AI / ML</option>
            <option>Databases</option>
          </select>

        
          <div className="grid grid-cols-3 gap-2">
            <div></div>
            <button className="p-3 border border-cyan-500 rounded">↑</button>
            <div></div>
            <button className="p-3 border border-cyan-500 rounded">←</button>
            <div></div>
            <button className="p-3 border border-cyan-500 rounded">→</button>
            <div></div>
            <button className="p-3 border border-cyan-500 rounded">↓</button>
            <div></div>
          </div>

          <button className="px-4 py-2 bg-cyan-500 text-black rounded">
            Enter Labs
          </button>
        </div>

    
        <div className="w-3/4 grid grid-cols-4 gap-6 p-6 bg-black relative">
          {labs.map((lab, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center border-2 border-cyan-500 rounded-lg p-6 hover:bg-cyan-500/20 transition"
            >
              <img
                src={lab.logo}
                alt={lab.name}
                className="max-h-16 max-w-[80%] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Lab;
