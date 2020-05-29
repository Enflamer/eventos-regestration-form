import React, { useState } from "react";

export default function ApplicationField(props) {
    const [value, setValue] = useState("")

    const changeHandler = (value) => {
        setValue(value)
        props.inputHandler(props.field.name, value);
    };

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
                className="application-field__field"
                value={value}
                placeholder={
                    props.field.required
                        ? props.field.title + "*"
                        : props.field.title
                }
                type="text"
                onChange={(e) => changeHandler(e.target.value)}
            />
        </div>
    );
}
