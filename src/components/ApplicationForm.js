import React from 'react';
import ApplicationField from './ApplicationField'



export default function ApplicationForm(props) {
    return (
        <div className='application-form'>
            <h1>{props.name}</h1>
            <ApplicationField title='Имя' />
        </div>
    );
}
