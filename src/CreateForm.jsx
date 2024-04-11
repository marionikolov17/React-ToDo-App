import { useState } from "react";

const CreateForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");

  return (
    <form className="d-flex justify-content-center align-items-center mb-4 w-100" onSubmit={(e) => onSubmit(e, title)}>
      <div className="form-floating flex-fill">
        <input type="text" id="form2" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor="form2">New task...</label>
      </div>
      <button
        type="submit"
        data-mdb-button-init
        data-mdb-ripple-init
        className="btn btn-info ms-2"
      >
        Add
      </button>
    </form>
  );
}

export default CreateForm