import React, {useEffect, useState} from 'react'
import './Inicio.css'
import { Usuario } from './Usuario'
import { NavLink, useParams } from 'react-router-dom'
import { Error404 } from './Error404'

///////////////////////////////////////////////////////////////////////////
export const Inicio = () => {

  const [usuarios, setUsuarios] = useState([])
  //////////////////////////////////////
  useEffect(()=>{
    traerUsuariosAjaxAW()
  })
  //////////////////////////////////////
  const {numPagina} = useParams()
  
  ///////////////////////////////////////////////////////////////////////////
  const traerUsuariosAjaxAW = async ()=>{
    try {
      const peticion = await fetch(`https://reqres.in/api/users?page=${numPagina}`)
      const {data} = await peticion.json()
      
      setUsuarios(data)
    } catch (error) {
      console.log(error);
    }
  }

  ////////////////////////////////////////////////////////////////////////////
  if (numPagina <= 2) {
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
            1
          </NavLink>
          <NavLink to='/inicio/2' className={({isActive})=>isActive?'activo':'noActivo'}>
            2
          </NavLink>
        </nav>
      </>
    )
  } else{
    return(
      <>
        <Error404/>
      </>
    )
  }
}
