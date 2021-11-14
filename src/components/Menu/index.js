import React from "react";
import "./styles.css";

export default function ListMenu(props) {
  return (
    <div className="menuWrapper">
      <ul>
        <a href="/">
          <li>Our Works</li>
        </a>
        <a href="/aboutus">
     
          <li>About Us</li>
        </a>

        <a href="">
        
          <li>Contact Us</li>
        </a>
      </ul>
    </div>
  );
}
