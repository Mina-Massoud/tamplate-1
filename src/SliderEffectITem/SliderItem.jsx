import { useScroll, useTransform, motion, useAnimate } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export default function SliderItem({ img, y, index, length }) {
  const [scale, setScale] = useState(1);
  const [scope, animate] = useAnimate();

  return (
    <div ref={scope} className="parent">
      <motion.div
        className="img-container overflow-hidden full-center "
      >
        <motion.img
          className="center-img img object-cover object-top"
          src={img}
          alt=""
          transition={{ duration: 1 }}
        />
      </motion.div>
    </div>
  );
}
