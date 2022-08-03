export async function GetUsers() {
    let result = await fetch('http://192.168.10.40:4000/users/', {
    headers:{
      'Session-user-data':'{"email":"dddd@ht56.com", "password":"12345"}'
    }
  })

  let json = await result.json()

  console.log(json)
} 