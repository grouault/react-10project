import React, { useState } from "react";
import "./SubForm.css";

export default function DietForm(props) {
  const { modifyIndex } = props;
  const [diet, setDiet] = useState("nodiet");

  const handleForm = (e) => {
    e.preventDefault();
    modifyIndex(3, { diet: diet });
  };

  const checkNoDiet = () => setDiet("nodiet");
  const checkHomnivorous = () => setDiet("homnivorous");
  const checkVegetarian = () => setDiet("vegetarian");
  const checkVegan = () => setDiet("vegan");

  console.log("diet = ", diet);

  return (
    <div>
      <form className="diet-form" onSubmit={handleForm}>
        <p>Quel est ton régime alimentaire ?</p>

        <div className="radio-btn" onClick={checkNoDiet}>
          <input
            type="radio"
            id="nodiet"
            name="diet"
            value={diet}
            checked={diet === "nodiet"}
            onChange={checkNoDiet}
          ></input>
          <label htmlFor="nodiet">Pas de régime particulier</label>
        </div>
        <div className="radio-btn" onClick={checkHomnivorous}>
          <input
            type="radio"
            id="homnivorous"
            name="diet"
            value={diet}
            checked={diet === "homnivorous"}
            onChange={checkHomnivorous}
          ></input>
          <label htmlFor="homnivorous">Homnivore</label>
        </div>
        <div className="radio-btn" onClick={checkVegetarian}>
          <input
            type="radio"
            id="vegetarian"
            name="diet"
            value={diet}
            checked={diet === "vegetarian"}
            onChange={checkVegetarian}
          ></input>
          <label htmlFor="vegetarian">Végétarien</label>
        </div>
        <div className="radio-btn" onClick={checkVegan}>
          <input
            type="radio"
            id="vegan"
            name="diet"
            value={diet}
            checked={diet === "vegan"}
            onChange={checkVegan}
          ></input>
          <label htmlFor="vegan">Vegan</label>
        </div>
        <button>Valider</button>
      </form>
      <button type="button">Précédent</button>
    </div>
  );
}
