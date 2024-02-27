import React from "react";
import Avartar from "./Avartar";

export default function Profile({ img, name, jobs, isnew }) {
  return (
    <div className="profile">
      <Avartar img={img} isnew={isnew} />
      <h2>{name}</h2>
      <h3>{jobs}</h3>
    </div>
  );
}
