import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

export const ToDo = ({ title, updateMode, deleteMode, description }) => {
  return (
    <div className="todo">
      <div>{title}</div>
      <div>{description}</div>
      <div className="icons">
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete className="icon" onClick={deleteMode} />
      </div>
    </div>
  );
};
