import React from "react";
import NotesMiddle from "../Notes/NotesMiddle";
import "../styles/App.scss";
import "../styles/Home.scss";

function Notes() {
  return (
    <div className="home">
      <NotesMiddle className="middle" />
    </div>
  );
}

export default Notes;
