import React, { useEffect, useState } from 'react'
import { GetStudents, GetStudentsRequests } from '../../services/api/main'
import { getSession } from '../../services/localStorage/main'

import Users from './Users'

function Students() {
  let [students, setStudents] = useState([])
  let [requests, setRequests] = useState([])

  useEffect(()=> {
    GetStudents(getSession().Data.email, getSession().Data.password).then((res)=>{
      setStudents(res)
      })
    GetStudentsRequests(getSession().Data.email, getSession().Data.password).then((res)=>{
      setRequests(res)
      })
  }, [])

  return (
    <div className="container-fluid w-100 mx-auto p-0 row flex-column">
            <div className="col-xxxl-5 w-75 col-xxl-7 col-lg-8 col-sm-10 col-12 mx-auto row d-flex justify-content-center">
                <Users title={'Estudiantes'} users={students} condition={'students'}></Users>
                <Users title={'Peticiones estudiantes'} users={requests} condition={'requests'}></Users>
            </div>
        </div>
  )
}

export default Students