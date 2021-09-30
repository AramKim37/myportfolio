import React from "react";
import "./Map.css";

export default function Map() {
  return (
    <div className="container-box">
      <div className="map-container">
        <div className="map-card">
          <h3 className="map-card-heading">Here is me</h3>
          <p>Calgary, AB, Canada</p>
          <a
            className="map-link"
            href="https://www.google.ca/maps/@50.8951618,-114.081946,13.63z"
          >
            Open
          </a>
        </div>
      </div>
    </div>
  );
}
