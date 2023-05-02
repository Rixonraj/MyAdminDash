import './App.css';
import './sb-admin-2.css';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Dashboard from './Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './User';
import CreateUser from './CreateUser';
import ViewUser from './ViewUser';
import EditUser from './EditUser';
import './fontawesome-free-6.4.0-web/css/all.min.css'
import { useContext } from 'react';
import { UserContext } from './UserContext';
import Login from './Login';
import PortalLayout from './PortalLayout';
function App() {
  const userdata = useContext(UserContext)
  return (
    <BrowserRouter>
    <Routes>
              <Route path="/" element={<Login />}></Route>
              <Route path="/portal" element={<PortalLayout />}>
                <Route path="dashboard" element={<Dashboard />}></Route>
                <Route path="users" element={<User />}></Route>
                <Route path="create_user" element={<CreateUser />}></Route>
                <Route path="user/view_user/:id" element={<ViewUser />}> </Route>
                <Route path="user/edit_user/:id" element={<EditUser />}> </Route>
              </Route>

            </Routes>
      
    </BrowserRouter>
  );
}

export default App;
