import { useState } from 'react';
import { Navigate } from 'react-router-dom';

import { errorAlert } from '../../utilities/alerts';

import { getSession } from '../../services/localStorage/main';
import { RegisterUser } from '../../services/api/main';

import './FormRegister.css';

export default function FormRegister() {
    
    const [name, setName] = useState("");
    const [last, setLast] = useState("");
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [vefPass, setVefPass] = useState("");
    const [condition, setCondition] = useState("1")

    const createUser = (e)=>
    {
        e.preventDefault();

        if(password != vefPass)
        {
            errorAlert('Passwords do not match');
            return;
        } 

        try {
            RegisterUser({
                name: name,
                lastname: last,
                username: user,
                email: email,
                password: password
            }, condition);
        } catch (error) {
            console.log(error)
            errorAlert('User not registered');
        }
    }

    {getSession() && <Navigate replace to ="/perfil"/>}
  return (
      <>
    <form className="mx-auto my-0 border border-danger shadow-lg text-info mb-5 p-4" onSubmit={createUser}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label text-secondary">Name</label>
            <input type="text" onChange={ e => setName(e.target.value) } className="form-control" id="exampleInputEmail1" required aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail2" className="form-label text-secondary">Lastname</label>
            <input type="text" onChange={ e => setLast(e.target.value) } className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" required />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail3" className="form-label text-secondary">User</label>
            <input type="text" onChange={ e => setUser(e.target.value) } className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" required />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail4" className="form-label text-secondary">Email</label>
            <input type="email" onChange={ e => setEmail(e.target.value) } className="form-control" id="exampleInputEmail4" aria-describedby="emailHelp" required />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label text-secondary">Password</label>
            <input type="password" onChange={ e => setPassword(e.target.value) } className="form-control" id="exampleInputPassword1" required />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword2" className="form-label text-secondary">Verify password</label>
            <input type="password" onChange={ e => setVefPass(e.target.value) } className="form-control" id="exampleInputPassword2" required />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword2" className="form-label text-secondary">Condicion</label>
            <select className="form-select" aria-label="Default select example" onChange={ (sel) =>{ setCondition(sel.target.options[sel.target.selectedIndex].value) } } required>
                <option value="1">Estudiante</option>
                <option value="2">Profesor</option>
            </select>
        </div>
        <div className="button-register w-100 d-flex justify-content-center">
            <button type="submit" className="btn btn-danger text-ligth form-btn-submit mt-3">Send</button>
        </div>
    </form>
    </>
  )
}
