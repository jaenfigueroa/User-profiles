import React from 'react'
import './Usuario.css'

export const Usuario = ({usuario}) => {

  // console.log(usuario);

  return (
    <article className='caja__usuario'>
      <img className='usuario__foto' src={usuario.avatar} alt='foto de la persona'></img>
      <div className='usuario__informacion'>

        <p className='dato'>
          Nombre: <span className='valor'> {usuario.first_name}</span>
        </p><hr/>

        <p className='dato'>
          Apellido: <span className='valor'>{usuario.last_name}</span>
        </p>  <hr/>

        <p className='dato'>
          Email: <span className='valor'>{usuario.email}</span>
        </p>
        
      </div>
    </article>
  )
}
