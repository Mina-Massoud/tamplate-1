import React from "react";
import secondIdea from "../assets/images/secondIdea.gif";
import { motion, useScroll, useTransform } from "framer-motion";
import SliderEffect from "../SliderEffect";
export default function SecondIdea() {
  const scope = React.useRef();
  const scaleEffect = useScroll({
    target: scope,
    offset: [`0 1`, `1 0`],
  });

  const scaleOut = useTransform(scaleEffect.scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <div ref={scope} className="py-[6em]">
      <motion.div
        initial={{ scale: 0 }}
        style={{
          background: "white",
          backgroundPosition: "center",
          backgroundSize: "cover",
          scale: scaleOut,
        }}
        className="bg-white rounded-xl text-black  mx-auto overflow-hidden"
      >
        <h1 className="text-center  backdrop-blur-lg w-full h-full py-[3em]  inline-block px-[4em]">
          Second Idea and the last for this Template
        </h1>
      </motion.div>
      <SliderEffect /> 
    </div>
  );
}
