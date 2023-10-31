import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const animation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

export default function AnimationWrapper({ children }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="flex-1 grid place-items-center"
        variants={animation}
        id="animation-wrapper"
        key={location}
        initial="initial"
        animate="animate"
        exit="exit"
        transition="transition">
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
