import React from 'react'
import { Link } from 'react-router-dom'
import { GetAcademicRole } from '../../services/api/main'
import { destroySession, getSession } from '../../services/localStorage/main'

export default function Navbar() {
  let role = GetAcademicRole()
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-2">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">INDET</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNav">
      <ul className="navbar-nav fs-5">
      <li className="nav-item">
      <Link className="nav-link" to={'/'}>Home</Link>
      </li>
      {!getSession() && (
          <li className="nav-item">
          <Link className="nav-link" to={'/login'}>Iniciar sesion</Link>
          </li>
        )
      }

    {!getSession() && (
            <li className="nav-item">
            <Link className="nav-link" to={'/register'}>Registrarse</Link>
            </li>
            )
          }
      
      {getSession() && (
          <li className="nav-item">
          <Link className="nav-link" to={'/perfil'}>Perfil</Link>
          </li>
        )
      }


{getSession() && role[0] || (!role[0] && !role[1]) && (
  <li className="nav-item">
          <Link className="nav-link" to={'/courses'}>Cursos disponibles</Link>
          </li>
        )
      }

{getSession() && (role[0] || role[1]) && (
  <li className="nav-item">
          <Link className="nav-link" to={'/my-courses'}>Mis cursos</Link>
          </li>
        )
      }

{getSession() && (
  <li className="nav-item">
          <Link className="nav-link" to={'/students'}>Estudiantes</Link>
          </li>
        )
      }
      
{getSession() && (
  <li className="nav-item">
          <Link className="nav-link" to={'/teachers'}>Profesores</Link>
          </li>
        )
      }

{getSession() && (
  <li className="nav-item">
          <Link className="nav-link" to={'/administration'}>Administracion</Link>
          </li>
        )
      }
        
  {getSession() && (
            <li className="nav-item">
            <a className="nav-link" onClick={destroySession} href="">Cerrar sesion</a>
          </li>
          )
        }
        
        
      </ul>
    </div>
  </div>
</nav>
  )
}
