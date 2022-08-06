import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { GetRoles } from '../../services/api/main'
import { getSession } from '../../services/localStorage/main'

function RolesTable({title, role}) {

    let [roles, setRoles] = useState([])

    useEffect(()=> {
        GetRoles(getSession().Data.email, getSession().Data.password).then((res)=>{
            console.log(res)
            setRoles(res)
        })
    }, [])

    return (
        <div className='col-5'>
        <h2 className='text-danger'>{title}</h2>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Rol</th>
                <th scope="col">Grupo de permisos</th>
                </tr>
            </thead>
            <tbody>
                {roles.Data && roles.Data.map((role) => {
                    return (
                        <tr key={role.ID}>
                            <td>{role.Name}</td>
                            <td>{role.PermissionGroup.GroupName}</td>
                            <button type="button" className='btn btn-outline-primary w-100'>EDITAR</button>
                        </tr>
                    )
                    
                })}
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