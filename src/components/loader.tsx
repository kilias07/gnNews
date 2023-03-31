import { motion } from "framer-motion";

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "60%",
  },
};
const loadingCircleTransition = {
  duration: 0.4,
  yoyo: Infinity,
  ease: "easeInOut",
};

function Loader() {
  return (
    <div className="h-screen">
      <div className="fixed w-full min-h-screen bg-white" />
      <div className="flex fixed w-full justify-center items-center h-screen">
        <motion.div
          className="w-16 h-16 flex justify-around [&>*]:block [&>*]:h-4 [&>*]:w-4 [&>*]:bg-red-600 [&>*]:rounded-full"
          variants={loadingContainerVariants}
          initial="start"
          animate="end"
        >
          <motion.span
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
          <motion.span
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
          <motion.span
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
        </motion.div>
      </div>
    </div>
  );
}

export default Loader;
