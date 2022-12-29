import React from 'react'
import { Link } from 'react-router-dom'
import './Error404.css'
import SvgComponent from '../assets/Svg404'

export const Error404 = () => {
  return (
    <div className='error404'>
      <div>
        <SvgComponent className='error404__imagen'/>
        <h1 className='error404__titulo'>Error 404</h1>
        <p className='error404__parrafo'>Pagina no encontrada</p>
      </div>
      <Link to='/' className='error404__boton-volver'>Volver al inicio</Link>
    </div>
  )
}
