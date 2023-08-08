import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import Ladder from "./components/ladder";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <Ladder/>
  </> 
);