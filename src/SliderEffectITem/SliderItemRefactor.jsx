import React, { useCallback, useEffect, useState } from "react";
import { motion, useAnimate, useTransform } from "framer-motion";
export default function SliderItemRefactor({ img, y, index, l }) {
  const [scope, animate] = useAnimate();

  const [scaleState, setScaleState] = useState(1);

  const DURATION = 0.5;
  const factor = 1;

  const scaleIn = useTransform(
    y,
    [0, l * window.innerHeight * factor], // for every 100vh
    [0.927295218, 1.57079633]
  );

  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setHeight(window.innerHeight);
    });
  }, []);

  async function handleAnimate() {
    if (Math.floor(y.get()) > factor * height * (index - 1)) {
      if (
        Math.floor(y.getPrevious()) <= Math.floor(y.get()) &&
        Math.floor(y.getPrevious()) <= factor * height * (index - 1) &&
        index !== 1
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
      } else if (
        height * factor * (index - 1) <= y.get() &&
        y.get() <= factor * height * index
      ) {
        animate(
          ".center-img",
          {
            left: "50vw",
            top: "50%",
            width: "100vw",
            height: "100vh",
            transform: `translate(-50vw, -50vh) rotate(0deg) scale(${
              Math.sin(scaleIn.get()) + 0.2
            })`,
          },
          { duration: DURATION, ease: "easeOut" }
        );
      }
    } else {
      if (y.getPrevious() >= factor * height * (index - 1) && index !== 1) {
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
    y.on("change", (v) => {
      handleAnimate(v);
    });
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
