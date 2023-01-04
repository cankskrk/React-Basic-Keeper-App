import React from "react";
import cssHeader from "./cssModules/header.module.css";

function Header() {
  return (
    <header>
      <h1 className={cssHeader.title}>Keeper</h1>
    </header>
  );
}

export default Header;
