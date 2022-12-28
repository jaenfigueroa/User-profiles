import React, {useEffect, useState} from 'react'
import './AjaxComponente.css'

export const AJaxComponente = () => {

  const [usuarios, setUsuarios] = useState([])

  // 1.PRIMERA FORMA - CON DATOS ESTATICOS////////////////////////////

  // const traerUsuariosEstaticos = ()=>{
  //   let lista = [
  //     {
  //       "id": 1,
  //       "email": "jose.perez@reqres.in",
  //       "first_name": "Jose",
  //       "last_name": "Perez",
  //       "avatar": "https://reqres.in/img/faces/7-image.jpg"
  //       },
  //       {
  //       "id": 2,
  //       "email": "maria.lopinta@reqres.in",
  //       "first_name": "Maria",
  //       "last_name": "Lopinta",
  //       "avatar": "https://reqres.in/img/faces/8-image.jpg"
  //       },
  //       {
  //       "id": 3,
  //       "email": "cristian.figueroa@reqres.in",
  //       "first_name": "Cristian",
  //       "last_name": "Figueroa",
  //       "avatar": "https://reqres.in/img/faces/9-image.jpg"
  //       },
  //   ]

  //   setUsuarios(lista)
  // }

  // 2.SEGUNDA FORMA - USANDO FETCH, CON PROMESAS NORMALES////////////////////////////

  // const traerUsuariosAjax = () => {
  //   fetch('https://reqres.in/api/users?page=1')
  //     .then((res) => {
  //       if (res.ok) {
  //         res.json().then((respuesta) => {
    
  //           setUsuarios(respuesta.data)
  //         })
  //       }
  //     })
  // }

  // 3.TERCERA FORMA - USANDO ASYNC AWAYT ////////////////////////////
  const traerUsuariosAjaxAW = async ()=>{
    const peticion = await fetch('https://reqres.in/api/users?page=1')
    const {data} = await peticion.json()

    setUsuarios(data)
  }

  useEffect(()=>{
    // traerUsuariosEstaticos()
    // traerUsuariosAjax()
    traerUsuariosAjaxAW()
  }, [])

  return (
    <div className='caja'>
      <h2 className='titulo'>Lista de usuarios</h2>
      <ul className='contenedor-lista'>
        {
          usuarios.map(usuario =>{
            // console.log(usuario)
            return <li key={usuario.id}>{usuario.first_name + ' ' + usuario.last_name}</li>
          })
        }
      </ul>
    </div>
  )
}
