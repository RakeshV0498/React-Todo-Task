const TodoForm = () => {
  return (
    <>
      <h1 className="title">My Todo</h1>
      <form className="todo-form">
        <input
          type="text"
          className="todo-input"
          required
          placeholder="Todo Name"
        />
        <input
          type="text"
          className="todo-input"
          required
          placeholder="Todo Description"
        />
        <button className="btn btn-submit">Add Todo</button>
      </form>
    </>
  );
};

export default TodoForm;
