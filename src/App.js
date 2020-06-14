import React, { useState, useEffect } from "react";
import ApplicationForm from "./components/ApplicationForm";
import ApplicationLoader from "./components/ApplicationLoader";
import axios from "axios";

function App() {
    const title = "Регистрация нового участника";
    // const fields = [
    //     { name: "firstName", title: "Имя", required: true },
    //     { name: "lastName", title: "Фамилия", required: true },
    //     { name: "middleName", title: "Отчество", fullWidth: true },
    //     { name: "jobPosition", title: "Должность", default: "Майор" },
    //     { name: "company", title: "Компания", default: "ФСБ" },
    // ];
    const [fields, setFields] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const token = "32573222-5c4c-44e4-84de-985629ac6fd7";
    const url = "https://form.eventos42.ru/api/form/";

    useEffect(() => getFields(), []);


    const getFields = () => {
        setIsLoading(false);
        axios
            .get(url + token)
            .then(function (response) {
                setFields(response.data.fields);
                setTimeout(() => setIsLoading(true), 1000);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div className="wrapper">
            {isLoading ? (
                <ApplicationForm title={title} fields={fields} />
            ) : <ApplicationLoader />}
        </div>
    );
}

export default App;
