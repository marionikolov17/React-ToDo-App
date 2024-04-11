import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import { TodoItem } from "./TodoItem";

function App() {
  return (
    <>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="card-body p-5">
                  <form className="d-flex justify-content-center align-items-center mb-4 w-100">
                    <div className="form-floating flex-fill">
                      <input type="text" id="form2" className="form-control" />
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

                  <ul
                    className="nav nav-tabs mb-4 pb-2"
                    id="ex1"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link active"
                        id="ex1-tab-1"
                        data-mdb-tab-init
                        href="#ex1-tabs-1"
                        role="tab"
                        aria-controls="ex1-tabs-1"
                        aria-selected="true"
                      >
                        All
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="ex1-tab-2"
                        data-mdb-tab-init
                        href="#ex1-tabs-2"
                        role="tab"
                        aria-controls="ex1-tabs-2"
                        aria-selected="false"
                      >
                        Active
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="ex1-tab-3"
                        data-mdb-tab-init
                        href="#ex1-tabs-3"
                        role="tab"
                        aria-controls="ex1-tabs-3"
                        aria-selected="false"
                      >
                        Completed
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content" id="ex1-content">
                    <div
                      className="tab-pane fade show active"
                      id="ex1-tabs-1"
                      role="tabpanel"
                      aria-labelledby="ex1-tab-1"
                    >
                      <ul className="list-group mb-0">
                        <TodoItem />
                        <TodoItem />
                        <TodoItem />
                      </ul>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="ex1-tabs-2"
                      role="tabpanel"
                      aria-labelledby="ex1-tab-2"
                    >
                      <ul className="list-group mb-0">
                      </ul>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="ex1-tabs-3"
                      role="tabpanel"
                      aria-labelledby="ex1-tab-3"
                    >
                      <ul className="list-group mb-0">
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
