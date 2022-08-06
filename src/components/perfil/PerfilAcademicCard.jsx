import React from 'react'
import { Link } from 'react-router-dom';
import { GetAcademicRole } from '../../services/api/main';
import { getSession } from '../../services/localStorage/main';


import './PerfilCard.css'

function PerfilAcademicCard() {
    const data = getSession().Data
    const role = GetAcademicRole()

    return (
        <div className='col-5'>
        <p className="text-center fs-3 text-danger fw-bold">
            Perfil {role[0] ? 'Academico': 'Profesional'}
        </p>
      <form className="mx-auto my-0 border border-danger shadow-lg text-secondary p-4 h-75">
          <div className="mb-3 text-center">
              <label className="form-label fs-5">{'Matricula'}</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" value={
                role[0] ? data.Student.registration_number : data.Teacher.registration_number
                } disabled/>
          </div>
            {
                !role[0] && (
                    <div className="mb-3 text-center">
                        <label className="form-label fs-5">{'Puntuacion'}</label>
                        <input type="email" value={data.Student.average_score} class="form-control" id="exampleFormControlInput1" disabled/>
                    </div>

                )
            }

            {
                !role[1] && (
                    <div className="mb-3 text-center">
                        <label className="form-label fs-5">{'Salario'}</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" disabled/>
                    </div>

                )
            }

          <div className="mb-3 text-center">
              <label className="form-label fs-5">{'Experiencia'}</label>
              <br />
              <textarea name="" id="" cols="50" rows="5"></textarea>
          </div>

      </form>
      <div className="button-register w-100 d-flex justify-content-center">
      <button type="submit" className="btn btn-danger text-ligth form-btn-submit mt-3">Actualizar</button>
          {/*<button type="submit" className="btn btn-primary text-secondary form-btn-submit mt-3">Your declarations</button>*/}
      </div>
      
      </div>
    )
  
}

export default PerfilAcademicCard