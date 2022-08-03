import React from 'react'

function FormPermission({title, role}) {
    return (
        <>
        <p className="text-center fs-3 text-danger col">
          {title[0]}
      </p>
      <form className="mx-auto my-0 border border-danger shadow-lg text-info mb-5 p-4">
          <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label text-secondary">Name</label>
              <input type="text" className="form-control" id="exampleInputEmail1" required aria-describedby="emailHelp" disabled={!role} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail2" className="form-label text-secondary">Crear Cursos</label>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" disabled={!role}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail2" className="form-label text-secondary">Crear Roles</label>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail2" className="form-label text-secondary">Crear Usuarios</label>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" disabled={!role}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail2" className="form-label text-secondary">Enrolar usuarios</label>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" disabled={!role}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail2" className="form-label text-secondary">Editar usuarios</label>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" disabled={!role}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail2" className="form-label text-secondary">Aceptar peticiones academicas</label>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" disabled={!role}/>
          </div>
          {
              role && (
                  <div className="button-register w-100 d-flex justify-content-center">
                      <button type="submit" className="btn btn-danger text-ligth form-btn-submit mt-3">{title[1]}</button>
                  </div>
              )
          }
      </form>
      </>
    )
}

export default FormPermission