import React from "react";
import "./cssModules/footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer className="position-absolute bottom-0">
        <p>Copyright © {currentYear}</p>
      </footer>
    </div>
  );
}

export default Footer;
