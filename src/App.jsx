import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import { TodoItem } from "./TodoItem";
import { CreateForm } from "./CreateForm";
import TabsNavigation from "./TabsNavigation";

function App() {
  return (
    <>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="card-body p-5">
                  <CreateForm />

                  <TabsNavigation />
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
