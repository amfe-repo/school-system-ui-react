import React from 'react'
import { Link } from 'react-router-dom';


import './PerfilCard.css'

function PerfilCard() {
    const data = 12;

    return (
        <div className='col-5'>
        <p className="text-center fs-3 text-danger fw-bold">
            Mi perfil
        </p>
      <form className="mx-auto my-0 border border-danger shadow-lg text-secondary p-4 h-75">
          <div className="mb-3 text-center">
              <label className="form-label fs-5">{data.name ? data.name :'Nombre'}</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" disabled/>
          </div>
  
          <div className="mb-3 text-center">
              <label className="form-label fs-5">{data.lastname ? data.lastname :'Apellido'}</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" disabled/>
          </div>
  
          <div className="mb-3 text-center">
              <label className="form-label fs-5">{data.lastname ? data.lastname :'Nombre de usuario'}</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" />
          </div>
          
          <div className="mb-3 text-center">
              <label className="form-label fs-5">{data.lastname ? data.lastname :'Email'}</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" disabled/>
          </div>

          <div className="mb-5 text-center">
              <label className="form-label fs-5">{data.phone ? data.phone :'Estado'}</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" disabled/>
          </div>
      </form>
      <div className="button-register w-100 d-flex justify-content-center">
          <Link to="/your-declaration" type="submit" className="btn btn-danger text-ligth form-btn-submit mt-3">Actualizar</Link>
          {/*<button type="submit" className="btn btn-primary text-secondary form-btn-submit mt-3">Your declarations</button>*/}
      </div>
      
      </div>
    )
  
}

export default PerfilCard