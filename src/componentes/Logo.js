import React from 'react';
import '../hoja-de-estilos/Logo.css'

export const Logo = ( {freeCodeCampLogo} ) => {
  return (
    <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freeCodeCampLogo} 
          className='freecodecamp-logo' 
          alt='Logo de freecodecamp' />
    </div>
  )
}