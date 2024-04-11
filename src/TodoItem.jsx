export function TodoItem() {
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
          defaultChecked
        />
        <s>Todo item - random...</s>
      </li>
  );
}
