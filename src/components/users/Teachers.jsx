import React, { useEffect, useState } from 'react'
import { GetStudents, GetTeachers } from '../../services/api/main'
import { getSession } from '../../services/localStorage/main'

import Users from './Users'

function Teachers() {

  let [students, setStudents] = useState([])

  useEffect(()=> {
    GetTeachers(getSession().Data.email, getSession().Data.password).then((res)=>{
      setStudents(res)
      })
  }, [])
  return (
    <div className="container-fluid w-100 mx-auto p-0 row flex-column perfil">
        <div className="col-xxxl-5 w-75 col-xxl-7 col-lg-8 col-sm-10 col-12 mx-auto row d-flex justify-content-center">
            <Users title={'Profesores'} condition={'students'} users={students}></Users>
        </div>
    </div>
  )
}

export default Teachers