import React, {useState} from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import LaunchIcon from "@mui/icons-material/Launch";
import CircularProgress from '@mui/material/CircularProgress';
import Zoom from "@mui/material/Zoom";

function Note(props) {
  const [change, setChange] = useState(true);
  function handleNote() {
    props.onNote(props.title);
    props.newNote(true);
    props.onDisplay(props.content);
    props.onID(props.id);
  }

  function handleClick() {
    props.onDelete(props.id);
    setChange(false);
    setTimeout(() => {setChange(true);}, 1000);
  }

  return (
    <Zoom in={true}>
    <div className="note">
      <div className="cardTitle">
        <h1>{props.title}</h1>
      </div>
      <button className="open" onClick={handleNote}>
        <LaunchIcon />
      </button>
      <button className="delete" onClick={handleClick}>
        {change ? (<DeleteIcon />) : (<CircularProgress size={20} color="inherit"/>)}
      </button>
    </div>
    </Zoom>
  );
}

export default Note;
