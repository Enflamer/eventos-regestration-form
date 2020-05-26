import React, { useState } from 'react';
import ApplicationField from './ApplicationField'
import ApplicationButton from './ApplicationButton'
import ApplicationFormComplete from './ApplicationFormComplete'
import Modal from 'react-modal'
import '../styles/ApplicationForm.scss'

Modal.setAppElement('#root')

export default function ApplicationForm(props) {

    const [fields, setFields] = useState(props.fields)
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        
        <div className='application-form'>
                <h2 className='application-form__title'>{props.name}</h2>
                {fields.map(field => <ApplicationField field={field} key={field.title}/>)}
            <div className='application-form-buttons'>  
                <ApplicationButton onClick={() => setModalIsOpen(true)} title='Зарегестрироваться'/>
                <ApplicationButton title='Отмена'/>
            </div>
            <Modal 
                style={
                    {
                        overlay: {
                            background: 'rgba(0,0,0,0.2)',
                            
                        },
                        content: {
                            width: '400px',
                            height: '450px',
                            margin: '100px auto'
                        }
                    }
                } 
                isOpen={modalIsOpen} 
                onRequestClose={() => setModalIsOpen(false)}>
                <ApplicationFormComplete onClick={() => setModalIsOpen(false)}/>
            </Modal>
        </div>
    );
}
