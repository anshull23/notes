import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";
import axios from 'axios';

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // function submitNote() {
  //   axios.post('https://notes-q1rr6r07z-anshuls-projects-4572fa6d.vercel.app/add', {note: {title: title, content: content}})
  //   .then(result => console.log(result))
  //   .catch(err => console.log(err))
  // }
  const handleSubmit = event => {
    axios.post('https://notes-q1rr6r07z-anshuls-projects-4572fa6d.vercel.app/add', {note: {title: title, content: content}})
    .then(result => console.log(result))
    .catch(err => console.log(err));
    event.preventDefault();

    setTitle("");
    setContent("");
    props.onChange();
  }

  return (
    <Zoom in={true}>
      <div>
        <form className="create-note" onSubmit={handleSubmit}>
          <textarea
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="noteTitle"
            rows="1"
            wrap="off"
            value={title}
          />
          <textarea
            name="content"
            onChange={(e) => setContent(e.target.value)}
            placeholder="Take a note..."
            className="noteContent"
            rows="5"
            value={content}
          />
          {/* <button className="add" onClick={submitNote}> */}
          <button type="submit" className="add">
            <AddIcon />
          </button>
        </form>
      </div>
    </Zoom>
  );
}

export default CreateArea;