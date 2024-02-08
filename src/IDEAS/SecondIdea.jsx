import React from "react";
import secondIdea from "../assets/images/secondIdea.gif";
import { motion, useScroll, useTransform } from "framer-motion";
import SliderEffect from "../SliderEffect";
export default function SecondIdea() {
  return (
    <>
      <div className="h-fit">
        <h1 className="text-center py-[2em]">Last Idea</h1>
        <SliderEffect />
      </div>
    </>
  );
}
