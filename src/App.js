import React, {useState} from 'react';
import './App.css';
import Todo from './Components/Todo';
import Tasks from './Components/Tasks';

function App() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (event) => {
      setInput(event.target.value)
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      if (input !== '') {
        setTasks(tasks.concat({input}))
        setInput('');
      }
  }

  const handleDelete = (event) => {
    event.preventDefault();
    setTasks(tasks.splice(event.target, 1))
  }

  const todoItems = tasks.map(task => <Tasks input={task.input} key={task.input + tasks.length} handleDelete={handleDelete} />)

  return (
    <div className="App">
      <header className="todoHeader">
        To Do List:
      </header>
      <Todo handleInputChange={handleInputChange} handleSubmit={handleSubmit} input={input} />
      {todoItems}
    </div>
  );
}

export default App;
