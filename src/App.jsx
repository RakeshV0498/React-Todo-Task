import { useState } from "react";
import "./App.css";
import TodoForm from "./Components/Form/Form";
import TodoCard from "./Components/TodoCard/Card";

const data = [
  {
    name: "My Todo -1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste accusamus nam itaque soluta iure.",
    status: false,
  },
  {
    name: "My Todo -2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste accusamus nam itaque soluta iure.",
    status: true,
  },
];

function App() {
  const [filtervalue, setFilterValue] = useState("All");

  const handleFilter = (e) => {
    console.log(e.target.value);
    setFilterValue(e.target.value);
  };
  return (
    <>
      <TodoForm />
      <div className="todo-header">
        <h2 className="todo-title-text">My Todos</h2>
        <form className="todo-filter">
          <label htmlFor="todo-filter" className="todo-lbl" id="todo-filter">
            Status Filter:
          </label>
          <select
            name="filter"
            id="todo-filter"
            className="todo-select"
            onChange={handleFilter}
          >
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
      <div className="todo-container">
        {filtervalue === "all" &&
          data.map((item, index) => <TodoCard key={index} {...item} />)}
        {filtervalue === "completed" &&
          data
            .filter((item) => item.status === true)
            .map((item, index) => <TodoCard key={index} {...item} />)}
        {filtervalue === "not-completed" &&
          data
            .filter((item) => item.status === false)
            .map((item, index) => <TodoCard key={index} {...item} />)}
      </div>
    </>
  );
}

export default App;
