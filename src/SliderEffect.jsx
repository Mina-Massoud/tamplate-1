import React, { useEffect, useState } from "react";
import img11 from "./assets/images/img11.jpg";
import img12 from "./assets/images/img12.jpg";
import img13 from "./assets/images/img13.jpg";
import img14 from "./assets/images/img14.jpg";
import img15 from "./assets/images/img15.jpg";
import img16 from "./assets/images/img16.jpg";
import img17 from "./assets/images/img17.jpg";

import { useAnimate, useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import SliderItem from "./SliderEffectITem/SliderItem";

const images = [img12, img11, img13, img14, img15, img16, img17];
export default function SliderEffect() {
  //   const [scale, setScale] = useState(1);
  //   const scope2 = React.useRef();

  //   const scaleEffect = useScroll({
  //     target: scope2,
  //     offset: [`0 0`, `1 0`],
  //   });

  //   const scaleIn = useTransform(scaleEffect.scrollYProgress, [0, 1], [1, 1.2]);

  //   let prev;

  //   const handleTriggerAnimation = async (change) => {
  //     console.log(Math.floor(change), Math.floor(window.innerHeight));
  //     if (Math.floor(change) > Math.floor(window.innerHeight)) {
  //       if (y.getPrevious() <= y.get()) {
  //         if (y.getPrevious() < window.innerHeight) {
  //           await animate(
  //             scope2.current,
  //             { scaleX: 1, scaleY: 1 },
  //             { duration: 0.5, ease: "easeInOut" }
  //           );
  //           await animate(
  //             ".parent",
  //             { zIndex: 3 },
  //             { duration: 0.5, ease: "easeInOut" }
  //           );
  //         }
  //       }
  //     } else {
  //       if (y.getPrevious() >= window.innerHeight) {
  //         await animate(
  //           scope2.current,
  //           { scaleY: 6, scaleX: 4.5 },
  //           { duration: 0.5, ease: "easeInOut" }
  //         );
  //         await animate(
  //           "parent",
  //           { zIndex: 5 },
  //           { duration: 0.5, ease: "easeInOut" }
  //         );
  //       }
  //     }
  //   };

  //   useEffect(() => {
  //     y.on("change", handleTriggerAnimation);
  //     // Cleanup function to unsubscribe when the component unmounts
  //   }, []); // Add 'y' to the dependency array if it is used in the effec

  /////////////////////////
  const [scope, animate] = useAnimate();

  const yEffect = useScroll({
    target: scope,
    offset: [`0 0`, `1 0`],
  });

  const y = useTransform(
    yEffect.scrollYProgress,
    [0, 1],
    [0, window.innerHeight * images.length]
  );

  return (
    <motion.div
      style={{ y: y, height: `${images.length * 100}vh` }}
      className="relative w-[100vw] bg-slate-100"
      ref={scope}
    >
      {images.map((img, i) => {
        return <SliderItem key={i} img={img} index={i + 1} y={y} />;
      })}
    </motion.div>
  );
}
