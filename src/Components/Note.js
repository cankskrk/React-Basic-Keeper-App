import React from "react";
import cssNote from "./cssModules/note.module.css";

function Note() {
  return (
    <div className={cssNote.note}>
      <h1>This is the title</h1>
      <p>This is the content</p>
    </div>
  );
}

export default Note;
