import React from "react";
import "../css/event.css";

export default function Event() {
  return (
    <div className="main-container">
      <div className="container d-flex flex-column">
        <button className="backbutton"> back </button>
        <div className=" d-flex  justify-content-between">
          <div className="left">
            <h1>Dream world wide in jakatra</h1>
            <h3>IIT Sonepat</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              repellendus quae nihil nobis quibusdam voluptatibus ipsam, libero
              maxime nesciunt non vitae impedit veritatis totam doloremque quo
              distinctio laborum nulla sequi quod? Aut iusto aliquid nisi
              ducimus fuga animi odit nulla? Odio id numquam autem quidem
              temporibus earum cupiditate suscipit nemo.
            </p>
          </div>
          <div className="right">
            <div className="text">
              <p>Saturday, March 18 2023, 9.30PM</p>
              <a href="">Add to calendar</a>
            </div>
            <button id="buttonrightsidefirst">test1</button>
            <button id="buttonrightsidesecond">test2</button>
          </div>
        </div>
      </div>
    </div>
  );
}
