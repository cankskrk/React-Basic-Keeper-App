import React from "react";
import cssNote from "./cssModules/note.module.css";

function Note({ header, desc }) {
  return (
    <div className={`${cssNote.note}`}>
      <h1>{header}</h1>
      <p>{desc}</p>
    </div>
  );
}

export default Note;
