import React from "react";
import cssNote from "./cssModules/note.module.css";

import DeleteIcon from "@mui/icons-material/Delete";
import Fab from "@mui/material/Fab";

function Note({ id, header, desc, onDelete }) {
  const handleClick = () => {
    onDelete(id);
  };

  return (
    <div className={`${cssNote.note}`}>
      <h1 className="fs-3 mb-3">{header}</h1>
      <hr class="border border-dark border-2 opacity-50"></hr>
      <p>{desc}</p>
      <Fab
        type="submit"
        onClick={handleClick}
        color="error"
        className="mt-3 mb-3"
      >
        <DeleteIcon />
      </Fab>
    </div>
  );
}

export default Note;
