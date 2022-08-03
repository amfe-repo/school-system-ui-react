import React, { useState } from 'react'

import './FormLogin.css'

function FormLogin() {

    const [ email, setEmail ] = useState('');
    const [ pass, setPass ] = useState('');
    
    //{getSession() && <Navigate replace to ="/perfil"/>}
  return (
      <>
    <form className="mx-auto my-0 border border-danger shadow-lg text-info p-4">
        <div className="mb-3">
            <label htmlFor="exampleInputEmail4" className="form-label text-secondary">Email</label>
            <input type="email" onChange={e => setEmail(e.target.value)} className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" required />
        </div>

        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label text-secondary">Password</label>
            <input type="password" onChange={e => setPass(e.target.value)} className="form-control" id="exampleInputPassword1" required />
        </div>
    <div className="button-register d-flex justify-content-center">
        <button type="submit" className="btn btn-danger text-light form-btn-submit mt-3">Send</button>
    </div>
    </form>
    </>
  )
}

export default FormLogin