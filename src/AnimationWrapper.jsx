import { motion } from "framer-motion";

const animation = {
  initial: { scale: 0.5, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.5, opacity: 0 },
  transition: { duration: 1, ease: "easeInOut" },
};

export default function AnimationWrapper({ children }) {
  return (
    <motion.div
      className="flex-1"
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition="transition">
      {children}
    </motion.div>
  );
}
