import React from 'react'

function EnrollTeaches() {
  return (
     <div className="container-fluid w-75 mx-auto p-0 row flex-column register-form">
        <div className="col-xxxl-5 col-xxl-7 col-lg-8 col-sm-10 col-12 mx-auto">
        
        <p className="text-center fs-3 text-danger col">
            Enrolar profesor
        </p>
        <form className="mx-auto my-0 border border-danger shadow-lg text-info mb-5 p-4">
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label text-secondary">Profesor</label>
                <input type="text" className="form-control" id="exampleInputEmail1" required aria-describedby="emailHelp" disabled />
            </div>
            <div className="mb-3">
                <select class="form-select" aria-label="Default select example" required>
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="button-register w-100 d-flex justify-content-center">
                <button type="submit" className="btn btn-danger text-ligth form-btn-submit mt-3">Enrolar</button>
            </div>
        </form>
        </div>
    </div>
  )
  
}

export default EnrollTeaches