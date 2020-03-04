import React, { Fragment, useState } from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';

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
          <div className='one-half column'>
            <h2>Administra tus citas</h2>
            {appointments.map(appointment => (
              <Appointment key={appointment.id} appointment={appointment} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
