import React, { useState } from "react";

export default function ApplicationField(props) {
    return (
        <div
            className={
                props.field.sizeOnCard === 12
                    ? "application-field full-width"
                    : "application-field"
            }
        >
            <div className="application-field__title">{props.field.label}:</div>
            <input
                //onKeyPress={props.handleSendForm}
                name={props.field.name}
                className="application-field__field"
                value={props.value ?? ''}
                placeholder={
                    props.field.required
                        ? props.field.label + "*"
                        : props.field.label
                }
                type="text"
                onChange={(e) => props.inputHandler(props.field.systemField || props.field.name, e.target.value)}
            />
        </div>
    );
}
