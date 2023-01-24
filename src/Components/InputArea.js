import React, { useState } from "react";
import "./cssModules/input.css";
import addButton from "./cssModules/button.module.css";

function InputArea({ type, placeholder1, placeholder2, className, onAdd }) {
  const [note, setNote] = useState({ title: "", content: "" });

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

  return (
    <div className="container w-75 mt-5">
      <div className="row">
        <div className="col-sm-12">
          <div className="border p-4 rounded position-relative shadow">
            <form>
              <input
                type={type}
                name="title"
                value={note.title}
                onChange={handleChange}
                style={{ fontFamily: "McLaren, cursive" }}
                placeholder={placeholder1}
                className={`form-control mt-3 mb-3 ${className}`}
              />
              <textarea
                type={type}
                name="content"
                value={note.content}
                onChange={handleChange}
                style={{ fontFamily: "McLaren, cursive" }}
                placeholder={placeholder2}
                className={`form-control mt-3 mb-3 ${className}`}
                rows="3"
              />
              <button
                type="submit"
                className={`btn border-dark rounded-2 shadow ${addButton.btn}`}
                onClick={submitNote}
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputArea;
