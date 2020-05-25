import React from 'react';
import ApplicationForm from './components/ApplicationForm'

function App() {

  const title = 'Регистрация нового участника'
  const fields = [
    {title:"Имя", required: true},
    {title:"Фамилия", required: true},
    {title:"Отчество", fullWidth: true },
    {title:"Компания"},
    {title:"Должность"},
  ]  

  return (
    <div className="wrapper">
        <ApplicationForm name={title} fields={fields} />
    </div>
  );
}

export default App;
