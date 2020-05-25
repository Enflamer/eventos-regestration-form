import React, { useState } from 'react';
import ApplicationField from './ApplicationField'
import ApplicationButton from './ApplicationButton'
import '../styles/ApplicationForm.scss'


export default function ApplicationForm(props) {

    const [fields, setFields] = useState(props.fields)

    return (
        <div className='application-form'>

                <h2 className='application-form__title'>{props.name}</h2>
                {fields.map(field => <ApplicationField title={field.title} fullWidth={field.fullWidth} required={field.required} />)}
            <div className='application-form-buttons'>
                <ApplicationButton title='Зарегестрироваться'/>
                <ApplicationButton title='Отмена'/>
            </div>
        </div>
    );
}
