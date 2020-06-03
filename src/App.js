import React from "react";
import ApplicationForm from "./components/ApplicationForm";

function App() {
    const title = "Регистрация нового участника";
    const fields = [
        { name: "firstName", label: "Имя", required: true },
        { name: "lastName", label: "Фамилия", required: true },
        { name: "middleName", label: "Отчество", fullWidth: true },
        { name: "jobPosition", label: "Должность", default: "Майор" },
        { name: "company", label: "Компания", default: "ФСБ" },
    ];

   

    const objectFields = Object.fromEntries(fields.map(field => {
        return [field.name, field]
    }))

    //console.log(objectFields)

    return (
        <div className="wrapper">
            <ApplicationForm title={title} fields={objectFields} />
        </div>
    );
}

export default App;
