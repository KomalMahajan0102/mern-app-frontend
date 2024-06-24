
import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route } from "react-router-dom";
import  Home  from './Pages/Home'
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Footer from './Components/Footer';
import Error from './Pages/Error';
import AdminLayout from './Components/Admin-Layout';
import Logout from './Pages/Logout';
import AdminContacts from './Pages/Admin-Contacts';
import AdminUsers from './Pages/Admin-Users';
import UserUpdate from './Pages/User-Update';


function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Service />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path='/admin/users/:id/edit' element={<UserUpdate/>}/>
        <Route path="/admin" element={<AdminLayout/>}>
          <Route path='users' element={<AdminUsers/>}/>
          <Route path='contacts' element={<AdminContacts/>}/>
         
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer></Footer>  
    </div>
  );
}

export default App;
