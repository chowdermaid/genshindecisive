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
  const [submitIsOpened, setSubmitIsOpened] = React.useState(false);

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
    setSubmitIsOpened((wasOpened) => !wasOpened);
  };

  const reset = () => {
    setDesperate("");
    setContent("");
    setHero("");
    setDesperateIsOpened(true);
    setContentIsOpened(false);
    setHeroIsOpened(false);
    setSubmitIsOpened(false);
  };

  const submitString = () => {
    const oldJsonObject = JSON.parse(localStorage.getItem("events")) || [];
    console.log(typeof oldJsonObject);
    const jsonObject = {};
    if (desperate == "really want to") {
      jsonObject.weight = 8;
    } else if (desperate == "want to") {
      jsonObject.weight = 4;
    } else if (desperate == "kind of want to") {
      jsonObject.weight = 1;
    }
    jsonObject.event = content;
    jsonObject.hero = hero;
    console.log("json object", jsonObject);
    oldJsonObject.push(jsonObject);
    localStorage.setItem("events", JSON.stringify(oldJsonObject));
  };

  const localStorageClear = () => {
    localStorage.clear();
  };

  React.useEffect(() => {}, []);

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
      {submitIsOpened && (
        <div className="submit">
          <button onClick={submitString}>Submit</button>
        </div>
      )}
      <button onClick={localStorageClear}>Clear local storage</button>
      {localStorage.getItem("events")}
    </div>
  );
}

export default App;
