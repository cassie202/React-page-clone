import React from "react";
import ReactDOM from "react-dom";

const page = (
  <div className="container">
    <div className="logo">
      <img src="./react-logo.png" alt="react logo" />
    </div>
    <div className="hero">
      <h1>Fun Facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on github </li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  </div>
);

ReactDOM.render(page, document.getElementById("root"));
