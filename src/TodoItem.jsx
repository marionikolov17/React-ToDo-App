const TodoItem = (props) => {
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
          checked={props.completed}
        />
        {/* Completed: */}
        {/* <s>Todo item - random...</s> */}
        {/* Active: */}
        {props.completed && <s>{props.title}</s>}
        {!props.completed && props.title}
      </li>
  );
}

export default TodoItem;