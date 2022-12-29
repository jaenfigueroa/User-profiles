import React, {useEffect, useState} from 'react'
import './Inicio.css'
import { Usuario } from './Usuario'
import { NavLink } from 'react-router-dom'

///////////////////////////////////////////////////////////////////////////
export const Inicio = () => {

  const [usuarios, setUsuarios] = useState([])

  useEffect(()=>{
    traerUsuariosAjaxAW()
  }, [])

  ///////////////////////////////////////////////////////////////////////////
  const traerUsuariosAjaxAW = async ()=>{
    try {
      const peticion = await fetch('https://reqres.in/api/users?page=1')
      const {data} = await peticion.json()
      
      setUsuarios(data)

    } catch (error) {
      console.log(error);
    }

  }

  ////////////////////////////////////////////////////////////////////////////
  return (
    <>
      <div className='caja'>
        <ul className='contenedor-lista'>
          {
            usuarios.map(usuario => <Usuario usuario={usuario} key={usuario.id}/>)
          }
        </ul>
      </div>

      <NavLink className='nav-pages'>
          <button>Anterior</button>
          <button>Siguiente</button>
      </NavLink>

    </>
  )
}
