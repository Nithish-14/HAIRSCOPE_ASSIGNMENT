import { motion } from "framer-motion";

const LockAnimation = ({ onComplete }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <motion.div
        className="w-20 h-20 border-4 border-[#0dd9d2] rounded-full"
        animate={{ rotate: 360, opacity: [1, 0] }}
        transition={{ duration: 2 }}
        onAnimationComplete={onComplete}
      />
    </div>
  );
};

export default LockAnimation;
