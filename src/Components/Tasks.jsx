import React, {useState} from 'react';


export default function Tasks({input, handleDelete, id}) {

    const [fadeOut, setFadeOut] = useState(false);
    const [completed, setCompleted] = useState(false);

    const addFadeOut = () => {
        setFadeOut(true);
    }

    const toggleChecked = () => {
        setCompleted(!completed);
    }

    return (
        <div className={fadeOut ? 'task fade-out' : 'task'} onClick={toggleChecked} >
            <p className='task-text' >
                <input type='checkbox' className='task-completed' onChange={toggleChecked} checked={completed} />
                {input}
            </p>
            <button className='delete-btn' onClick={() => {handleDelete(id); addFadeOut();}} >Delete</button>
        </div>
    )
}