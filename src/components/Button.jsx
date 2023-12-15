import React from 'react'

function Button({ text }) {
    return (
        <div className='bg-secondary rounded-md px-3 py-1 w-fit cursor-pointer shadow'>
            <span className='text-white text-sm font-medium'>{text}</span>
        </div>
    )
}

export default Button