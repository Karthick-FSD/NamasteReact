import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("h1", {id:"heading", className:"heading1"}, "This is Namaste REACT 🩷");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
