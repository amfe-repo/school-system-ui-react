import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Courses from './components/courses/Courses';
import MyCourses from './components/courses/MyCourses';
import Perfil from './components/perfil/Perfil';
import Students from './components/users/Students';
import Administratives from './components/users/Administratives';
import Roles from './components/users/Roles';
import Teachers from './components/users/Teachers';
import EditViewUser from './components/users/EditViewUser';
import EditViewCourse from './components/courses/EditViewCourse';
import RoleEditView from './components/users/RoleEditView';

import './App.css';
import EditViewPermission from './components/permisos/EditViewPermission';
import EnrollTeaches from './components/users/EnrollTeaches';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/courses' element={<Courses/>}></Route>
          <Route path='/my-courses' element={<MyCourses/>}></Route>
          <Route path='/perfil' element={<Perfil/>}></Route>
          <Route path='/students' element={<Students/>}></Route>
          <Route path='/administration' element={<Administratives/>}></Route>
          <Route path='/roles' element={<Roles/>}></Route>
          <Route path='/teachers' element={<Teachers/>}></Route>
          <Route path='/user-edit' element={<EditViewUser mode={'edit'} />}></Route>
          <Route path='/user-view' element={<EditViewUser mode={'view'}/>}></Route>
          <Route path='/user-create' element={<EditViewUser mode={'create'}/>}></Route>

          <Route path='/course-edit' element={<EditViewCourse mode={'edit'}/>}></Route>
          <Route path='/course-create' element={<EditViewCourse mode={'create'}/>}></Route>
          <Route path='/course-view' element={<EditViewCourse mode={'view'}/>}></Route>

          <Route path='/role-edit' element={<RoleEditView mode={'edit'}/>}></Route>
          <Route path='/role-view' element={<RoleEditView mode={'view'}/>}></Route>
          <Route path='/role-create' element={<RoleEditView mode={'create'}/>}></Route>

          <Route path='/permission-edit' element={<EditViewPermission mode={'edit'}/>}></Route>
          <Route path='/permission-view' element={<EditViewPermission mode={'view'}/>}></Route>
          <Route path='/permission-create' element={<EditViewPermission mode={'create'}/>}></Route>

          <Route path='/enroll-teacher' element={<EnrollTeaches/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
