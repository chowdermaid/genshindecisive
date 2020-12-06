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
  const [pickedEvent, setPickedEvent] = React.useState("");
  const [eventCard, setEventCard] = React.useState([]);

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

  const getAllEvents = () => {
    let data = JSON.parse(localStorage.getItem("events"));
    setEventCard(data);
  };

  const getRandomEvent = () => {
    let rngesus = [];
    let data = JSON.parse(localStorage.getItem("events"));
    for (let i = 0; i < Object.keys(data).length; i++) {
      for (let j = 0; j < data[i]["weight"]; j++) {
        let eventInfo = data[i]["event"] + " " + data[i]["hero"];
        let tempArray = [eventInfo, data[i]["weight"]];
        rngesus.push(tempArray);
      }
    }
    console.log("rngesus", rngesus);
    console.log("cum", rngesus[Math.floor(Math.random() * rngesus.length)]);
    setPickedEvent(rngesus[Math.floor(Math.random() * rngesus.length)][0]);
  };

  const displayEvents = eventCard.map((data) => (
    <div className="eventCard">
      <p>{data.event + " " + data.hero}</p>
    </div>
  ));

  React.useEffect(() => {
    getAllEvents();
  }, []);

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
      <br></br>
      <button onClick={getRandomEvent}>RNG GIVE ME AN EVENT</button>
      {displayEvents}
      <p>{pickedEvent}</p>
    </div>
  );
}

export default App;
