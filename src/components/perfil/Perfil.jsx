import React from 'react'
import PerfilCard from './PerfilCard'
import PerfilAcademicCard from './PerfilAcademicCard'

import './Perfil.css'

function Perfil() {
    return (
        <div className="container-fluid w-100 mx-auto p-0 row flex-column perfil">
            
            <div className="col-xxxl-5 w-75 col-xxl-7 col-lg-8 col-sm-10 col-12 mx-auto row d-flex justify-content-between">
                <PerfilCard></PerfilCard>
                <PerfilAcademicCard></PerfilAcademicCard>
            </div>
        </div>
      )
}

export default Perfil