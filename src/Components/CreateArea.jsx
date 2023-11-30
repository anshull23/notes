import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <Zoom in={true}>
      <div>
        <form className="create-note">
          <textarea
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
            className="noteTitle"
            rows="1"
            wrap="off"
          />
          <textarea
            name="content"
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note..."
            className="noteContent"
            rows="5"
          />
          <button className="add" onClick={submitNote}>
            <AddIcon />
          </button>
        </form>
      </div>
    </Zoom>
  );
}

export default CreateArea;
