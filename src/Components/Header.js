import React from "react";
import cssHeader from "./cssModules/header.module.css";

import HighlightIcon from "@mui/icons-material/Highlight";

function Header() {
  return (
    <header>
      <h1 className={cssHeader.title}>
        <HighlightIcon fontSize="large" />
        Keeper
      </h1>
    </header>
  );
}

export default Header;
