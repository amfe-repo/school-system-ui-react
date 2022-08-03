import React from 'react'
import PermissionsTable from './PermissionsTable'
import RolesTable from './RolesTable'

function Roles() {
    return (
        <div className="container-fluid w-100 mx-auto p-0 row flex-column perfil">
            
            <div className="col-xxxl-5 w-75 col-xxl-7 col-lg-8 col-sm-10 col-12 mx-auto row d-flex justify-content-between">
                <RolesTable title={'Roles'} role={true}></RolesTable>
                <PermissionsTable title={'Permisos'} role={true}></PermissionsTable>
            </div>
        </div>
      )
}

export default Roles