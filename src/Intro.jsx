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
    await animate(".seq-3", { opacity: 1 }, { duration: 2, ease: "easeInOut" });
    await animate(".seq-3", { opacity: 0 }, { duration: 2, ease: "easeInOut" });
    await animate(".seq-4", { opacity: 1 }, { duration: 2, ease: "easeInOut" });
    await animate(".seq-4", { opacity: 0 }, { duration: 2, ease: "easeInOut" });
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
      className="capitalize absolute space-x-8 bg-black w-[100vw] h-[100vh] flex flex-col items-center justify-center"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        className="text  text-center intro hi"
      >
        Hi There!
      </motion.h1>

      <motion.h1
        initial={{ opacity: 0 }}
        className="text absolute seq-1 text-center font-thin"
      >
        This will be a Web Template Series
      </motion.h1>

      <motion.h1
        initial={{ opacity: 0 }}
        className="text absolute px-[5em] seq-2 text-center  font-thin"
      >
        I will build a web templates from scratch
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0 }}
        className="text absolute px-[5em] seq-3 text-center  font-thin"
      >
        with providing the source code.
        <br />
        <br />
        <a
          href="https://github.com/Mina-Massoud"
          className="intro w-fit mx-auto block transition-colors text-[0.8em]"
          target="_blank"
        >
          <FaGithub />
        </a>
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0 }}
        className="text absolute px-[5em] seq-4 text-center intro font-thin"
      >
        Ready?
      </motion.h1>
    </div>
  );
}
