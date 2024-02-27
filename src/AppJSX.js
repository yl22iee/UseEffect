import React from "react";
import "./App.css";

export default function AppJSX() {
  const name = "Donkin";
  const food = ["Pizza", "cookies", "waterMelon"];
  return (
    <>
      <h1 className="orange">this color is orange</h1>
      <h2>hello my name is {name}</h2>
      <h2 className="orange">{`hello my name is ${name}`}</h2>
      <ul className="none_style">
        {food.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}
