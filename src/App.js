import React from "react";
import ApplicationForm from "./components/ApplicationForm";

function App() {
    const title = "Регистрация нового участника";
    const fields = [
        { name: "lastName", title: "Фамилия", required: true },
        { name: "firstName", title: "Имя", required: true },
        { name: "middleName", title: "Отчество", fullWidth: true },
        { name: "company", title: "Компания" },
        { name: "jobPosition", title: "Должность" },
    ];

    return (
        <div className="wrapper">
            <ApplicationForm name={title} fields={fields} />
        </div>
    );
}

export default App;
