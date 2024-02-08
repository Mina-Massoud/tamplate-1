import React, { useEffect } from "react";
import Intro from "./Intro";
import MainIdeas from "./MainIdeas";
export default function Home() {
  const [renderNext, setRenderNext] = React.useState(
    localStorage.getItem("intro")
  );

  return (
    <div>
      {!localStorage.getItem("intro") && (
        <Intro renderNextElement={setRenderNext} />
      )}

      {renderNext && <MainIdeas />}

      <div className="mt-[100vh]">
        <h1 className="inline-block  text-black">
          That's all, everything is coded from scratch, If you wanna specific
          Template or specifc animation. DM me on linkedin :{" "}
          <a href="https://www.linkedin.com/in/mina-melad/">
            https://www.linkedin.com/in/mina-melad/
          </a>
        </h1>
      </div>
    </div>
  );
}
