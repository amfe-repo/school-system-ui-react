import React from 'react'

import CoursesTable from './CoursesTable';

import './Courses.css';

function MyCourses() {
  return (
    <div className='container-fluid mx-auto  my-0 w-50 shadow-lg p-4 courses-table'>
        <h2 className='text-danger'>Mis Cursos</h2>
        <CoursesTable></CoursesTable>

        <h2 className='text-danger'>Mis solicitudes</h2>
        <CoursesTable></CoursesTable>
    </div>
  )
}

export default MyCourses