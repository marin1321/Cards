import React from 'react';

export const Button = ({nombre, event, clase, id}) => {
  return (
      <button className='btns' onClick={event} className={clase} id={id}>{nombre}</button>
    )
};
