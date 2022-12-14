import { Navigate } from "react-router-dom";

export function insertSession(value)
{
    if(value)
    {
        window.localStorage.setItem('sesion', JSON.stringify(value));
        setTimeout(()=>
        {
            window.location.replace('/perfil');
        }, 1000);
    }
    else
        return false;
    
    return true;
}

export function getSession()
{
    const value =  window.localStorage.getItem('sesion');
    return value ? JSON.parse(value) : false;
}

export function destroySession()
{
    window.localStorage.removeItem('sesion');
    window.location.replace('/login');
}

export function VerifyNotSession(url) {
    if (!getSession()) return <Navigate replace to ={url}/>
}