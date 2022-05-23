import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";


function Empl(employe) {
  return (
    <div>
      <p>
        <label>empl Name: {employe.name}</label>
      </p>
      <p>
        <label>empl Salary:{employe.job}</label>
      </p>
    </div>
  );
}