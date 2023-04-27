import React from "react";
import "./styles/Note.scss";

function Note() {
  return (
    <>
      <div className="wrapper">
        <div className="header">
          <div className="flex-parent">
            <div className="icon flex-child"></div>
            <div className="name flex-child">Note Name</div>
            <div className="setting flex-child"></div>
          </div>
        </div>
        <div className="body">
          <span className="note-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </span>
        </div>
      </div>
    </>
  );
}

export default Note;
