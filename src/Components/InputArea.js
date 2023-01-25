import React, { useState } from "react";
import "./cssModules/input.css";

import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function InputArea({ type, placeholder1, placeholder2, className, onAdd }) {
  const [note, setNote] = useState({ title: "", content: "" });
  const [isExpanded, setExpanded] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submitNote = (event) => {
    onAdd(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  };

  const expand = () => {
    setExpanded(true);
  };

  return (
    <div className="container w-75 mt-5">
      <div className="row">
        <div className="col-sm-12">
          <div className="border p-4 rounded position-relative shadow">
            <form>
              {isExpanded ? (
                <input
                  type={type}
                  name="title"
                  value={note.title}
                  onChange={handleChange}
                  style={{ fontFamily: "McLaren, cursive" }}
                  placeholder={placeholder1}
                  className={`form-control mt-3 mb-3 ${className}`}
                />
              ) : null}
              <textarea
                type={type}
                name="content"
                value={note.content}
                onChange={handleChange}
                onClick={expand}
                style={{ fontFamily: "McLaren, cursive", resize: "none" }}
                placeholder={placeholder2}
                className={`form-control mt-3 mb-3 ${className}`}
                rows={isExpanded ? 3 : 1}
                spellCheck={false}
              />
              <Zoom in={isExpanded && true}>
                <Fab type="submit" onClick={submitNote} color="success">
                  <AddIcon />
                </Fab>
              </Zoom>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputArea;
