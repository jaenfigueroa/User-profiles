import React, {useEffect, useState} from 'react'
import './Inicio.css'
import { Usuario } from './Usuario'
import { NavLink, useParams } from 'react-router-dom'

///////////////////////////////////////////////////////////////////////////
export const Inicio = () => {

  const [usuarios, setUsuarios] = useState([])

  useEffect(()=>{
    traerUsuariosAjaxAW()

  }, [usuarios])
  
  const {pagina = 1} = useParams()

  ///////////////////////////////////////////////////////////////////////////
  const traerUsuariosAjaxAW = async ()=>{
    try {
      const peticion = await fetch(`https://reqres.in/api/users?page=${pagina}`)
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

      <nav className='nav-pages'>
        <NavLink to='/inicio/1' className={({isActive})=>isActive?'activo':'noActivo'}>
          Anterior
        </NavLink>
        <NavLink to='/inicio/2' className={({isActive})=>isActive?'activo':'noActivo'}>
          Siguiente
        </NavLink>
      </nav>
    </>
  )
}
