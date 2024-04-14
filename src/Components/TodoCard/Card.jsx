import PropTypes from "prop-types";
import "./Card.css";

const TodoCard = ({ name, description, status = false }) => {
  return (
    <>
      <div className="todo-card">
        <h3 className="todo-name">Name: {name}</h3>
        <p className="todo-desc">Description: {description}</p>
        <div className="todo-status">
          <label htmlFor="todo-filter" className="todo-lbl" id="todo-filter">
            Status
          </label>
          <select name="filter" id="todo-filter" className="todo-select">
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
