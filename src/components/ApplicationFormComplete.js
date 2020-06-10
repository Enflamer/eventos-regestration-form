import React from "react";


export default function ApplicationFormComplete(props) {
    return (
        <div className="application-form-complete">
            {props.isRejectedResponse? <div className="application-form-complete__failed" /> :<div className="application-form-complete__success" />}
            <div className="application-form-complete__title">
                {props.isRejectedResponse?<div>{props.errorMessage}</div>:<div>Регестрация прошла успешно</div>}
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
