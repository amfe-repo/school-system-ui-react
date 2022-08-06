import React from 'react'
import CoursesTable from './CoursesTable'

import './Courses.css'
import { GetCourses, GetEnrolled } from '../../services/api/main'
import { useState } from 'react'
import { useEffect } from 'react'
import { getSession } from '../../services/localStorage/main'

function Courses() {
  let [courses, setCourses] = useState([])

  useEffect(()=> {
    GetEnrolled(getSession().Data.email, getSession().Data.password).then((res)=>{
      console.log(res)
      setCourses(res)
      })
  }, [])

  return (
    <div className='container-fluid mx-auto  my-0 w-50 shadow-lg p-4 courses-table'>
        <h2 className='text-danger'>Cursos disponibles</h2>
        <CoursesTable courses={courses}></CoursesTable>
    </div>
  )
}

export default Courses