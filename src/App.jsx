import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import TodoItem from "./TodoItem";
import CreateForm from "./CreateForm";
import TabsNavigation from "./TabsNavigation";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState(() => {
    const currentTodos = localStorage.getItem("todos");
    if (currentTodos == null) {
      return []
    }

    return JSON.parse(currentTodos);
  });
  const [currentPageHash, setCurrentPageHash] = useState(() => {
    return window.location.hash;
  })

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function createTodo(e, title) {
    e.preventDefault();

    if (title === "") return;

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function completeTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: true };
        }

        return todo;
      });
    });
  }

  return (
    <>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="card-body p-5">
                  <CreateForm onSubmit={createTodo} />

                  <TabsNavigation currentPageHash={currentPageHash} setCurrentPageHash={setCurrentPageHash}/>
                  <div className="tab-content" id="ex1-content">
                    {/* Ext Tab 1 - All */}
                    <div className={currentPageHash === "" || currentPageHash === "#ex1-tabs-1" ? "tab-pane fade show active" : "tab-pane fade"} id="ex1-tabs-1">
                      <ul className="list-group mb-0">
                        {todos.length === 0 && <p>There are not any todos, yet!</p>}
                        {todos.map((todo) => {
                          return (
                            <TodoItem
                              title={todo.title}
                              completed={todo.completed}
                              id={todo.id}
                              completeTodo={completeTodo}
                              key={todo.id}
                            />
                          );
                        })}
                      </ul>
                    </div>
                    {/* Ext Tab 2 */}
                    <div className={currentPageHash === "#ex1-tabs-2" ? "tab-pane fade show active" : "tab-pane fade"} id="ex1-tabs-2">
                      <ul className="list-group mb-0">
                        {todos.filter((todo) => todo.completed !== true).length === 0 && <p>There are not any active todos, yet!</p>}
                        {todos
                          .filter((todo) => todo.completed !== true)
                          .map((todo) => {
                            return (
                              <TodoItem
                                title={todo.title}
                                completed={todo.completed}
                                id={todo.id}
                                completeTodo={completeTodo}
                                key={todo.id}
                              />
                            );
                          })}
                      </ul>
                    </div>
                    {/* Ext Tab 3 */}
                    <div className={currentPageHash === "#ex1-tabs-3" ? "tab-pane fade show active" : "tab-pane fade"} id="ex1-tabs-3">
                      <ul className="list-group mb-0">
                        {todos.filter((todo) => todo.completed === true).length === 0 && <p>There are not any completed todos, yet!</p>}
                        {todos
                          .filter((todo) => todo.completed === true)
                          .map((todo) => {
                            return (
                              <TodoItem
                                title={todo.title}
                                completed={todo.completed}
                                id={todo.id}
                                completeTodo={completeTodo}
                                key={todo.id}
                              />
                            );
                          })}
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
