import React, { useState } from "react";
import "./Corazon.css";

const Corazon = () => {
  const [like, setLike] = useState("true");

  const change = () => {
    setLike(!like);
  };

  return (
    <h1 onClick={change}>
      <span className={like ? "corazon" : "corazon--relleno"}>
        {like ? "\u2661" : "\u2665"}
      </span>
    </h1>
  );
};

export default Corazon;
