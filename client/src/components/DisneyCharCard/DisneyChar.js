import React from "react";
import "./DisneyChar.css";

const DisneyChar = (props) => (
  <div className="card">
    <div className="img-container" >
      <img onClick={() => props.handleImageClick(props.id)} alt={props.name} src={props.image} />
    </div>
  </div>
);

export default DisneyChar;
