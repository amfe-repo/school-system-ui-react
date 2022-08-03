import React from 'react'

import Users from './Users'

function Students() {
  return (
    <div className="container-fluid w-100 mx-auto p-0 row flex-column">
            <div className="col-xxxl-5 w-75 col-xxl-7 col-lg-8 col-sm-10 col-12 mx-auto row d-flex justify-content-center">
                <Users title={'Estudiantes'}></Users>
                <Users title={'Peticiones estudiantes'}></Users>
            </div>
        </div>
  )
}

export default Students