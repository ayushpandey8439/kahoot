import React from "react";
import Blue from "./../../static/assets/Blue.svg";
import Red from "./../../static/assets/Red.svg";
import Yellow from "./../../static/assets/Yellow.svg";
import Green from "./../../static/assets/Green.svg";
import "./Loader.scss";
function Loader() {
  return (
    <div className="loader_container">
      <img src={Red} id="red" alt="Red" className="loader_component" />
      <img src={Blue} id="blue" alt="Blue" className="loader_component" />
      <img src={Yellow} id="yellow" alt="Yellow" className="loader_component" />
      <img src={Green} id="green" alt="Green" className="loader_component" />
    </div>
  );
}

export default Loader;
