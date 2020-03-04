import React, { Fragment, useState } from 'react';

const Form = () => {
  // Create State
  const [appointment, updateAppointment] = useState({
    pet: '',
    owner: '',
    date: '',
    time: '',
    symptom: ''
  });

  const updateState = e => {
    updateAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    });
  };

  const { pet, owner, date, time, symptom } = appointment;

  return (
    <Fragment>
      <h2>Crear Cita</h2>
      <form>
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
