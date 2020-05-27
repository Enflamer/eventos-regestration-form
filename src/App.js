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
  const token = 'a5w8-d4a8'  

  return (
    <div className="wrapper">
        <ApplicationForm token={token} name={title} fields={fields} />
    </div>
  );
}

export default App;
