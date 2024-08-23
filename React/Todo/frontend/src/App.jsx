import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then(async (res) => {
        const json = await res.json();
        setTodos(json.todos);
      });
  }, []);  // Dependency array to avoid infinite loops

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />  {/* Passing todos prop to Todos component */}
    </div>
  );
}

export default App;
