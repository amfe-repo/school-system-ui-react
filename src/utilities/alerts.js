import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const successAlert = (title)=>
{
    return MySwal.fire({
        title: title,
        footer: "INDET",
        icon: "success"
    });
}

const errorAlert = (title)=>
{
    return MySwal.fire({
        title: title,
        footer: "INDET",
        icon: "error"
    });
}

export {successAlert, errorAlert};