import React from 'react'

import Users from './Users'

function Teachers() {
  return (
    <div className="container-fluid w-100 mx-auto p-0 row flex-column perfil">
        <div className="col-xxxl-5 w-75 col-xxl-7 col-lg-8 col-sm-10 col-12 mx-auto row d-flex justify-content-center">
            <Users title={'Profesores'}></Users>
        </div>
    </div>
  )
}

export default Teachers