import React, {useState} from 'react';


export default function Tasks({input, handleDelete, id}) {

    const [fadeOut, setFadeOut] = useState(false);

    const addFadeOut = () => {
        setFadeOut(true);
    }

    return (
        <div className={fadeOut ? 'task fade-out' : 'task'}>
            <p className='task-text' >
                <input type='checkbox' className='task-completed' />
                {input}
            </p>
            <button className='delete-btn' onClick={() => {handleDelete(id); addFadeOut();}} >Delete</button>
        </div>
    )
}