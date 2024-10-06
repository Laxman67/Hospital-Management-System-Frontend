import { useContext, useState } from 'react';
import { Context } from '../main';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (isAuthenticated) {
      return navigateTo('/');
    }

    try {
      let formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);
      formData.append('confirmPassword', confirmPassword);
      formData.append('role', 'Patient');

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user/login`,
        formData,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      toast.success(response.data.message);
      // Reset Fields
      setConfirmPassword('');
      setPassword('');
      setEmail('');
      setIsAuthenticated(true);
      navigateTo('/');
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className='container form-component login-form'>
        <h2>Sign In</h2>
        <p>Please Login To Continue</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat culpa
          voluptas expedita itaque ex, totam ad quod error?
        </p>
        <form onSubmit={handleLogin}>
          <input
            type='text'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type='password'
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div
            style={{
              gap: '10px',
              justifyContent: 'flex-end',
              flexDirection: 'row',
            }}
          >
            <p style={{ marginBottom: 0 }}>Not Registered?</p>
            <Link
              to={'/register'}
              style={{ textDecoration: 'none', color: '#271776ca' }}
            >
              Register Now
            </Link>
          </div>
          <div style={{ justifyContent: 'center', alignItems: 'center' }}>
            <button type='submit'>Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
