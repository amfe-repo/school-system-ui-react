import React from 'react'

function FormRole({title, role}) {
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
            <label htmlFor="exampleInputEmail2" className="form-label text-secondary">Permisos</label>

            <select class="form-select" aria-label="Default select example" disabled={!role} required>
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
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

export default FormRole