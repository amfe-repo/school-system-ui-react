import React, { useEffect } from 'react'
import { useState } from 'react'
import { GetPermissions } from '../../services/api/main'
import { getSession } from '../../services/localStorage/main'

function PermissionsTable({title, role}) {
    let [permissions, setPermissions] = useState([])

    useEffect(()=> {
        GetPermissions(getSession().Data.email, getSession().Data.password).then((res)=>{
            console.log(res)
            setPermissions(res)
        })
    }, [])
    return (
        <div className=' col-5'>
        <h2 className='text-danger'>{title}</h2>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Grupo de permisos</th>
                <th scope="col">Crear cursos</th>
                <th scope="col">Crear roles</th>
                <th scope="col">Crear usuarios</th>
                <th scope="col">Editar usuarios</th>
                <th scope="col">Enrolar usuarios</th>
                <th scope="col">Aceptar peticiones</th>
                </tr>
            </thead>
            <tbody>
            {permissions.Data && permissions.Data.map((permission) => {
                    return (
                        <tr key={permission.ID}>
                            <td>{permission.GroupName}</td>
                            <td className="mb-3">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={ permission.CreateCoursePermission == '0' ? false : true  } disabled/>
                            </td>
                            <td className="mb-3">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={ permission.CreateRolesPermission == '0' ? false : true  } disabled/>
                            </td>
                            <td className="mb-3">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={ permission.CreateUsersPermission == '0' ? false : true  } disabled/>
                            </td>
                            <td className="mb-3">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={ permission.EditUserPermission == '0' ? false : true  } disabled/>
                            </td>
                            <td className="mb-3">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={ permission.EnrollUserPermission == '0' ? false : true  } disabled/>
                            </td>
                            <td className="mb-3">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={ permission.AcceptAcademicRequestPermission == '0' ? false : true  } disabled/>
                            </td>
                            <button type="button" className='btn btn-outline-primary w-100'>EDITAR</button>
                        </tr>
                    )
                    
                })}
            </tbody>
        </table>
        {
        role && 
        <div className="button-register d-flex justify-content-center">
            <button type="submit" className="btn btn-danger text-light form-btn-submit mt-3 w-25">Crear permiso</button>
        </div> 
        }
    
        </div>
      )
}

export default PermissionsTable