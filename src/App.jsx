/* eslint-disable */

import React from "react";
import "./App.css";

function App() {
  const [desperate, setDesperate] = React.useState("");
  const [desperateIsOpened, setDesperateIsOpened] = React.useState(true);
  const [content, setContent] = React.useState("");
  const [contentIsOpened, setContentIsOpened] = React.useState(false);
  const [hero, setHero] = React.useState("");
  const [heroIsOpened, setHeroIsOpened] = React.useState(false);

  const howDesperate = (string) => {
    setDesperate(string);
    setDesperateIsOpened((wasOpened) => !wasOpened);
    setContentIsOpened((wasOpened) => !wasOpened);
  };

  const whatContent = (string) => {
    setContent(string);
    setContentIsOpened((wasOpened) => !wasOpened);
    setHeroIsOpened((wasOpened) => !wasOpened);
  };

  const whichHero = (string) => {
    setHero(string);
    setHeroIsOpened((wasOpened) => !wasOpened);
  };

  const reset = () => {
    setDesperate("");
    setContent("");
    setHero("");
    setDesperateIsOpened(true);
    setContentIsOpened(false);
    setHeroIsOpened(false);
  };

  return (
    <div className="App">
      <button onClick={reset}>Reset</button>
      <p>
        I {desperate} {content} {hero}
      </p>

      {desperateIsOpened && (
        <div className="desperate">
          <button onClick={() => howDesperate("really want to")}>
            really want to
          </button>
          <button onClick={() => howDesperate("want to")}>want to</button>
          <button onClick={() => howDesperate("kind of want to")}>
            kind of want to
          </button>
        </div>
      )}

      {contentIsOpened && (
        <div className="content">
          <button onClick={() => whatContent("farm artifacts for")}>
            farm artifacts for
          </button>
          <button onClick={() => whatContent("farm ascension materials for")}>
            farm ascension materials for
          </button>
          <button onClick={() => whatContent("farm talent books for")}>
            farm talent books for
          </button>
          <button onClick={() => whatContent("farm money leyline")}>
            farm money leyline
          </button>
          <button onClick={() => whatContent("farm exp leyline")}>
            farm exp leyline
          </button>
        </div>
      )}

      {heroIsOpened && (
        <div className="hero">
          <button onClick={() => whichHero("Zhongli")}>Zhongli</button>
          <button onClick={() => whichHero("Tartaglia")}>Tartaglia</button>
        </div>
      )}
    </div>
  );
}

export default App;
