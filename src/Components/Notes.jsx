import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import LaunchIcon from "@mui/icons-material/Launch";

function Note(props) {
  function handleNote() {
    props.onNote(props.title);
    props.newNote(true);
    props.onDisplay(props.content);
    props.onID(props.id);
  }

  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <div className="cardTitle">
        <h1>{props.title}</h1>
      </div>
      <button className="open" onClick={handleNote}>
        <LaunchIcon />
      </button>
      <button className="delete" onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
