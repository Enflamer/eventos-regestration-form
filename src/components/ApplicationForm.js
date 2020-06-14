import React, { useState, useEffect } from "react";
import ApplicationField from "./ApplicationField";
import ApplicationFormComplete from "./ApplicationFormComplete";
import ApplicationLoader from "./ApplicationLoader";
import Modal from "react-modal";
import axios from "axios";
import "../styles/ApplicationForm.scss";

Modal.setAppElement("#root");

export default function ApplicationForm(props) {
    const [formValues, setFormValues] = useState({});
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRejectedResponse, setIsRejectedResponse] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const token = "32573222-5c4c-44e4-84de-985629ac6fd7";

    useEffect(() => setFormValues(makeDefaultFormValue(props.fields)), []);
    
    const parseValues = () => {
        const obj = {extended: {}};
        const keys = Object.keys(formValues)

        props.fields.forEach((field, index) => {
            if(field.systemField!==null && field.systemField === keys[index]){
                obj[field.systemField] = formValues[field.systemField]
            }
            if(field.name!==null && field.name === keys[index]){
                obj.extended[field.name] = formValues[field.name]
            }
        }) 

        console.log(obj)
        return obj
    }
    parseValues()

    const makeDefaultFormValue = (fields) => {
        return Object.fromEntries(
            fields.map((field) => {
                return [
                    field.name || field.systemField,
                    field.defaultValue ?? "",
                ];   
            })
        );
    };

    console.log(formValues);

    const inputHandler = (name, value) => {
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSendForm = (event) => {
        handler();
        event.preventDefault();
    };

    const handler = () => {
        setIsLoading(true);

        axios
            .post("https://form.eventos42.ru/api/form/" + token, parseValues())
            .then((data) => {
                setIsLoading(false);
                setIsRejectedResponse(false);
                setModalIsOpen(true);
            })
            .catch((data) => {
                setErrorMessage(data.response.data.message);
                console.log(data.response.data.message);
                setIsLoading(false);
                setIsRejectedResponse(true);
                setModalIsOpen(true);
            });
    };

    return (
        <div className="application-form">
            <h2 className="application-form__title">{props.title}</h2>
            <form
                onSubmit={handleSendForm}
                className="application-form-wrapper"
            >
                {props.fields.map((field) => (
                    <ApplicationField
                        inputHandler={inputHandler}
                        field={field}
                        value={formValues[field.systemField || field.name]}
                        key={field.label}
                    />
                ))}

                <div className="application-form-buttons">
                    <button
                        type={"submit"}
                        className="application-button"
                        onClick={props.onClick}
                    >
                        <div className="application-button__title">
                            Зарегистрироваться
                        </div>
                    </button>
                    <button className="application-button">
                        <div className="application-button__title">Отмена</div>
                    </button>
                </div>
            </form>
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
