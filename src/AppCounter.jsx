import React, { useState } from "react";
import Counter from "./components/Counter";
import "./components/Counter.css";

export default function AppCounter() {
  const [total, setTotal] = useState(0);
  const handleClick = () => {
    setTotal((prev) => prev + 1);
  };
  return (
    <div>
      <div className="total">
        <p className="number">total : {total}</p>
      </div>
      <Counter total={total} handleClick={handleClick} />
      <Counter total={total} handleClick={handleClick} />
    </div>
  );
}
