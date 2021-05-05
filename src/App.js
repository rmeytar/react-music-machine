import { Component } from "react";
import { Howl, Howler } from "howler";
import "./Square.css";
import audio1 from "./Audio/01.mp3";
import audio2 from "./Audio/02.mp3";
import audio3 from "./Audio/03.mp3";
import audio4 from "./Audio/04.mp3";
import audio5 from "./Audio/05.mp3";
import audio6 from "./Audio/06.mp3";
import audio7 from "./Audio/07.mp3";
import audio8 from "./Audio/08.mp3";
import audio9 from "./Audio/09.mp3";

const audio = [
  { sound: audio1, label: "Future" },
  { sound: audio2, label: "Stutter" },
  { sound: audio3, label: "Groove" },
  { sound: audio4, label: "Guitar" },
  { sound: audio5, label: "Slosh" },
  { sound: audio6, label: "Tanggu" },
  { sound: audio7, label: "Maze" },
  { sound: audio8, label: "Pas" },
  { sound: audio9, label: "Star" },
];

class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {isTogglePlay: false}
  // }

  // handleClick = () => {
  //   this.setState(state => ({
  //     isTogglePlay: !state.isTogglePlay
  //   }));
  // }

  SoundPlay = (src) => {
    const sound = new Howl({ src, loop: true });
    if (!sound.playing()) {
      sound.play();
    }
    sound.playing() ? sound.stop() : sound.play();
  };

  RenderButtonAndSound = () => {
    return audio.map((soundObj, index) => {
      return (
        <button className="square">
          {soundObj.label}
          <br />
          <br />
          <button className="play-button" key={index} onClick={() => this.SoundPlay(soundObj.sound)}>
          Play
          </button>
        </button>
      );
    });
  };

  render() {
    Howler.volume(1.0);
    return (
      <div>
        <h2>
          <center>LOOP MACHINE</center>
        </h2>
        {this.RenderButtonAndSound()}
      </div>
    );
  }
}

export default App;
