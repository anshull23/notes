/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Note from "./Notes";
import CreateArea from "./CreateArea";
import Display from "./Display";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";
import axios from "axios";

function App() {
  const [change, setChange] = useState(true);
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState(false);
  const [title, setTitle] = useState("New Note");
  const [newDisplay, setNewDisplay] = useState("");
  const [displayID, setID] = useState();

  useEffect(() => {
    const delay = setTimeout(() => { 
      axios.get('https://notes-q1rr6r07z-anshuls-projects-4572fa6d.vercel.app/get')
      .then(result => setNotes(result.data))
      .catch(err => console.log(err))
    }, 1000);

    return () => clearTimeout(delay);
  },[change]);

  function changeTitle(text) {
    setTitle(text);
  }

  function deleteNote(id) {
    axios.delete('https://notes-q1rr6r07z-anshuls-projects-4572fa6d.vercel.app/delete/'+id)
    .catch(err => console.log(err));
    setNewNote(false);
    setTitle("New Note");
    setChange(!change);
  }

  function handlePlus() {
    setNewNote(false);
    setTitle("New Note"); 
  }

  function handleChange() {
    setChange(!change);
  }

  return (
    <div>
      <Header />
      {
        <div>
          <h3 className="title">{title}</h3>
        </div>
      }
      {newNote ? (
        <Display id={displayID} content={newDisplay} onDelete={deleteNote} />
      ) : (
        <CreateArea onChange={handleChange}/>
      )}
      <h3 className="allNotes">Your Notes</h3>
      {newNote && (
        <Zoom in={true}>
          <div className="plus" onClick={handlePlus}>
            <AddIcon className="plus-btn" />
          </div>
        </Zoom>
      )}
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={noteItem._id}
            title={noteItem.note.title}
            content={noteItem.note.content}
            onNote={changeTitle}
            newNote={setNewNote}
            onDisplay={setNewDisplay}
            onID={setID}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default App;
