import React from 'react'
import ApplicationButton from './ApplicationButton'


export default function ApplicationFormComplete() {
    return (
        <div className='application-form-complete'>
            <div className='application-form-complete__title'>
                Регистрация прошла успешно.
            </div>
            <ApplicationButton title='ОК' />
        </div>
    );
}