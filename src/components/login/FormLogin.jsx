import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { Authentication } from '../../services/api/main';
import { getSession, insertSession } from '../../services/localStorage/main';

import './FormLogin.css'

function FormLogin() {
    
    function auth(e) {
        e.preventDefault()
        console.log("dd")
        Authentication(email, pass).then((res)=> {
            console.log("dd")
            console.log(res)
            insertSession(res)
        })
    }

    const [ email, setEmail ] = useState('');
    const [ pass, setPass ] = useState('');
    
    return (
        <>
        {getSession() && <Navigate replace to ="/perfil"/>}
    <form className="mx-auto my-0 border border-danger shadow-lg text-info p-4" onSubmit={auth}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail4" className="form-label text-secondary">Email</label>
            <input type="email" onChange={e => setEmail(e.target.value)} className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" required />
        </div>

        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label text-secondary">Password</label>
            <input type="password" onChange={e => setPass(e.target.value)} className="form-control" id="exampleInputPassword1" required />
        </div>
    <div className="button-register d-flex justify-content-center">
        <button type="submit" className="btn btn-danger text-light form-btn-submit mt-3">Login</button>
    </div>
    </form>
    </>
  )
}

export default FormLogin