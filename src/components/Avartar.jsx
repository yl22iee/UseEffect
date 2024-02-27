import React from "react";

export default function Avartar({ img, isnew }) {
  return (
    <div className="avartar">
      <img className="photo" src={img} alt="avartar" />
      {isnew && <span className="new">new</span>}
    </div>
  );
}
