import React, { useEffect } from "react";
import FirstIdea from "./IDEAS/FirstIdea";
import SecondIdea from "./IDEAS/SecondIdea";

export default function MainIdeas() {
  return (
    <>
      <FirstIdea />
      <SecondIdea />
      <div className="text-white text-center   bg-black pt-[100vh] pb-[20vh]">
        <h2 className="text-center text-[2em]">That's it,</h2>
        <h3>If you want specific animation or specific template</h3>
        <p>Dm me and I will try to create that for you!</p>
        <p>Repost If you like it</p>
        LinkedIn for more templates and animations and Dmsss:
        <a className="mx-[1em]" href="https://www.linkedin.com/in/mina-melad/" target="_blank">
        https://www.linkedin.com/in/mina-melad/
        </a>
      </div>
    </>
  );
}
