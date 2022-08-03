import React from 'react'

function FormCourse({title, role}) {
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
              <label htmlFor="exampleInputEmail2" className="form-label text-secondary">BeginDate</label>

              <input type="date"  className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" disabled={!role} required />
          </div>
          <div className="mb-3">
              <label htmlFor="exampleInputEmail3" className="form-label text-secondary">FinishDate</label>
              <input type="date"  className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" disabled={!role} required />
          </div>
          <div className="mb-3">
              <label htmlFor="exampleInputEmail4" className="form-label text-secondary">Size</label>
              <input type="email" className="form-control" id="exampleInputEmail4" aria-describedby="emailHelp" disabled={!role} required />
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

export default FormCourse