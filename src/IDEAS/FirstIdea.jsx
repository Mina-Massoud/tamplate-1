import React, { useEffect } from "react";
import { useAnimate, motion, useTransform } from "framer-motion";
import { useScroll } from "framer-motion";
import GridEffect from "../GridEffect";
export default function FirstIdea() {
  const [scope, animate] = useAnimate();

  const firstPageScroll = useScroll({
    target: scope,
    offset: [`0 0`, `1 1`],
  });

  const { scrollYProgress } = firstPageScroll;

  const slideUp = useTransform(scrollYProgress, [0, 1], ["0", "-100"]);

  async function handleAnimate() {
    await animate(
      ".seq-1",
      { opacity: 1 },
      { duration: 0.5, ease: "easeInOut" }
    );
  }

  useEffect(() => {
    handleAnimate();
  });

  return (
    <div ref={scope}>
      <motion.div
        style={{ y: slideUp }}
        initial={{ opacity: 0 }}
        className="h-[100vh] seq-1 z-[100000000] left-0 top-0 absolute w-[100vw] flex flex-col items-center justify-center first-bg bg-slate-100"
      >
        <h1 className="text-center text-[2em] md:text-[5em] max-w-[800px] font-black">
          It's not just a regular Templates
        </h1>
        <br />
        <p>it's your step to be different</p>
      </motion.div>
      <GridEffect />
      <p className="mx-[1em] text-[1.5rem] text-center">
        inspired by:{" "}
        <a href=" https://mill3.studio/en/projects/gsoft/">
          https://mill3.studio/en/projects/gsoft/
        </a>
      </p>
    </div>
  );
}
