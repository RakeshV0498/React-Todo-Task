import { useState } from "react";
import "./App.css";
import TodoForm from "./Components/Form/Form";
import TodoCard from "./Components/TodoCard/Card";

const initialData = [
  {
    id: 1,
    name: "My Todo -1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste accusamus nam itaque soluta iure.",
    status: false,
  },
  {
    id: 2,
    name: "My Todo -2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste accusamus nam itaque soluta iure.",
    status: true,
  },
];

function App() {
  const [filtervalue, setFilterValue] = useState("all");
  const [data, setData] = useState(initialData);

  const handleFilter = (e) => {
    setFilterValue(e.target.value);
  };

  const handleAddTodo = (newTodo) => {
    const newId = Math.max(...data.map((item) => item.id)) + 1;
    const newData = [...data, { id: newId, ...newTodo }];
    setData(newData);
  };

  const onUpdateStatus = (id, newStatus) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, status: newStatus } : item
    );
    setData(updatedData);
  };

  return (
    <>
      {console.log(data)}
      <TodoForm onAddTodo={handleAddTodo} />
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
          data.map((item) => (
            <TodoCard key={item.id} {...item} onUpdateStatus={onUpdateStatus} />
          ))}
        {filtervalue === "completed" &&
          data
            .filter((item) => item.status === true)
            .map((item) => (
              <TodoCard
                key={item.id}
                {...item}
                onUpdateStatus={onUpdateStatus}
              />
            ))}
        {filtervalue === "not-completed" &&
          data
            .filter((item) => item.status === false)
            .map((item) => (
              <TodoCard
                key={item.id}
                {...item}
                onUpdateStatus={onUpdateStatus}
              />
            ))}
      </div>
    </>
  );
}

export default App;
