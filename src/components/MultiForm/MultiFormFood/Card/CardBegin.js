import React from "react";
import "./Card.css";

export default function CardBegin({ modifyIndex }) {
  return (
    <div className="card">
      <h1>🍣 Aide nous à ravir tes papilles 🌶️</h1>
      <button onClick={() => modifyIndex(2)}>Commencer</button>
    </div>
  );
}
