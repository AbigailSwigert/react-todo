import React from 'react';

export default function Todo({handleChange, handleSubmit, input}) {

    return (
        <div className='todo-list'>
            <form className='addTaskForm' onSubmit={handleSubmit} >
                <input
                className='taskInput'
                placeholder='New Task'
                value={input}
                onChange={handleChange}
                >
                </input>
                <button className='addTaskBtn' type='submit' >Add Task</button>
            </form>
        </div>
    );
}