import React from "react";
import cssNote from "./cssModules/note.module.css";

function Note({ id, header, desc, onDelete }) {
  const handleClick = () => {
    onDelete(id);
  };

  return (
    <div className={`${cssNote.note}`}>
      <h1>{header}</h1>
      <p>{desc}</p>
      <button
        type="submit"
        className={`btn m-2 btn-danger border-dark rounded-2 shadow`}
        onClick={handleClick}
      >
        Delete
      </button>
    </div>
  );
}

export default Note;
