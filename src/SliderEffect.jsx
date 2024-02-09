import React, { useEffect, useState } from "react";
import img11 from "./assets/images/img11.jpg";
import img12 from "./assets/images/img12.jpg";
import img13 from "./assets/images/img13.jpg";
import img14 from "./assets/images/img14.jpg";
import img15 from "./assets/images/img15.jpg";
import img16 from "./assets/images/img16.jpg";
import img17 from "./assets/images/img17.jpg";
import finalImg from "./assets/images/final.png";

import { useAnimate, useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import SliderItemRefactor from "./SliderEffectITem/SliderItemRefactor";
const images = [img11, img16, img15, img17, img14, img13, img12];
export default function SliderEffect() {

  const [scope, animate] = useAnimate();

  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setHeight(window.innerHeight);
    });
  }, []);

  const factor = 1;

  const yEffect = useScroll({
    target: scope,
    offset: [`0 0`, `1 1`],
  });

  const y = useTransform(
    yEffect.scrollYProgress,
    [0, 1],
    [0, images.length * height * factor]
  );

  return (
    <motion.div
      style={{ height: `${images.length * height * factor}px` }}
      className="relative w-[100vw] bg-slate-100"
      ref={scope}
    >
      {images.map((item, index) => {
        return (
          <SliderItemRefactor
            l={images.length}
            key={index}
            index={index + 1}
            y={y}
            img={item}
          />
        );
      })}
    </motion.div>
  );
}
