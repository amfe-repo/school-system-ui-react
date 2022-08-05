import React from 'react'
import PerfilCard from './PerfilCard'
import PerfilAcademicCard from './PerfilAcademicCard'
import { getSession } from '../../services/localStorage/main'
import { Navigate } from 'react-router-dom'

import './Perfil.css'
import { GetAcademicRole } from '../../services/api/main'


function Perfil() {

    if (!getSession()) return <Navigate replace to ="/login"/>
    const role = GetAcademicRole()

    const style = !(role[0] && role[1]) ? 'justify-content-between' : 'justify-content-center'

    return (
        <div className="container-fluid w-100 mx-auto p-0 row flex-column perfil">
            
            <div className={`col-xxxl-5 w-75 col-xxl-7 col-lg-8 col-sm-10 col-12 mx-auto row d-flex ${style}`}>
                <PerfilCard></PerfilCard>
                {
                    !(role[0] && role[1]) && (
                        <PerfilAcademicCard></PerfilAcademicCard>
                    )
                }
            </div>
        </div>
      )
}

export default Perfil