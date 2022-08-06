import React from 'react'

import './Users.css'

function Users({title, role, users, condition}) {
    return (
        <div className='w-75 mt-5 user-table'>
        <h2 className='text-danger'>{title}</h2>
        <div className='shadow p-4'>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Usuario</th>
                <th scope="col">Email</th>
                {(users.Data && condition == 'requests') && <th scope="col">Curso</th>}
                <th scope="col">Estado</th>
                </tr>
            </thead>
            <tbody>
                {(users.Data && condition == 'students') && users.Data.map((user) => {
                    return (
                        <tr key={user.ID}>
                            <td>{user.user.name}</td>
                            <td>{user.user.username}</td>
                            <td>{user.user.email}</td>
                            <td>{user.user.status == '1' ? 'Activo' : 'Inactivo'}</td>
                            <button type="button" className='btn btn-outline-primary w-100'>EDITAR</button>
                            <button type="button" className='btn btn-outline-primary w-100'>VER</button>
                        </tr>
                    )
                    
                })}


                {(users.Data && condition == 'adiminstratives') && users.Data.map((user) => {
                    return (
                        <tr key={user.ID}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.status == '1' ? 'Activo' : 'Inactivo'}</td>
                            <button type="button" className='btn btn-outline-primary w-100'>EDITAR</button>
                            <button type="button" className='btn btn-outline-primary w-100'>VER</button>
                        </tr>
                    )
                    
                })}

                {(users.Data && condition == 'requests') && users.Data.map((user) => {
                    return (
                        <tr key={user.ID}>
                            <td>{user.Student.user.name}</td>
                            <td>{user.Student.user.username}</td>
                            <td>{user.Student.user.email}</td>
                            <td>{user.Course.Name}</td>
                            <td>{user.Student.user.status == '1' ? 'Activo' : 'Inactivo'}</td>
                            <button type="button" className='btn btn-outline-primary w-100'>ACEPTAR</button>
                            <button type="button" className='btn btn-outline-primary w-100'>DECLINAR</button>
                        </tr>
                    )
                    
                })}
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