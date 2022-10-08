import React, { useState } from "react";
import "./SubForm.css";

export default function DietForm(props) {
  const { modifyIndex } = props;
  const [diet, setDiet] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    modifyIndex(3, { diet: diet });
  };

  const handleRadio = (e) => {
    setDiet(e.target.value);
  };

  return (
    <div>
      <form className="diet-form" onSubmit={handleForm}>
        <p>Quel est ton régime alimentaire ?</p>

        <p>
          <input
            type="radio"
            id="nodiet"
            name="diet"
            value="nodiet"
            onChange={handleRadio}
          ></input>
          <label htmlFor="nodiet">Pas de régime particulier</label>
        </p>
        <p>
          <input
            type="radio"
            id="homnivorous"
            name="diet"
            value="homnivorous"
            onChange={handleRadio}
          ></input>
          <label htmlFor="homnivorous">Homnivore</label>
        </p>
        <p>
          <input
            type="radio"
            id="vegetarian"
            name="diet"
            value="vegetarian"
            onChange={handleRadio}
          ></input>
          <label htmlFor="vegetarian">Végétarien</label>
        </p>
        <p>
          <input
            type="radio"
            id="vegan"
            name="diet"
            value="vegan"
            onChange={handleRadio}
          ></input>
          <label htmlFor="vegetarian">Vegan</label>
        </p>
        <button>Valider</button>
      </form>
      <button type="button">Précédent</button>
    </div>
  );
}
