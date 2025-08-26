import { motion } from "framer-motion";
import Header from "./Header";

function Lab({ onExit, remaining, phase }) {
  const labs = [
  { name: "React JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "Tailwind CSS", logo: "https://cdnlogo.com/logos/t/34/tailwind-css.svg" },
  { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
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
          {labs.map((lab, index) => (
            <div
              key={index}
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
