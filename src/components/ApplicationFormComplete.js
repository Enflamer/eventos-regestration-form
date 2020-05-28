import React from "react";
import ReactDOM from "react-dom";

import ApplicationButton from "./ApplicationButton";

export default function ApplicationFormComplete(props) {
    const styleButton = {
        margin: "0 auto",
        width: "600px",
    };

    return (
        <div className="application-form-complete">
            {props.isRejectedResponse? <div className="application-form-complete__failed" /> :<div className="application-form-complete__success" />}
            <div className="application-form-complete__title">
                {props.isRejectedResponse?<div>Пользователь уже существует</div>:<div>Регестрация прошла успешно</div>}
            </div>
            <div
                className="application-form-complete__button"
                onClick={props.onClick}
            >
                {"OK"}
            </div>
        </div>
    );
}
