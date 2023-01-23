import React from "react";
import Button from "./Button";
import "./cssModules/input.css";
import addButton from "./cssModules/button.module.css";

function InputArea({ type, placeholder1, placeholder2, className }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="border p-4 rounded position-relative shadow">
            <input
              type={type}
              style={{ fontFamily: "McLaren, cursive" }}
              placeholder={placeholder1}
              className={`form-control mt-3 mb-3 ${className}`}
            />
            <input
              type={type}
              style={{ fontFamily: "McLaren, cursive" }}
              placeholder={placeholder2}
              className={`form-control mt-3 mb-3 ${className}`}
            />
            <Button
              name="Add"
              className={`${addButton.btn} border-dark rounded-2 shadow`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputArea;
