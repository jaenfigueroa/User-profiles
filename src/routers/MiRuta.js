import React from 'react'
import {Routes, Route, HashRouter, Navigate} from 'react-router-dom'
import { Inicio } from '../componentes/Inicio'
import { Error404 } from '../componentes/Error404'

export const MisRutas = () => {
  return (
    <div className='layout'>
      <HashRouter>

        {/* HEADER Y NAVEGACION */}
        <header className='header'>
          <h3><i className="fa-solid fa-paperclip"></i> Lista de usuarios</h3>
        </header>

        {/* CUERPO */}
        <main className='main'>
        <Routes>
          <Route path='/' element={<Navigate to='/inicio/1'/>}/>
          <Route path='/inicio' element={<Navigate to='/inicio/1'/>}/>
          <Route path='/inicio/:numPagina' element={<Inicio/>}/>

          <Route path='*' element={<Error404/>}/>
        </Routes>
        </main>

        {/* FOOTER */}
        <footer className='footer'>
          Developed by <a href='https://www.jaenfigueroa.com'>Jaen Figueroa</a> &copy; 2022
        </footer>

      </HashRouter>
    </div>
  )
}