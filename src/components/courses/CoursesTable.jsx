import React from 'react'


function CoursesTable() {
    return (
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Fecha de inicio</th>
                <th scope="col">Fecha de termino</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <button type="button" className='btn btn-outline-primary w-100'>SOLICITAR</button>
                </tr>
                <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <button type="button" className='btn btn-outline-primary w-100'>SOLICITAR</button>
                </tr>
                <tr>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
                <button type="button" className='btn btn-outline-primary w-100'>SOLICITAR</button>
                </tr>
            </tbody>
        </table>
      )
}

export default CoursesTable