import React, {useState} from 'react';
import './App.css';
import Todo from './Components/Todo';
import Tasks from './Components/Tasks';

function App() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState('')

  const handleInputChange = (event) => {
      setInput(event.target.value);
      setId(event.target.value);
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      if (input !== '') {
        setTasks(tasks.concat({input, id}));
        setInput('');
        setId('');
      }
  }

  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task, index) => task.id + index !== taskId))
  }

  const todoItems = tasks.map((task, index) => <Tasks input={task.input} id={task.id + index} key={task.id + index} handleDelete={handleDelete} />)

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
