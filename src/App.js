import React from "react";
import ApplicationForm from "./components/ApplicationForm";

function App() {
    const title = "Регистрация нового участника";
    const fields = [
        { name: "firstName", title: "Имя", required: true },
        { name: "lastName", title: "Фамилия", required: true },
        { name: "middleName", title: "Отчество", fullWidth: true },
        { name: "jobPosition", title: "Должность", default: "Майор" },
        { name: "company", title: "Компания", default: "ФСБ" },
    ];

    return (
        <div className="wrapper">
            <ApplicationForm name={title} fields={fields} />
        </div>
    );
}

export default App;
