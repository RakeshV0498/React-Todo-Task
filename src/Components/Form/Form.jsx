import { useState } from "react";
import "./Form.css";

const TodoForm = () => {
  const [todoName, setTodoName] = useState("");
  const [todoDescription, setTodoDescription] = useState("");

  const handleNameChange = (e) => setTodoName(e.target.value);
  const handleDescriptionChange = (e) => setTodoDescription(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the function passed from the parent component to add the new todo item
    onAddTo({
      name: todoName,
      description: todoDescription,
      status: false,
    });
    setTodoName("");
    setTodoDescription("");
  };

  return (
    <>
      <h1 className="title">My Todo</h1>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          required
          placeholder="Todo Name"
          onChange={handleNameChange}
        />
        <input
          type="text"
          className="todo-input"
          required
          placeholder="Todo Description"
          onChange={handleDescriptionChange}
        />
        <button type="submit" className="btn btn-submit">
          Add Todo
        </button>
      </form>
    </>
  );
};

export default TodoForm;
