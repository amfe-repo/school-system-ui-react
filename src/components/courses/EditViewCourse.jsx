import React from 'react'
import FormCourse from './FormCourse'

function EditViewCourse({mode}) {
    return (
        <div className="container-fluid w-75 mx-auto p-0 row flex-column register-form">
            <div className="col-xxxl-5 col-xxl-7 col-lg-8 col-sm-10 col-12 mx-auto">
            {
                mode == 'edit' && (
                    <FormCourse role={true} title={['Actualizar Usuario', 'Actualizar']}></FormCourse>
                )
            }
    
            {
                mode == 'view' && (
                    <FormCourse role={false} title={['Mostrar Usuario', '']}></FormCourse>
                )
            }
    
            {
                mode == 'create' && (
                    <FormCourse role={true} title={['Crear Usuario', 'Crear']}></FormCourse>
                )
            }
            </div>
        </div>
      )
}

export default EditViewCourse