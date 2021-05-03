import React, { useContext } from "react";
import Form from "./Form";
import DrgDrpContext from "../provider/DragDropProvider";

const AddTask = ({ columnId, isEditing }) => {
  const { handleEditing } = useContext(DrgDrpContext);
  if (isEditing) {
    return <Form columnId={columnId} />;
  } else {
    return (
      <div className="has-text-right">
        <btn
          onClick={() => handleEditing(columnId)}
          style={{ fontSize: "21px", color: "#5E6C84" ,marginRight: "10px" }}>
          +  Add Card
        </btn>
      </div>
    );
  }
};

export default AddTask;
