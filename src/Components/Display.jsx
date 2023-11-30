import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Zoom from "@mui/material/Zoom";

function Display(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <Zoom in={true}>
      <div className="display-note">
        <div className="dis-content">
          <h3 className="dis-h3">{props.content}</h3>
        </div>
        <button className="delete" onClick={handleClick}>
          <DeleteIcon />
        </button>
      </div>
    </Zoom>
  );
}

export default Display;
