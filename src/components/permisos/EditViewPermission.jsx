import React from 'react'
import FormPermission from './FormPermission'

function EditViewPermission({mode}) {
    return (
        <div className="container-fluid w-75 mx-auto p-0 row flex-column register-form">
            <div className="col-xxxl-5 col-xxl-7 col-lg-8 col-sm-10 col-12 mx-auto">
            {
                mode == 'edit' && (
                    <FormPermission role={true} title={['Actualizar Permisos', 'Actualizar']}></FormPermission>
                )
            }
    
            {
                mode == 'view' && (
                    <FormPermission role={false} title={['Mostrar Permisos', '']}></FormPermission>
                )
            }
    
            {
                mode == 'create' && (
                    <FormPermission role={true} title={['Crear Permisos', 'Crear']}></FormPermission>
                )
            }
            </div>
        </div>
      )
}

export default EditViewPermission