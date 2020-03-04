import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = () => {
  // Create State
  const [appointment, updateAppointment] = useState({
    pet: '',
    owner: '',
    date: '',
    time: '',
    symptom: ''
  });
  const [error, updateError] = useState(false);

  const updateState = e => {
    updateAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    });
  };

  const { pet, owner, date, time, symptom } = appointment;

  const submitAppointment = e => {
    e.preventDefault();

    //Authenticate fields
    if (pet.trim() === '' || owner.trim() === '' || date.trim() === '' || time.trim() === '' || symptom.trim() === '') {
      updateError(true);
      return;
    }
    // Delete error message
    updateError(false);

    // Create an unique ID
    appointment.id = uuidv4();
  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>

      {error ? <p className='alerta-error'>Todos los campos son obligatorios</p> : null}

      <form onSubmit={submitAppointment}>
        <label>Nombre Mascota</label>
        <input
          type='text'
          name='pet'
          className='u-full-width'
          placeholder='Nombre de la mascota...'
          onChange={updateState}
          value={pet}
        />
        <label>Nombre Dueño</label>
        <input
          type='text'
          name='owner'
          className='u-full-width'
          placeholder='Nombre del dueño...'
          onChange={updateState}
          value={owner}
        />
        <label>Fecha</label>
        <input type='date' name='date' className='u-full-width' onChange={updateState} value={date} />
        <label>Hora</label>
        <input type='time' name='time' className='u-full-width' onChange={updateState} value={time} />
        <label>Síntomas</label>
        <textarea className='u-full-width' name='symptom' onChange={updateState} value={symptom}></textarea>
        <button type='submit' className='u-full-width button-primary'>
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
