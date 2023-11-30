import React from "react";
import EventNoteIcon from '@mui/icons-material/EventNote';

function Header() {
  return (
    <header>
      <h1>
        <EventNoteIcon sx={{ fontSize: 25 }}/> MyNotes
      </h1>
    </header>
  );
}

export default Header;
