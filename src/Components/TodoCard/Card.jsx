import PropTypes from "prop-types";
import "./Card.css";

const TodoCard = ({ name, description, status = false }) => {
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
          <buttton className="btn btn-edit">Edit</buttton>
          <buttton className="btn btn-delete">Delete</buttton>
        </div>
      </div>
    </>
  );
};

TodoCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  status: PropTypes.bool,
};

export default TodoCard;
