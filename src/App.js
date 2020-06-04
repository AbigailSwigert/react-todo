import React, {useState} from 'react';
import './App.css';
import Todo from './Components/Todo';
import Tasks from './Components/Tasks';



let keyCount = 0;

function App() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState('')

  const handleInputChange = (event) => {
      setInput(event.target.value);
      setId(event.target.value + keyCount);
  }


  const handleSubmit = (event) => {
      event.preventDefault();
      if (input !== '') {
        setTasks(tasks.concat({input, id}));
        setInput('');
        setId('');
        keyCount++;
      }
  }

  const handleDelete = (taskId) => {
    setTimeout( function() {
      setTasks(tasks.filter((task) => task.id !== taskId));
    }, 1000)
  }

  const todoItems = tasks.map((task, index) => <Tasks input={task.input} id={task.id} key={task.id} handleDelete={handleDelete} />)

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
