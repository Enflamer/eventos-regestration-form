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
            <div className="application-field__title">{props.field.label}:</div>
            <input
                onKeyPress={props.handleSendForm}
                className="application-field__field"
                value={props.field.value}
                placeholder={
                    props.field.required
                        ? props.field.label + "*"
                        : props.field.label
                }
                
                onChange={(e) => props.inputHandler(props.field.name, e.target.value)}
            />
        </div>
    );
}
