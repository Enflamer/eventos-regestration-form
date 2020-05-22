import React from 'react';
import ApplicationForm from './components/ApplicationForm'

function App() {

  const title = 'Регистрация нового участника'
  const fields = [
    {title:"Имя"},
    {title:"Фамилия"},
    {title:"Отчество"},
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
