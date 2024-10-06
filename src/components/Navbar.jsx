import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../main';
import axios from 'axios';
import { toast } from 'react-toastify';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();
  const handleLogout = async () => {
    try {
      await axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/user/patient/logout`, {
          withCredentials: true,
        })
        .then((res) => {
          toast.success(res.data.messsage);
          setIsAuthenticated(false);
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const goToLogin = async () => {
    navigateTo('/login');
  };
  return (
    <nav className='container'>
      <div className='logo'>ZeeCare</div>
      <div className={show ? 'navLinks showmenu' : 'navLinks'}>
        <div className='links'>
          <Link to='/'>HOME</Link>
          <Link to='/appointment'>APPOINTMENT</Link>
          <Link to='/about'>ABOUT US</Link>
        </div>

        {isAuthenticated ? (
          <button className='btn logoutBtn' onClick={handleLogout}>
            LOGOUT
          </button>
        ) : (
          <button className='btn loginBtn' onClick={goToLogin}>
            LOGIN
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
