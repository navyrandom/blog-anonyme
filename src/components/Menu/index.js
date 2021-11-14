import React from "react";
import "./styles.css";

export default function ListMenu(props) {
  return (
    <div className="menuWrapper">
      <ul>
        <a href="/">
          <li>Sharing Space</li>
        </a>
        <a href="/aboutus">
          <li>The Concept</li>
        </a>
        <a href="/contact">
          <li>Contact Us</li>
        </a>
      </ul>
    </div>
  );
}
