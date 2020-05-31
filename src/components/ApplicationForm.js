import React, { useState, createRef } from "react";
import ApplicationField from "./ApplicationField";
import ApplicationButton from "./ApplicationButton";
import ApplicationFormComplete from "./ApplicationFormComplete";
import ApplicationLoader from "./ApplicationLoader";
import Modal from "react-modal";
import axios from "axios";
import "../styles/ApplicationForm.scss";

Modal.setAppElement("#root");

export default function ApplicationForm(props) {
    const [fields] = useState(props.fields);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formValues, setFormValues] = useState({});
    const [isRejectedResponse, setIsRejectedResponse] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')
    const token = "0f9ab1dc-c782-4cc9-9215-1ecab69c42d7";

    const inputHandler = (title, value) => {
        setFormValues({ ...formValues, [title]: value });
    };

    const handleSendForm = (event) => {
        if (event.charCode == 13) {
            handler()
        }
    };

    const handler = () => {
        setIsLoading(true);
        axios
            .post("https://form.eventos42.ru/api/form/" + token, {
                firstName: formValues["firstName"],
                lastName: formValues["lastName"],
                middleName: formValues["middleName"],
                extended: {
                    company: formValues["company"],
                    jobPosition: formValues["jobPosition"],
                },
            })
            .then(data => {
                setIsLoading(false);
                setIsRejectedResponse(false);
                setModalIsOpen(true);
            })
            .catch(data => {
                setErrorMessage(data.response.data.message)
                console.log(data.response.data.message)
                setIsLoading(false);
                setIsRejectedResponse(true);
                setModalIsOpen(true);
            });
    };

    return (
        <div className="application-form">
            <h2 className="application-form__title">{props.name}</h2>
            {/* <input type='text' value={firstName} onChange={e => setFirstName(e.target.value)} required/>
                <input type='text' value={lastName} onChange={e => setLastName(e.target.value)} required/> */}
            {fields.map((field) => (
                <ApplicationField
                    handleSendForm={handleSendForm}
                    inputHandler={inputHandler}
                    field={field}
                    key={field.title}
                />
            ))}
            <div className="application-form-buttons">
                <ApplicationButton
                    onClick={handler}
                    title="Зарегестрироваться"
                />
                <ApplicationButton title="Отмена" />
            </div>
            <Modal
                style={{
                    overlay: {
                        background: "rgba(0,0,0,0.2)",
                    },
                    content: {
                        width: "400px",
                        height: "450px",
                        margin: "100px auto",
                    },
                }}
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
            >
                <ApplicationFormComplete
                    errorMessage={errorMessage}
                    isRejectedResponse={isRejectedResponse}
                    onClick={() => setModalIsOpen(false)}
                />
            </Modal>
            {isLoading ? <ApplicationLoader /> : null}
        </div>
    );
}
