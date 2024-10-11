import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from '../src/Pages/AboutUs';
import Appointment from '../src/Pages/Appointment';
import Login from '../src/Pages/Login';
import Home from '../src/Pages/Home';
import Register from '../src/Pages/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Footer from '../src/components/Footer';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { Context } from './main';

const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `https://hospital-management-system-backend-g3q3.onrender.com/user/patient/me`,
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, [isAuthenticated]);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/appointment' element={<Appointment />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
        <ToastContainer position='top-center' />
      </Router>
    </>
  );
};

export default App;
