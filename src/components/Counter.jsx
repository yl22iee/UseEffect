import React, { useState } from "react";

export default function Counter({ total, handleClick }) {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <p className="number">
        {count} / <span>{total}</span>
      </p>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
          handleClick();
        }}
        className="click_button"
      >
        click + 1
      </button>
    </div>
  );
}
