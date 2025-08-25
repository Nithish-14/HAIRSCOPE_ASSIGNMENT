function Header({ remaining, phase }) {
  const minutes = Math.floor(remaining / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);
 
  return (

    <div className={`flex items-center justify-between bg-transparent w-full border rounded-md px-10 py-2 border-[#0dd9d2] ${phase === "login"? 'invisible' : 'flex'}`}>
      <div>
        <h1 className="text-white text-3xl font-medium tracking-tight mb-1">
          Zicops Lab Access
        </h1>
        <p className="text-sm text-[#0dd9d2]">
          Secure entry for authorized personnel
        </p>
      </div>
      <div className="text-right">
        <div className="uppercase text-white text-1xl font-medium">Allocated Time</div>
        <div className="font-mono text-4xl text-[#0dd9d2] mt-1">
          {minutes}:{seconds.toString().padStart(2, "0")}
        </div>
        <div className="text-white font-light">
          {phase === "lab" ? "Counting down" : "Preserved"}
        </div>
      </div>
    </div>
  );
}

export default Header;
