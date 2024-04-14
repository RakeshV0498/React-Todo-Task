import "./App.css";
import TodoForm from "./Components/Form/Form";
function App() {
  return (
    <>
      <TodoForm />
      <div className="todo-header">
        <h2 className="todo-title-text">My Todos</h2>
        <form className="todo-filter">
          <label
            htmlFor="todo-filter"
            className="todo-lbl"
            id="todo-filter"
          ></label>
          <select name="filter" id="todo-filter" className="todo-select">
            <option value="all" className="todo-filter-option">
              All
            </option>
            <option value="completed" className="todo-filter-option">
              Completed
            </option>
            <option value="not-completed" className="todo-filter-option">
              Not-Completed
            </option>
          </select>
        </form>
      </div>
    </>
  );
}

export default App;
