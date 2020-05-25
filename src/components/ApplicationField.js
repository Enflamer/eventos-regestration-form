import React from 'react';

export default function ApplicationField(props){
    return (
        <div className = {props.fullWidth? 'application-field full-width' : 'application-field'}>
            <div className='application-field__title'>
                {props.title}:
            </div>
            <input 
                className = 'application-field__field'
                placeholder = {props.required? props.title + '*' : props.title}
                type='text'
            />
        </div>
    );
}