import PropTypes from "prop-types";
import "./Card.css";
import { useState } from "react";

const TodoCard = ({ name, description, status = false, onupdateStatus }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedStatus, setEditedStatus] = useState(status);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    onupdateStatus(editedStatus);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedStatus(status);
  };

  const handleStatusChange = (e) => {
    setEditedStatus(e.target.value === "true");
  };

  return (
    <>
      <div className="todo-card">
        <p className="todo-name">
          <span>Name: </span> {name}
        </p>
        <p className="todo-desc">
          <span>Description: </span>
          {description}
        </p>
        {isEditing ? (
          <div className="todo-status-edit">
            <label htmlFor="todo-filter-card" className="todo-lbl">
              Status:
            </label>
            <select
              id="todo-filter-card"
              className="todo-select-card"
              value={editedStatus}
              onChange={handleStatusChange}
            >
              <option value={true}>Completed</option>
              <option value={false}>Not Completed</option>
            </select>
          </div>
        ) : (
          <p className="todo-status">
            <span>Status: </span>
            {status ? "Completed" : "Not Completed"}
          </p>
        )}
        <div className="btn-container">
          {isEditing ? (
            <>
              <button className="btn btn-save" onClick={handleSave}>
                Save
              </button>
              <button className="btn btn-cancel" onClick={handleCancel}>
                Cancel
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-edit" onClick={handleEdit}>
                Edit
              </button>
              <button className="btn btn-delete">Delete</button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

TodoCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  status: PropTypes.bool,
  onupdateStatus: PropTypes.func,
};

export default TodoCard;
