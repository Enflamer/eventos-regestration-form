import React, { useState } from "react";

export default function ApplicationField(props) {
    return (
        <div
            className={
                props.field.fullWidth
                    ? "application-field full-width"
                    : "application-field"
            }
        >
            <div className="application-field__title">{props.field.title}:</div>
            <input
                //onKeyPress={props.handleSendForm}
                name={props.field.name}
                className="application-field__field"
                value={props.value ?? ''}
                placeholder={
                    props.field.required
                        ? props.field.title + "*"
                        : props.field.title
                }
                type="text"
                onChange={(e) => props.inputHandler(props.field.name, e.target.value)}
            />
        </div>
    );
}
