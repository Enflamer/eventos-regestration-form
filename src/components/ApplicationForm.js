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
    const [formValues, setFormValues] = useState({});
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRejectedResponse, setIsRejectedResponse] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const token = "0f9ab1dc-c782-4cc9-9215-1ecab69c42d7";

    useEffect(() => setFormValues(makeDefaultFormValue(props.fields)), []);

    const makeDefaultFormValue = (fields) => {
        return Object.fromEntries(
            fields.map((field) => {
                return [field.name, field.default ?? ""];
            })
        );

        // return fields.map((field) => {
        //     return({ ...field, value: field.default ?? "" });
        // });
    };
    console.log(formValues);

    const inputHandler = (name, value) => {
        setFormValues({ ...formValues, [name]: value });

        // setFormValues(
        //     formValues.map((item) => {
        //         if (item.name === name) {
        //             return { ...item, value };
        //         }
        //         return item;
        //     })
        // );
    };

    const handleSendForm = (event) => {
        alert("A name was submitted: ");
        if (event.charCode == 13) {
            handler();
        }
        event.preventDefault();
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
                        //handleSendForm={handleSendForm}
                        inputHandler={inputHandler}
                        field={field}
                        value={formValues[field.name]}
                        key={field.name}
                    />
                ))}
            </form>
            <div className="application-form-buttons">
                <ApplicationButton
                    type="button"
                    //onClick={handler}
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
