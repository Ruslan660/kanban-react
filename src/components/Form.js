import React, { useContext, useRef } from "react";
import DrgDrpContext from "../provider/DragDropProvider";

const Form = ({ columnId }) => {
  const { addData, endEditing } = useContext(DrgDrpContext);
  let newTask = useRef(null);
  const handleAddClick = () => {
    if (newTask.value === "") {
      alert("Task cannot be empty!");
    } else {
        endEditing(columnId);
        addData(columnId, newTask.value);
    }

  };

  const handleCloseClick = () => {
      endEditing(columnId);
  }

  return (
    <form className="card-content bg-form swing-in-bottom-bck">
      <input
        autoFocus
        className="input"
        type="text"
        placeholder="Enter your task here..."
        ref={(val) => (newTask = val)}
        defaultValue=""
        minLength="2"
        maxLength="60"
      />
      <button
        type="button"
        className="button swing-in-bottom-bck"
        onClick={handleAddClick}
      >
        Add Task
      </button>
        <button className="button swing-in-bottom-bck" style={{ marginLeft: "30px" }} onClick={handleCloseClick}>Close</button>
    </form>
  );
};

export default Form;
