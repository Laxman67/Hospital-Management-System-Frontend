import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../main';

const Register = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [nic, setNic] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');

  const navigateTo = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user/patient/register`,
        {
          firstName,
          lastName,
          email,
          password,
          phone,
          nic,
          dob,
          gender,
          role: 'Patient',
        },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      toast.success(response.message);
      navigateTo('/');
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthenticated) {
    navigateTo('/');
  }
  useEffect(() => {}, [navigateTo, isAuthenticated]);

  return (
    <div className='container form-component register-form'>
      <h2>Sign Up</h2>
      <p>Please Sign Up To Continue </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
        placeat cum magni rerum eaque praesentium.
      </p>

      <form onSubmit={handleRegister}>
        <div>
          <input
            type='text'
            placeholder='First Name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type='text'
            placeholder='Last Name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <input
            type='text'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='number'
            placeholder='Phone Number'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <input
            type='number'
            placeholder='NIC'
            value={nic}
            onChange={(e) => setNic(e.target.value)}
          />
          <input
            type='date'
            placeholder='Date of Birth '
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Others'>Others</option>
          </select>
          <input
            type='password'
            placeholder='Password '
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div
          style={{
            gap: '10px',
            justifyContent: 'flex-end',
            flexDirection: 'row',
          }}
        >
          <p style={{ marginBottom: 0 }}>Already Registered? </p>
          <Link
            to={'/login'}
            style={{
              textDecoration: 'none',
              color: '#271776ca',
              fontWeight: 'bolder',
            }}
          >
            Login Now
          </Link>
        </div>
        <div style={{ justifyContent: 'center', alignItems: 'center' }}>
          <button type='submit'>Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
