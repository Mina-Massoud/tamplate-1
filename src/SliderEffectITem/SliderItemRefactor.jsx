import React, { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
export default function SliderItemRefactor({ img, y, index }) {
  const [scope, animate] = useAnimate();

  const DURATION = 0.5;

  async function handleAnimate(v) {
    if (index !== 1 && Math.floor(v) > 0.5 * window.innerHeight * (index - 1)) {
      // console.log("entered 1");
      if (
        Math.floor(y.getPrevious()) <= Math.floor(y.get()) &&
        Math.floor(y.getPrevious()) <= 0.5 * window.innerHeight * index
      ) {
        animate(
          ".img-container",
          {
            width: "100vw",
            height: "100vh",
            transform: "translate(-50%, -50%) rotate(0deg)",
            left: "50vw",
            top: "50vh",
          },
          { duration: DURATION, ease: "easeOut" }
        );

        animate(
          ".center-img",
          {
            left: "50vw",
            top: "50%",
            width: "100vw",
            height: "100vh",
            transform: "translate(-50vw, -50vh) rotate(0deg) scale(1)",
          },
          { duration: DURATION, ease: "easeOut" }
        );
      }
    } else {
      if (
        y.getPrevious() >= 0.5 * window.innerHeight * (index - 1) &&
        index != 1
      ) {
        animate(
          ".img-container",
          {
            width: "0vw",
            height: "0vh",
            transform: "translate(-50%, -50%) rotate(26deg)",
            left: "50vw",
            top: "50vh",
          },
          { duration: DURATION, ease: "easeIn" }
        );
        animate(
          ".center-img",
          {
            left: "50vw",
            top: "50%",
            width: "100vw",
            height: "100vh",
            transform: "translate(-50vw, -50vh) rotate(-26deg) scale(1.5)",
          },
          { duration: DURATION, ease: "easeIn" }
        );
      }
    }
  }

  useEffect(() => {
    y.on("change", handleAnimate);
  }, []);

  return (
    <div ref={scope} style={{ zIndex: index }} className="sticky top-0 left-0">
      <motion.div
        initial={{
          left: "50vw",
          top: "50vh",
          width: index != 1 && "0vw",
          height: index != 1 && "0vh",
          transform: "translate(-50%, -50%) rotate(0deg)",
        }}
        className="img-container full-center"
      >
        <motion.img
          initial={{
            left: "50vw",
            top: "50%",
            width: "100vw",
            height: "100vh",
            transform: "translate(-50vw, -50vh) rotate(0deg)",
          }}
          src={img}
          alt="img"
          className="center-img object-cover min-h-[100vh]"
        />
      </motion.div>
    </div>
  );
}
