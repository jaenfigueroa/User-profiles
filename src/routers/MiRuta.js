import React from 'react'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import { Inicio } from '../componentes/Inicio'
import { Error404 } from '../componentes/Error404'

export const MisRutas = () => {
  return (
    <div className='layout'>
      <BrowserRouter>

        {/* HEADER Y NAVEGACION */}
        <h2 className='titulo'>Lista de usuarios</h2>

        {/* CUERPO */}
        <main className='main'>
        <Routes>
          <Route path='/' element={<Navigate to='/inicio/1'/>}/>
          <Route path='/inicio' element={<Navigate to='/inicio/1'/>}/>
          <Route path='/inicio/:pagina' element={<Inicio/>}/>

          <Route path='*' element={<Error404/>}/>
        </Routes>
        </main>

        {/* FOOTER */}


      </BrowserRouter>
    </div>
  )
}