import { motion } from "framer-motion";
import { useState } from "react";

const AnimatedSquares = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div className="relative w-screen h-screen flex justify-center items-center">
      {/* Top Square */}
      <motion.div
        initial={{ x: 0, opacity: 1 }}
        animate={
          isAnimating
            ? { x: -200, opacity: 0 } // Move left and disappear
            : { x: 0, opacity: 1 }
        }
        transition={{ duration: 0.8 }}
        className="absolute w-20 h-20 bg-blue-500"
      />

      {/* Bottom Square */}
      <motion.div
        initial={{ x: 100 }}
        animate={isAnimating ? { x: 0 } : { x: 100 }} // Move to the center
        transition={{ duration: 0.8 }}
        className="absolute w-20 h-20 bg-green-500"
      />

      {/* Button to Trigger Animation */}
      <button
        onClick={() => setIsAnimating(!isAnimating)}
        className="absolute bottom-4 px-4 py-2 bg-gray-800 text-white rounded"
      >
        {isAnimating ? "Reset" : "Animate"}
      </button>
    </div>
  );
};

export default AnimatedSquares;
