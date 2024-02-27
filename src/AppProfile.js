import React from "react";
import Profile from "./components/Profile";
import "./App.css";
import Avartar from "./components/Avartar";

export default function Appprofile() {
  return (
    <div>
      <button
        onClick={(e) => {
          console.log(e);
          alert("you clicked here!");
        }}
      >
        Button
      </button>
      <Avartar
        img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fCVFQyU4MiVBQyVFQiU5RSU4Q3xlbnwwfHwwfHx8MA%3D%3D"
        isnew={true}
      />
      <Profile
        img="https://images.unsplash.com/photo-1521119989659-a83eee488004?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fCVFQyU4MiVBQyVFQiU5RSU4Q3xlbnwwfHwwfHx8MA%3D%3D"
        name="Pizza"
        jobs="job01"
        isnew={true}
      />
      <Profile
        img="https://images.unsplash.com/photo-1614786269829-d24616faf56d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fCVFQyU4MiVBQyVFQiU5RSU4Q3xlbnwwfHwwfHx8MA%3D%3D"
        name="PineApple"
        jobs="job02"
      />
      <Profile
        img="https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fCVFQyU4MiVBQyVFQiU5RSU4Q3xlbnwwfHwwfHx8MA%3D%3D"
        name="Orange"
        jobs="job03"
      />
    </div>
  );
}
