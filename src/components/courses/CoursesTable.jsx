import React from 'react'


function CoursesTable({courses}) {


    return (
        <table className="table">
        <thead>
            <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Fecha de inicio</th>
            <th scope="col">Fecha de termino</th>
            <th scope="col">Cupos</th>
            </tr>
        </thead>
        <tbody>
                {courses.Data && courses.Data.map((course) => {
                    return (
                        <tr key={course.Course.ID}>
                            <td>{course.Course.Name}</td>
                            <td>{course.Course.BeginDate}</td>
                            <td>{course.Course.FinishDate}</td>
                            <td>{course.Course.Stock}</td>
                            <button type="button" className='btn btn-outline-primary w-100'>SOLICITAR</button>
                        </tr>
                    )
                    
                })}
        </tbody>
    </table>
      )
}

export default CoursesTable