import React, { useState } from "react";
import Header from "./Header";
import Note from "./Notes";
import CreateArea from "./CreateArea";
import Display from "./Display";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";

function App() {
  const [notes, setNotes] = useState([
    {
      title: "Sample Title 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Sample Title 2",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ]);
  const [newNote, setNewNote] = useState(false);
  const [title, setTitle] = useState("New Note");
  const [newDisplay, setNewDisplay] = useState("");
  const [displayID, setID] = useState();

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function changeTitle(text) {
    setTitle(text);
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
    setNewNote(false);
    setTitle("New Note");
  }

  function handlePlus() {
    setNewNote(false);
    setTitle("New Note");
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
        <CreateArea onAdd={addNote} />
      )}
      <h3 className="allNotes">Your Notes</h3>
      {newNote && (
        <Zoom in={true}>
          <div className="plus" onClick={handlePlus}>
            <AddIcon className="plus-btn" sx={{ fontSize: 60 }} />
          </div>
        </Zoom>
      )}
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
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
