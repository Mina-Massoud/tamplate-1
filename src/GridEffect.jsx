import React, { useEffect, useRef } from "react";
import img1 from "./assets/images/1.jpg";
import img2 from "./assets/images/2.jpg";
import img3 from "./assets/images/3.jpg";
import img4 from "./assets/images/4.jpg";
import img5 from "./assets/images/5.jpg";
import img6 from "./assets/images/6.jpg";
import img7 from "./assets/images/7.jpg";
import img8 from "./assets/images/8.jpg";
import img9 from "./assets/images/9.jpg";
import img10 from "./assets/images/10.jpg";
import img11 from "./assets/images/11.jpg";
import img12 from "./assets/images/12.jpg";

import { motion, useScroll, useTransform } from "framer-motion";

let w = window.innerWidth <= 768 ? "44vw" : "22vw";
let h = window.innerWidth <= 768 ? "60vh" : "60vh";

export default function GridEffect() {
  const scope = useRef();
  const firstPageScroll = useScroll({
    target: scope,
    offset: [`0 1`, `1 0`],
  });

  const { scrollYProgress } = firstPageScroll;

  const [screenTrack, setScreenTrack] = React.useState(
    window.innerWidth <= 768 ? 2 : 4
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 768) {
        setScreenTrack(2);
      } else setScreenTrack(4);

      w = window.innerWidth <= 768 ? "44vw" : "22vw";
      h = window.innerWidth <= 768 ? "60vh" : "60vh";
    });
  }, []);

  const scaleEffect = useScroll({
    target: scope,
    offset: [`0 1`, `0.5 1`],
  });

  const scaleOut = useTransform(scaleEffect.scrollYProgress, [0, 1], [1.15, 1]);

  const slideUp1 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, screenTrack === 4 ? window.innerHeight * 1.4 : window.innerHeight]
  );
  const slideUp2 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, screenTrack === 4 ? window.innerHeight * 3 : window.innerHeight * 2]
  );

  const slideUp3 = useTransform(
    scrollYProgress,
    [0, 1],
    [0,  window.innerHeight / 2 ]
  );
  const slideUp4 = useTransform(
    scrollYProgress,
    [0, 1],
    [0,  window.innerHeight * 4 ]
  );

  function itemTwo() {
    return (
      <>
        <motion.div
          style={{ y: slideUp1, scale: scaleOut }}
          transition={{ duration: 0.2 }}
          className="col-1 top-[-400px] relative flex flex-col gap-[20px]"
        >
          <div className="img-container">
            <img
              style={{ width: w, height: h, objectFit: "cover" }}
              className="rounded-2xl"
              src={img1}
              alt=""
            />
          </div>
          <div className="img-container">
            <img
              style={{ width: w, height: h, objectFit: "cover" }}
              className="rounded-2xl"
              src={img2}
              alt=""
            />
          </div>
          <div className="img-container">
            <img
              style={{ width: w, height: h, objectFit: "cover" }}
              className="rounded-2xl"
              src={img3}
              alt=""
            />
          </div>
        </motion.div>
        <motion.div
          style={{ y: slideUp2, scale: scaleOut }}
          className="col-1 top-[-1000px] relative flex flex-col gap-[20px]"
        >
          <div className="img-container">
            <img
              style={{ width: w, height: h, objectFit: "cover" }}
              className="rounded-2xl"
              src={img4}
              alt=""
            />
          </div>
          <div className="img-container">
            <img
              style={{ width: w, height: h, objectFit: "cover" }}
              className="rounded-2xl"
              src={img5}
              alt=""
            />
          </div>
          <div className="img-container">
            <img
              style={{ width: w, height: h, objectFit: "cover" }}
              className="rounded-2xl"
              src={img6}
              alt=""
            />
          </div>
        </motion.div>
      </>
    );
  }

  function itemFour() {
    return (
      <>
        <motion.div
          style={{ y: slideUp1, scale: scaleOut }}
          transition={{ duration: 0.2 }}
          className="col-1 top-[-400px] relative flex flex-col gap-[20px]"
        >
          <div className="img-container">
            <img
              style={{ width: w, height: h, objectFit: "cover" }}
              className="rounded-2xl"
              src={img1}
              alt=""
            />
          </div>
          <div className="img-container">
            <img
              style={{ width: w, height: h, objectFit: "cover" }}
              className="rounded-2xl"
              src={img2}
              alt=""
            />
          </div>
          <div className="img-container">
            <img
              style={{ width: w, height: h, objectFit: "cover" }}
              className="rounded-2xl"
              src={img3}
              alt=""
            />
          </div>
        </motion.div>
        <motion.div
          style={{ y: slideUp2, scale: scaleOut }}
          className="col-1 top-[-1000px] relative flex flex-col gap-[20px]"
        >
          <div className="img-container">
            <img
              style={{ width: w, height: h, objectFit: "cover" }}
              className="rounded-2xl"
              src={img4}
              alt=""
            />
          </div>
          <div className="img-container">
            <img
              style={{ width: w, height: h, objectFit: "cover" }}
              className="rounded-2xl"
              src={img5}
              alt=""
            />
          </div>
          <div className="img-container">
            <img
              style={{ width: w, height: h, objectFit: "cover" }}
              className="rounded-2xl"
              src={img6}
              alt=""
            />
          </div>
        </motion.div>

        <motion.div
          style={{ y: slideUp3, scale: scaleOut }}
          className="col-1 flex flex-col gap-[20px]"
        >
          <div className="img-container">
            <img
              style={{ width: w, height: h, objectFit: "cover" }}
              src={img7}
              alt=""
              className="rounded-2xl"
            />
          </div>
          <div className="img-container">
            <img
              style={{ width: w, height: h, objectFit: "cover" }}
              src={img8}
              alt=""
              className="rounded-2xl"
            />
          </div>
          <div className="img-container">
            <img
              style={{ width: w, height: h, objectFit: "cover" }}
              src={img9}
              alt=""
              className="rounded-2xl"
            />
          </div>
        </motion.div>
        <motion.div
          style={{ y: slideUp4, scale: scaleOut }}
          className="col-1 relative top-[-1400px] flex flex-col gap-[20px]"
        >
          <div className="img-container">
            <img
              style={{ width: w, height: h, objectFit: "cover" }}
              src={img10}
              className="rounded-2xl"
              alt=""
            />
          </div>
          <div className="img-container">
            <img
              style={{ width: w, height: h, objectFit: "cover" }}
              src={img11}
              className="rounded-2xl"
              alt=""
            />
          </div>
          <div className="img-container">
            <img
              style={{ width: w, height: h, objectFit: "cover" }}
              src={img12}
              className="rounded-2xl"
              alt=""
            />
          </div>
        </motion.div>
      </>
    );
  }

  return (
    <div
      ref={scope}
      className="mt-[100vh] min-h-[100vh] py-[2em] rounded-xl overflow-y-hidden flex justify-around"
    >
      {screenTrack === 4 ? itemFour() : itemTwo()}
    </div>
  );
}