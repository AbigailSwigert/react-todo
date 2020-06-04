import React from 'react';


export default function Tasks({input, handleDelete, id}) {

    return (
        <div className='task'>
            <p className='task-text' >
                <input type='checkbox' className='task-completed' />
                {input}
            </p>
            <button className='delete-btn' onClick={() => handleDelete(id)} >Delete</button>
        </div>
    )
}