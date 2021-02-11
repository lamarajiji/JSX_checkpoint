import "./style.css";
import React from "react";
import Image from "./assets/imageInSrc.jpg";

function App() {
  return (
    <div>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Hajer Malki</h1>
        <br />
        <img src="/images/imageInPub.jpg" alt="myimage" />
        <br />
        <img src={Image} alt="myimage" />
      </div>
      <video width={320} height={240} controls>
        <source src={require("./assets/myVideo.mp4")} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
