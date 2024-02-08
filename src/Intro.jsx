import React, { useEffect, useState } from "react";
import { motion, useAnimate } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function Intro({ renderNextElement }) {
  const [scope, animate] = useAnimate();

  async function handleAnimate() {
    await animate(".hi", { opacity: 1 }, { duration: 2, ease: "easeInOut" });
    await animate(".hi", { opacity: 0 }, { duration: 2, ease: "easeInOut" });
    await animate(".seq-1", { opacity: 1 }, { duration: 2, ease: "easeInOut" });
    await animate(".seq-1", { opacity: 0 }, { duration: 2, ease: "easeInOut" });
    await animate(".seq-2", { opacity: 1 }, { duration: 2, ease: "easeInOut" });
    await animate(".seq-2", { opacity: 0 }, { duration: 2, ease: "easeInOut" });

    await animate(
      scope.current,
      { opacity: 0.2 },
      { duration: 2, ease: "easeInOut" }
    );
    await animate(
      scope.current,
      { y: "-100vh" },
      { duration: 1, ease: [0.76, 0, 0.24, 1] }
    );
    localStorage.setItem("intro", "true");
    renderNextElement(true);
  }

  useEffect(() => {
    handleAnimate();
  });

  return (
    <div
      ref={scope}
      className="capitalize relative bg-black w-[100vw] h-[100vh] flex flex-col items-center justify-center"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        className="text text-center absolute intro hi"
      >
        Hi There!
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0 }}
        className="text text-center seq-1 absolute text-[1em]"
      >
        This will be a template series of cool ideas for your next project
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0 }}
        className="text text-center seq-2 absolute text-[1em]"
      >
        <a className="mx-[1em]" href="https://github.com/Mina-Massoud">Github</a>
        <a href="https://github.com/Mina-Massoud">LinkedIn</a>
      </motion.h1>
    </div>
  );
}
