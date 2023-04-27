import React from "react";
import Note from "./Note";
import "../styles/App.scss";
import "./styles/NotesMiddle.scss";

function NotesMiddle() {
  return (
    <div className="sub-middle">
      <Note />
    </div>
  );
}

export default NotesMiddle;
