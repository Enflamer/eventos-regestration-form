import React from 'react';

export default function ApplicationField(props){
    return (
        <div className='application-field'>
            <div className='application-field__title'>
                {props.title}:
            </div>
            <input 
                type='text'
                placeholder='Type here'
            />
        </div>
    );
}