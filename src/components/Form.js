import React, { Fragment } from 'react';

const Form = () => {
  return (
    <Fragment>
      <h2>Crear Cita</h2>
      <form>
        <label>Nombre Mascota</label>
        <input type='text' name='pet' className='u-full-width' placeholder='Nombre de la mascota...' />
        <label>Nombre Dueño</label>
        <input type='text' name='owner' className='u-full-width' placeholder='Nombre del dueño...' />
        <label>Fecha</label>
        <input type='date' name='date' className='u-full-width' />
        <label>Hora</label>
        <input type='time' name='time' className='u-full-width' />
        <label>Síntomas</label>
        <textarea className='u-full-width' name='symptom'></textarea>
        <button type='submit' className='u-full-width button-primary'>
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
