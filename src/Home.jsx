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
    </div>
  );
}
