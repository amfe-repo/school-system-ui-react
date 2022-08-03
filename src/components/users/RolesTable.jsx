import React from 'react'

function RolesTable({title, role}) {
    return (
        <div className='col-5'>
        <h2 className='text-danger'>{title}</h2>
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
                    </div>
                </tr>
                <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>Activo</td>
                    <div className='d-flex'>
                        <button type="button" className='btn btn-outline-primary w-100'>EDITAR</button>
                    </div>
                </tr>
                <tr>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    <td>Activo</td>
                    <div className='d-flex'>
                        <button type="button" className='btn btn-outline-primary w-100'>EDITAR</button>
                    </div>
                </tr>
            </tbody>
        </table>
        {
        role && 
        <div className="button-register d-flex justify-content-center">
            <button type="submit" className="btn btn-danger text-light form-btn-submit mt-3 w-25">Crear rol</button>
        </div> 
        }
    
        </div>
      )
}

export default RolesTable