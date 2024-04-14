import PropTypes from "prop-types";
import "./Card.css";
import { useState } from "react";

const TodoCard = ({ name, description, status = false, onupdateStatus }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedStatus, setEditedStatus] = useState(status);

  const handleEdit = (e) => {
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
        <div className="todo-status">
          <label
            htmlFor="todo-filter"
            className="todo-lbl"
            id="todo-filter-card"
          >
            Status:
          </label>
          <select
            name="filter"
            id="todo-filter-card"
            className="todo-select-card"
            disabled
          >
            {status ? (
              <>
                {" "}
                <option value="completed" className="todo-filter-option">
                  Completed
                </option>
                <option value="not-completed" className="todo-filter-option">
                  Not-Completed
                </option>
              </>
            ) : (
              <>
                <option value="not-completed" className="todo-filter-option">
                  Not-Completed
                </option>
                <option value="completed" className="todo-filter-option">
                  Completed
                </option>
              </>
            )}
          </select>
        </div>
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
              <buttton className="btn btn-edit" onClick={handleEdit}>
                Edit
              </buttton>
              <buttton className="btn btn-delete">Delete</buttton>
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
