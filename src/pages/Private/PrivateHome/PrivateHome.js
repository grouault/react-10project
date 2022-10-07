import React from "react";

import cat from "./cat.gif";

export default function PrivateHome() {
  return (
    <div className="container p-5">
      {console.log("Render Private Home")}
      PrivateHome
      <h1 className="display-3 text-light mb3">Home Sweet Private Home</h1>
      <img src={cat} alt="" />
    </div>
  );
}
