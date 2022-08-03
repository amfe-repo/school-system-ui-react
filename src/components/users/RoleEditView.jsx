import React from 'react'
import FormRole from './FormRole'

function RoleEditView({mode}) {
    return (
        <div className="container-fluid w-75 mx-auto p-0 row flex-column register-form">
            <div className="col-xxxl-5 col-xxl-7 col-lg-8 col-sm-10 col-12 mx-auto">
            {
                mode == 'edit' && (
                    <FormRole role={true} title={['Actualizar Rol', 'Actualizar']}></FormRole>
                )
            }
    
            {
                mode == 'view' && (
                    <FormRole role={false} title={['Mostrar Rol', '']}></FormRole>
                )
            }
    
            {
                mode == 'create' && (
                    <FormRole role={true} title={['Crear Rol', 'Crear']}></FormRole>
                )
            }
            </div>
        </div>
      )
}

export default RoleEditView