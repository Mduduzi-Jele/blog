import React, { useState, useContext } from 'react';
import { MyContext } from "../App";
import { useNavigate } from 'react-router-dom';


const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const { id, setId } = useContext(MyContext);

  const handleLogin = () => {
    let matchingKey = null;
  
    for (let i = 0; i < localStorage.length; i++) {
      const key  : string | null= localStorage.key(i);
      const storedValue = localStorage.getItem(key);
  
      if (storedValue) {
        const logindetails = JSON.parse(storedValue);
  
        if (logindetails.email === email && logindetails.password === password) {
          matchingKey = key;
          break;
        }
      }
    }
  
    if (matchingKey) {
      
      setId(matchingKey);
      console.log(matchingKey);
      navigate('/home')
    } else {
      console.log('No matching key found.');
    }
  };
  
  return (
    <div>
            <div className='header-text'>
        <h1>Log-in</h1>
      </div>
      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input> <br />
      <br />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input> <br />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
