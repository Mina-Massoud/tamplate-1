import { useScroll, useTransform, motion, useAnimate } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export default function SliderItem({ img, y, index, length }) {
  const [scale, setScale] = useState(1);
  const [scope, animate] = useAnimate();
  //   const [track, setTrack] = useState(0);
  //   const [track2, setTrack2] = useState(0);

  // const scaleEffect = useScroll({
  //   target: scope,
  //   offset: [`0 0`, `1 0`],
  // });

  // const scaleIn = useTransform(
  //   scaleEffect.scrollYProgress,
  //   [0, 1], // for every 100vh
  //   [1, 4], // ...scale
  //   { clamp: false }
  // );

  // useEffect(() => {
  //   scaleIn.on("change", (v) => {
  //     setScale(v);
  //   });

  //   y.on("change", async (v) => {
  //     console.log(Math.floor(v), window.innerHeight * index);
  //     if (index !== 1 && Math.floor(v) > window.innerHeight * (index - 1)) {
  //       // console.log("entered 1");
  //       if (
  //         Math.floor(y.getPrevious()) <= Math.floor(y.get()) &&
  //         Math.floor(y.getPrevious()) <= window.innerHeight * index
  //       ) {
  //         console.log("entered 2", index);
  //         animate(
  //           ".img-container",
  //           {
  //             width: "100vw",
  //             height: "100vh",
  //             transform: "translate(-50%, -50%) rotate(0deg)",
  //             left: "50vw",
  //             top: "50vh",
  //           },
  //           { duration: 0.5,  }
  //         );

  //         animate(
  //           ".img",
  //           {
  //             width: "100vw",
  //             height: "100vh",
  //             transform: "translate(-50vw, -50vh) rotate(0deg)",
  //             top: "50%",
  //             left: "50vw",
  //           },
  //           { duration: 0.5,  }
  //         );
  //       }
  //     } else {
  //       if (y.getPrevious() >= window.innerHeight * (index - 1) && index != 1) {
  //         await animate(
  //           ".img-container",
  //           {
  //             width: "0vw",
  //             height: "0vh",
  //             transform: "translate(-50%, -50%) rotate(20deg)",
  //           },
  //           { duration: 0.5, ease: "easeInOut" }
  //         );

  //         await animate(
  //           ".img",
  //           {
  //             width: "0vw",
  //             height: "0vh",
  //             transform: "translate(-50vw, -50vh) rotate(-22deg)",
  //           },
  //           { duration: 0.5, ease: "easeInOut" }
  //         );
  //       }
  //     }
  //   });
  // }, []);


  return (
    <div ref={scope} className="parent">
      <motion.div
        // initial={{
        //   transform: "translate(-50%, -50%)",
        //   left: "50vw",
        //   top: "50vh",
        //   width: index != 1 && "0vw",
        //   height: index != 1 && "0vh",
        // }}
        className="img-container overflow-hidden full-center "
      >
        <motion.img
          // initial={{
          //   transform: "translate(-50vw, -50vh) scale(1) rotate(0deg)",
          //   top: "50%",
          //   left: "50vw",
          //   width: index != 1 && "0vw",
          //   height: index != 1 && "0vh",
          // }}
          //   animate={{
          //     transform: "translate(-50vw, -50vh) rotate(-20deg)",
          //   }}
          className="center-img img object-cover object-top"
          src={img}
          alt=""
          transition={{ duration: 1 }}
        />
      </motion.div>
    </div>
  );
}
