import Config from '../../config/env.json'
import { getSession } from '../../services/localStorage/main';
import { errorAlert, successAlert } from '../../utilities/alerts'
import PermissionsEnum from './permissions'


export async function GetUsers() {
    let result = await fetch( Config.API.URL + 'users/', {
    headers:{
      'Session-user-data':'{"email":"dddd@ht56.com", "password":"12345"}'
    }
  })

  let json = await result.json()

  console.log(json)
} 

export async function GetCourses() {
    let result = await fetch( Config.API.URL + 'courses/', {
  })

  let json = await result.json()

  return json
} 

export async function GetEnrolled(email, pass) {
  let result = await fetch( Config.API.URL + 'enroll-courses/', {
    headers:{
      'Session-user-data':`{"email":"${email}", "password":"${pass}"}`
    }
})

  let json = await result.json()

  return json
}

export async function GetStudents(email, pass) {
  let result = await fetch( Config.API.URL + 'students/', {
    headers:{
      'Session-user-data':`{"email":"${email}", "password":"${pass}"}`
    }
})

  let json = await result.json()

  return json
}

export async function GetTeachers(email, pass) {
  let result = await fetch( Config.API.URL + 'teachers/', {
    headers:{
      'Session-user-data':`{"email":"${email}", "password":"${pass}"}`
    }
})

  let json = await result.json()

  return json
}

export async function GetAdministratives(email, pass) {
  let result = await fetch( Config.API.URL + 'users/', {
    headers:{
      'Session-user-data':`{"email":"${email}", "password":"${pass}"}`
    }
})

  let json = await result.json()

  let response = {Data: json.Data.filter(user => user.administrative_role.ID > 1)} 

  return response
}

export async function GetRoles(email, pass) {
  let result = await fetch( Config.API.URL + 'roles/', {
    headers:{
      'Session-user-data':`{"email":"${email}", "password":"${pass}"}`
    }
})

  let json = await result.json()

  return json
}

export async function GetPermissions(email, pass) {
  let result = await fetch( Config.API.URL + 'permissions/', {
    headers:{
      'Session-user-data':`{"email":"${email}", "password":"${pass}"}`
    }
})

  let json = await result.json()

  return json
}

export async function GetStudentsRequests(email, pass) {
  let result = await fetch( Config.API.URL + 'request-courses/', {
    headers:{
      'Session-user-data':`{"email":"${email}", "password":"${pass}"}`
    }
})

  let json = await result.json()

  return json
}

export async function Authentication(email, password) {
  let raw = await fetch( Config.API.URL + 'login/', {
    method: 'POST',
    body: JSON.stringify({"email":email, "password":password})
  })

  let response = await raw.json()

  if (!response.Data || response.Status != 'ok') {
      console.log(response)
      return false
  }

  return response
}

export async function RegisterUser(user, condition) {
  async function register() {
    let raw = await fetch( url, {
      method: 'POST',
      body: JSON.stringify({
        "email":user.email,
        "password":user.password,
        "lastname":user.lastname,
        "username":user.username,
        "name":user.name
      })
    })
    
    let response = await raw.json()
  
    if (response.Status == 'ok') {
      console.log(response)
      successAlert('User registered');
      return
    }

    errorAlert('User not registered');
  }

  let url = ""

  if (condition == "1") {
    url = Config.API.URL + 'students/create-user'
    await register()
  }

  if (condition == "2") {
    url = Config.API.URL + 'teachers/create-user'
    await register()
  }

}

export function AdminAuthorization() {}

export function GetAcademicRole() {
  let session = getSession()
  if (session.Status == "ok" && session.Data != null) {
    return [session.Data.Student.ID != 0, session.Data.Teacher.ID != 0]
  }
}

export function Authorization(permission) {
  let session = getSession()
  
  if (session.Status == "ok" && session.Data != null) {
    let userPermission = session.Data.administrative_role.PermissionGroup

    if (permission == PermissionsEnum.AcceptAcademicRequestPermission) {
      return userPermission.AcceptAcademicRequestPermission == "1"
    }

    if (permission == PermissionsEnum.CreateCoursePermission) {
      return userPermission.CreateCoursePermission == "1"
    }

    if (permission == PermissionsEnum.CreateRolePermission) {
      return userPermission.CreateRolesPermission == "1"
    }

    if (permission == PermissionsEnum.CreateUsersPermission) {
      return userPermission.CreateUsersPermission == "1"
    }

    if (permission == PermissionsEnum.EditUserPermission) {
      return userPermission.EditUserPermission == "1"
    }

    if (permission == PermissionsEnum.EnrollUserPermission) {
      return userPermission.EnrollUserPermission == "1"
    }
  }
}


