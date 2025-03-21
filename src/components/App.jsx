import '../reset.css';
import '../App.css';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Finish React Series', isComplete: false },
    { id: 2, title: 'Go to Grocery', isComplete: true },
    { id: 3, title: 'Do other thing', isComplete: false },
  ]);

  const [todoInput, setTodoInput] = useState('');
  const [idForTodo, setIdForTodo] = useState(4);

  function addToDo(event) {
    event.preventDefault();

    if (todoInput.trim() === '') {
      return;
    }

    setTodos([
      ...todos,
      {
        id: idForTodo,
        title: todoInput,
        isComplete: false,
      },
    ]);

    setTodoInput('');
    setIdForTodo(prevIdFotTodo => prevIdFotTodo + 1);
  }

  function handleInput(event) {
    setTodoInput(event.target.value);
  }

  function deleteToDo(id) {
    const deletedTodos = todos.filter(todo => todo.id !== id);
    setTodos(deletedTodos);
  }

  function completeToDo(id) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <form action="#" onSubmit={addToDo}>
          <input
            type="text"
            value={todoInput}
            onChange={handleInput}
            className="todo-input"
            placeholder="What do you need to do?"
          />
        </form>

        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={todo.id} className="todo-item-container">
              <div className="todo-item">
                <input
                  type="checkbox"
                  onChange={() => completeToDo(todo.id)}
                  checked={todo.isComplete ? true : false}
                />
                <span className="todo-item-label">{todo.title}</span>
              </div>
              <button className="x-button">
                <svg
                  className="x-button-icon"
                  fill="none"
                  onClick={() => deleteToDo(todo.id)}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>

        <div className="check-all-container">
          <div>
            <div className="button">Check All</div>
          </div>

          <span>3 items remaining</span>
        </div>

        <div className="other-buttons-container">
          <div>
            <button className="button filter-button filter-button-active">
              All
            </button>
            <button className="button filter-button">Active</button>
            <button className="button filter-button">Completed</button>
          </div>
          <div>
            <button className="button">Clear completed</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
