const TodoItem = ({ title, completed, id, completeTodo }) => {
  return (
      <li
        className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
        style={{ backgroundColor: "#f4f6f7" }}
      >
        <input
          className="form-check-input me-2"
          type="checkbox"
          value=""
          aria-label="..."
          checked={completed}
          onChange={() => completeTodo(id)}
        />
        {/* Completed: */}
        {/* <s>Todo item - random...</s> */}
        {/* Active: */}
        {completed && <s>{title}</s>}
        {!completed && title}
      </li>
  );
}

export default TodoItem;