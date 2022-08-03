import React from 'react'
import FormUser from './FormUser'


function EditViewUser({mode}) {
    
  return (
    <div className="container-fluid w-75 mx-auto p-0 row flex-column register-form">
        <div className="col-xxxl-5 col-xxl-7 col-lg-8 col-sm-10 col-12 mx-auto">
        {
            mode == 'edit' && (
                <FormUser role={true} title={['Actualizar Usuario', 'Actualizar']}></FormUser>
            )
        }

        {
            mode == 'view' && (
                <FormUser role={false} title={['Mostrar Usuario', '']}></FormUser>
            )
        }

        {
            mode == 'create' && (
                <FormUser role={true} title={['Crear Usuario', 'Crear']}></FormUser>
            )
        }
        </div>
    </div>
  )
}

export default EditViewUser