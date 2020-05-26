import React from 'react'
import ReactDOM from 'react-dom'

import ApplicationButton from './ApplicationButton'


export default function ApplicationFormComplete(props) {

    const styleButton = {
        margin: '0 auto',
        width: '600px'
        }

        return (
            <div className='application-form-complete'>
                <div className='application-form-complete__img'></div>
                <div className='application-form-complete__title'>
                    Регистрация прошла успешно.
                </div>
                    <div className='application-form-complete__button' onClick={props.onClick}>
                        {'OK'}
                    </div>
            </div>
        );
}