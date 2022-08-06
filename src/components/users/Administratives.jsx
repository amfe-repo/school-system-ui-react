import React, { useEffect, useState } from 'react'
import Users from './Users'

import './Administrative.css'
import { Link } from 'react-router-dom'
import { GetAdministratives } from '../../services/api/main'
import { getSession } from '../../services/localStorage/main'

function Administratives() {
    let [ad, setAd] = useState([])

    useEffect(()=> {
        GetAdministratives(getSession().Data.email, getSession().Data.password).then((res)=>{
        setAd(res)
        })
    }, [])
    
    return (
        <div className="container-fluid w-100 mx-auto p-0 row flex-column perfil">
            <div className="col-xxxl-5 w-75 col-xxl-7 col-lg-8 col-sm-10 col-12 mx-auto row d-flex justify-content-center">
                <Users title={'Usuarios administrativos'}  role={true} users={ad} condition={'adiminstratives'} > </Users>
            </div>
            <div className="button-register button-role d-flex justify-content-center">
                <Link className="btn btn-primary text-light form-btn-submit mt-3" to={'/roles'}> Administrar roles </Link>
            </div> 
        </div>
      )
}

export default Administratives