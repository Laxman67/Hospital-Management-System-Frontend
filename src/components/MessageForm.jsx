import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';

const MessageForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const handleMessage = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('message', message);

    try {
      await axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/message/send`, formData, {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          toast.success(res.data.message);
          // Reset
          setFirstName('');
          setLastName('');
          setEmail('');
          setPhone('');
          setMessage('');
        });
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className='container form-component  message-form'>
      <h2>Sent Us A Message</h2>

      <form onSubmit={handleMessage}>
        <div>
          <input
            type='text'
            value={firstName}
            placeholder='First Name'
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type='text'
            value={lastName}
            placeholder='Last Name'
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <input
            type='email'
            value={email}
            placeholder='Email...'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='number'
            value={phone}
            placeholder='Phone Number'
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <textarea
          rows='7'
          value={message}
          placeholder='message'
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default MessageForm;
