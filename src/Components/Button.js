import React from "react";

function Button({ name, className }) {
  return (
    <div>
      <button className={`btn ${className}`}>{name}</button>
    </div>
  );
}

export default Button;
