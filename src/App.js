import React, { Fragment, useState } from 'react';
import Form from './components/Form';

function App() {
  const [appointments, keepAppointments] = useState([]);

  const createAppointment = appointment => {
    keepAppointments([...appointments, appointment]);
  };

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Form createAppointment={createAppointment} />
          </div>
          <div className='one-half column'>2</div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
