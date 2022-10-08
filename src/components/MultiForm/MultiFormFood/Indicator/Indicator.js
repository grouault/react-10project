import React from "react";

import allergy from "./icons/allergy.svg";
import diet from "./icons/diet.svg";
import healthy from "./icons/healthy.svg";
import love from "./icons/love.svg";
import thumb from "./icons/thumb.svg";

import "./Indicator.css";

export default function Indicator() {
  return (
    <div className="container-indicator">
      <div className="container-lines">
        <div className="line upper-line"></div>
        <div className="line under-line"></div>
      </div>
      <div className="container-img">
        <div className="bloc-img">
          <img src={healthy} alt="" />
        </div>
        <div className="bloc-img">
          <img src={love} alt="" />
        </div>
        <div className="bloc-img">
          <img src={allergy} alt="" />
        </div>
        <div className="bloc-img">
          <img src={diet} alt="" />
        </div>
        <div className="bloc-img">
          <img src={thumb} alt="" />
        </div>
        <div className="bloc-img">
          <img src={healthy} alt="" />
        </div>
      </div>
    </div>
  );
}
