import React, { useState, useEffect } from "react";
import ApplicationField from "./ApplicationField";
import ApplicationButton from "./ApplicationButton";
import ApplicationFormComplete from "./ApplicationFormComplete";
import ApplicationLoader from "./ApplicationLoader";
import Modal from "react-modal";
import axios from "axios";
import "../styles/ApplicationForm.scss";

Modal.setAppElement("#root");

export default function ApplicationForm(props) {
    const [fields,setFields] = useState(props.fields);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRejectedResponse, setIsRejectedResponse] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const token = "0f9ab1dc-c782-4cc9-9215-1ecab69c42d7";
    const keys = Object.keys(props.fields)

    useEffect(() => setFields(makeDefaultFormValue(props.fields)), []);

    //console.log(fields)

    const makeDefaultFormValue = (fields) => {
        const some =  Object.fromEntries(keys.map((key) => {
            return([key, { ...fields[key], value: fields[key].default ?? "" }]);
        }));
        console.log(some)
        return some;
    };

    const inputHandler = (name, value) => {
        setFields({...fields[name], [fields.name]: value});
    };

    const handleSendForm = (event) => {
        if (event.charCode == 13) {
            handler();
        }
    };

    const handler = () => {
        setIsLoading(true);
        axios
            .post("https://form.eventos42.ru/api/form/" + token, {
                firstName: fields["firstName"],
                lastName: fields["lastName"],
                middleName: fields["middleName"],
                extended: {
                    company: fields["company"],
                    jobPosition: fields["jobPosition"],
                },
            })
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
            <h2 className="application-form__title">{props.name}</h2>
            {keys.map((key) => (
               // console.log(fields),
                <ApplicationField
                    handleSendForm={handleSendForm}
                    inputHandler={inputHandler}
                    field={fields[key]}
                    key={fields[key].name}
                />
            ))}
            <div className="application-form-buttons">
                <ApplicationButton
                    onClick={handler}
                    title="Зарегистрироваться"
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
