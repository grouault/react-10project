import React, { useState } from "react";
import CardBegin from "./Card/CardBegin";
import CardEnd from "./Card/CardEnd";
import Indicator from "./Indicator/Indicator";

import "./MultiFormFood.css";
import DietForm from "./SubForms/DietForm";

export default function MultiFormFood() {
  const [formIndex, setFormIndex] = useState(1);
  const [allFormData, setAllFormData] = useState({
    dietForm: "", // regime alimentaire
    foodStyle: [], // style de cuisine : asiatique, japonaise, thai
    allergies: [], // "milk","pollen","nuts"...
    prefs: { love: "", hate: "" },
  });

  const modifyIndex = (index, data) => {
    setFormIndex(index);
    if (data) {
      const [key, newValue] = Object.entries(data)[0];
      let newData = { ...allFormData };
      newData[key] = newValue;
      setAllFormData(newData);
    }
  };

  console.log("allFormData = ", allFormData);

  return (
    <div className="container-multiform">
      <Indicator />
      {formIndex === 1 ? (
        <CardBegin modifyIndex={modifyIndex} />
      ) : formIndex === 2 ? (
        <DietForm modifyIndex={modifyIndex} />
      ) : (
        <CardEnd modifyIndex={modifyIndex} />
      )}
    </div>
  );
}
