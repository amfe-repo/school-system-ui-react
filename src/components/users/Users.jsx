import React from 'react'

import './Users.css'

function Users({title, role}) {
    return (
        <div className='w-75 mt-5 user-table'>
        <h2 className='text-danger'>{title}</h2>
        <div className='shadow p-4'>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Usuario</th>
                <th scope="col">Email</th>
                <th scope="col">Estado</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Activo</td>
                    <div className='d-flex'>
                        <button type="button" className='btn btn-outline-primary w-100'>EDITAR</button>
                        <button type="button" className='btn btn-outline-primary w-100'>VER</button>
                    </div>
                </tr>
                <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>Activo</td>
                    <div className='d-flex'>
                        <button type="button" className='btn btn-outline-primary w-100'>EDITAR</button>
                        <button type="button" className='btn btn-outline-primary w-100'>VER</button>
                    </div>
                </tr>
                <tr>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    <td>Activo</td>
                    <div className='d-flex'>
                        <button type="button" className='btn btn-outline-primary w-100'>EDITAR</button>
                        <button type="button" className='btn btn-outline-primary w-100'>VER</button>
                    </div>
                </tr>
            </tbody>
        </table>
        </div>
        {
        role && 
        <div className="button-register d-flex justify-content-center">
            <button type="submit" className="btn btn-danger text-light form-btn-submit mt-3 w-25">Crear usuario</button>
        </div> 
        }
    
        </div>
      )
}

export default Users