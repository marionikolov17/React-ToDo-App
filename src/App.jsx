import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import TodoItem from "./TodoItem";
import CreateForm from "./CreateForm";
import TabsNavigation from "./TabsNavigation";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log(todos);
  }, [todos])

  function createTodo(e, title) {
    e.preventDefault();

    setTodos(currentTodos => {
      return [...currentTodos, { id: crypto.randomUUID(), title, completed: false }];
    })
  }

  return (
    <>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="card-body p-5">
                  <CreateForm onSubmit={createTodo}/>

                  <TabsNavigation />
                  <div className="tab-content" id="ex1-content">
                    {/* Ext Tab 1 - All */}
                    <div
                      className="tab-pane fade show active"
                      id="ex1-tabs-1"
                    >
                      <ul className="list-group mb-0">
                        {todos.map(todo => {
                          return <TodoItem title={todo.title} completed={todo.completed} key={todo.id}/>
                        })}
                      </ul>
                    </div>
                    {/* Ext Tab 2 */}
                    <div
                      className="tab-pane fade"
                      id="ex1-tabs-2"
                    >
                      <ul className="list-group mb-0">
                      </ul>
                    </div>
                    {/* Ext Tab 3 */}
                    <div
                      className="tab-pane fade"
                      id="ex1-tabs-3"
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
