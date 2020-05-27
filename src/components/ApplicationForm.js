import React, { useState } from 'react';
import ApplicationField from './ApplicationField'
import ApplicationButton from './ApplicationButton'
import ApplicationFormComplete from './ApplicationFormComplete'
import Modal from 'react-modal'
import axios from 'axios'
import '../styles/ApplicationForm.scss'

Modal.setAppElement('#root')

export default function ApplicationForm(props) {

    const [fields, setFields] = useState(props.fields)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const token = '2ca94873-c392-43a8-a335-5d542c491a89'

    const handler = async () => {
        console.log()
        axios.post(
            'https://form.eventos42.ru/?token=2ca94873-c392-43a8-a335-5d542c491a89',
            {
                headers: { 'Access-Control-Allow-Methods': '*'}
            },
            {
                "firstName":"name",
                "lastName":"last",
                "middleName":"",
                "extended": {
                    "company":"",
                    "jobPosition":""
                }
            },
           
        )
        //.then(() => data)
        .catch(data => console.log(data))
    }

    return (
        
        <div className='application-form'>
                <h2 className='application-form__title'>{props.name}</h2>
                {fields.map(field => <ApplicationField field={field} key={field.title}/>)}
            <div className='application-form-buttons'>  
                <ApplicationButton onClick={handler} title='Зарегестрироваться'/>
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
