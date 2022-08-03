import React from 'react'
import { useEffect } from 'react'

import { GetUsers } from '../../services/api/main'
import FormLogin from './FormLogin'

import './Login.css'

function Login() {

  useEffect(()=> {
  }, [])

  return (
    <div className="container-fluid w-75 mx-auto p-0 row flex-column login-form">
        <p className="text-center fs-3 text-danger col">
          Login
        </p>
        <div className="col-xxl-7 col-lg-8 col-sm-10 col-12 mx-auto">
          <FormLogin></FormLogin>
        </div>
    </div>
  )
}

export default Login