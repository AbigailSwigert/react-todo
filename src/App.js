import React, {useState} from 'react';
import './App.css';
import Todo from './Components/Todo';
import Tasks from './Components/Tasks';

function App() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleChange = (event) => {
      setInput(event.target.value)
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      setTasks(tasks.concat({input}))
      console.log({tasks})
      setInput('');
  }

  return (
    <div className="App">
      <header className="todoHeader">
        To Do List
      </header>
      <Todo handleChange={handleChange} handleSubmit={handleSubmit} input={input} />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
