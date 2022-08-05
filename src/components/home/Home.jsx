import React from 'react'
import { Link } from 'react-router-dom';
import { Authentication, GetUsers } from '../../services/api/main';

import './Home.css';

function Home() {

  return (
    <div className="container-fluid home-component p-0 m-0 me-0 ms-0 d-flex flex-column">
      <div className="home-btn-txt">
        <h1 className="text-danger fs-1">
        ADMISIONES ABIERTAS
        </h1>
        <br></br>
        <br></br>
          <p className="text fs-2">
          Las admisiones estan abiertas! Aprovecha la oportunidad para matricularte hoy
          </p>
          <Link to="/my-courses">
            <div className="btn btn-ligth border border-danger shadow-lg text-danger home-btn p-4 fs-4">
            Ver cursos disponibles
            </div>
          </Link>
      </div>
    </div>
  )
}

export default Home